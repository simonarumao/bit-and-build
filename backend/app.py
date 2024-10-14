from flask import Flask, render_template, request, jsonify, redirect, url_for
import google.generativeai as genai
from flask_cors import CORS
import numpy as np
import cv2
import pytesseract
from keras.models import load_model
from PIL import Image
import io
import pandas as pd
import os
from flask import send_from_directory

# Initialize Flask app and CORS
app = Flask(__name__, static_folder='food-nutrition-app/build')
CORS(app)

df = pd.read_csv(r'C:\\Users\\simon\\Desktop\\bit and build\\backend\\food_nutrition_data.csv')


# Set Tesseract OCR path
pytesseract.pytesseract.tesseract_cmd = r'C://Program Files//Tesseract-OCR//tesseract.exe'

# Configure the Gemini API
genai.configure(api_key="AIzaSyBlVwSfo4QGRZZ44aR4ZzxtirYwLHyjzl4")

# Load the trained model for potato chip prediction
model = load_model('potato_chip_model.h5')

# Function to extract text from image using OCR
def extract_text_from_image(image):
    text = pytesseract.image_to_string(image)
    return text

# Function to predict whether a potato chip is defective
def predict_image(image):
    img = cv2.imdecode(np.frombuffer(image, np.uint8), cv2.IMREAD_COLOR)
    img = cv2.resize(img, (128, 128)) / 255.0
    img = np.expand_dims(img, axis=0)
    prediction = model.predict(img)
    return "Defective" if prediction < 0.5 else "Not Defective"

# Function to get health hazards based on ingredients using Gemini API
def get_gemini_health_hazards(ingredients, prompt):
    model = genai.GenerativeModel('gemini-1.5-flash')
    response = model.generate_content([ingredients, prompt])
    return response.text

# Gemini API functions for ingredient analysis
def get_safety_analysis(ingredients):
    prompt = (
        f"Please analyze the following ingredients for their safety: "
        f"{ingredients}. State whether each ingredient is safe and whether it is permitted or banned. "
        f"Provide a single line for each ingredient."
    )
    model = genai.GenerativeModel('gemini-1.5-flash')
    response = model.generate_content([ingredients, prompt])
    return response.text.strip()

def get_benefits(ingredients):
    prompt = f"List 5 key benefits of the following ingredients: {ingredients}. Provide the key benefits or impacts in a concise format."
    model = genai.GenerativeModel('gemini-1.5-flash')
    response = model.generate_content([ingredients, prompt])
    return response.text.strip()

def get_health_impacts(ingredients):
    prompt = f"List the health impacts of the following ingredients: {ingredients}. Provide the impacts in points."
    model = genai.GenerativeModel('gemini-1.5-flash')
    response = model.generate_content([ingredients, prompt])
    return response.text.strip()

def get_allergies(ingredients):
    prompt = f"List potential allergies associated with the following ingredients: {ingredients}. Provide the allergies in points."
    model = genai.GenerativeModel('gemini-1.5-flash')
    response = model.generate_content([ingredients, prompt])
    return response.text.strip()

@app.route("/extract_text", methods=["POST"])
def extract_text():
    if 'image' not in request.files:
        return jsonify({'error': 'No image uploaded'}), 400
    
    image_file = request.files['image']
    
    if image_file.filename == '':
        return jsonify({'error': 'No image selected'}), 400
    
    # Process the image to extract text
    image = Image.open(image_file.stream)
    extracted_text = extract_text_from_image(image)  # Your custom function for OCR
    
    return jsonify({'extracted_text': extracted_text})

# Route to handle health hazard analysis based on extracted ingredients
@app.route("/analyze", methods=["POST"])
def analyze():
    if request.method == "POST":
        ingredients = request.json.get("ingredients")  # Get data from JSON body

        gemini_prompt = """
            You are an AI health hazard detector with expertise in food safety and nutrition. Your task is to analyze the provided list of food ingredients thoroughly and provide detailed insights while adhering to the following guidelines:

            1. Identify Potential Health Risks: For each ingredient, clearly indicate any potential health risks, especially diseases that may be associated with its consumption.
            2. Disease Associations: For each ingredient, provide a list of possible diseases that may arise from its consumption, including but not limited to:
            - Allergic reactions.
            - Chronic illnesses.
            - Any relevant health conditions that could be exacerbated by the ingredient.
            3. Output Format: Use plain text, 4-5 words per feature. Avoid any formatting symbols (such as asterisks or bullet points) to ensure straightforward readability.
        """

        # Send data to Gemini and get health hazards report (assume this is defined elsewhere)
        health_hazards_report = get_gemini_health_hazards(ingredients, gemini_prompt)

        # Clean the report of any unwanted formatting symbols
        cleaned_report = health_hazards_report.replace("*", "").replace("**", "").replace("?", "").replace("##", "")

        # Send JSON response back to the frontend
        return jsonify({
            "report": cleaned_report
        })
# API route for safety analysis
@app.route("/api/safety", methods=["POST"])
def safety():
    data = request.json
    ingredients = data.get("ingredients", "")
    safety_result = get_safety_analysis(ingredients)
    safety_result = safety_result.replace("", "").replace("*", "").replace("?", "").replace("##", "")
    return jsonify({"safety": safety_result})

# API route for benefits analysis
@app.route("/api/benefits", methods=["POST"])
def benefits():
    data = request.json
    ingredients = data.get("ingredients", "")
    benefits_result = get_benefits(ingredients)
    benefits_result = benefits_result.replace("", "").replace("*", "").replace("?", "").replace("##", "")

    return jsonify({"benefits": benefits_result})

# API route for health impacts
@app.route("/api/health_impacts", methods=["POST"])
def health_impacts():
    data = request.json
    ingredients = data.get("ingredients", "")
    health_impacts_result = get_health_impacts(ingredients)
    health_impacts_result = health_impacts_result.replace("", "").replace("*", "").replace("?", "").replace("##", "")
    return jsonify({"health_impacts": health_impacts_result})

# API route for allergies
@app.route("/api/allergies", methods=["POST"])
def allergies():
    data = request.json
    ingredients = data.get("ingredients", "")
    allergies_result = get_allergies(ingredients)
    allergies_result = allergies_result.replace("", "").replace("*", "").replace("?", "").replace("##", "")

    return jsonify({"allergies": allergies_result})

# API route for image upload and prediction
@app.route("/api/predict", methods=["POST"])
def predict():
    if 'image' not in request.files:
        return jsonify({"error": "No image provided"}), 400
    
    file = request.files['image']
    if file:
        image_bytes = file.read()
        prediction = predict_image(image_bytes)
        return jsonify({"prediction": prediction})
    else:
        return jsonify({"error": "Failed to read image"}), 400
    

# API to fetch data for a specific food
@app.route('/api/food/<food_name>', methods=['GET'])
def get_food_data(food_name):
    print("hello")
    # Normalize the input to avoid case/whitespace issues
    food_name_cleaned = food_name.strip().lower()

    # Normalize the food names in the dataset and look for matches
    df['food_cleaned'] = df['food'].str.strip().str.lower()
    food_data = df[df['food_cleaned'] == food_name_cleaned].to_dict(orient='records')
    print(food_data)
    if food_data:
        print(jsonify(food_data[0]) )
        return jsonify(food_data[0])  # Send the first match
    else:
        return jsonify({"error": "Food not found"}), 404

if __name__ == "__main__":
    app.run(debug=True)
