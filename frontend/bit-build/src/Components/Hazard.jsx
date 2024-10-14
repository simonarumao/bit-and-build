import React, { useState } from 'react';
import axios from 'axios'; // For making HTTP requests
import Navbar from './Navbar'
import { FaCheck } from "react-icons/fa";


const Hazard = () => {
    const [imagePreview, setImagePreview] = useState(null);
    const [extractedText, setExtractedText] = useState('');
    const [report, setReport] = useState('');
    const [isAnalyzing, setIsAnalyzing] = useState(false);
  
    // Handle image change and trigger text extraction
    const handleImageChange = async (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setImagePreview(reader.result);
        };
        reader.readAsDataURL(file);
  
        // Create FormData to send the image to the backend
        const formData = new FormData();
        formData.append('image', file);
  
        // Send the image to the Flask backend for text extraction
        try {
          const response = await axios.post('http://localhost:5000/extract_text', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });
          setExtractedText(response.data.extracted_text); // Assuming the backend returns this
        } catch (error) {
          console.error('Error extracting text:', error);
        }
      }
    };
  
    // Handle ingredients analysis
    const handleAnalyze = async () => {
      setIsAnalyzing(true);
      try {
        const response = await axios.post('http://localhost:5000/analyze', { ingredients: extractedText });
        setReport(response.data.report); // Assuming the backend returns this
      } catch (error) {
        console.error('Error analyzing ingredients:', error);
      } finally {
        setIsAnalyzing(false);
      }
    };
    const renderAsList = (text) => {
      if (text) {
          return text.split(/[0-9]\.|•|\n|\r/).map((point, index) => {
              // Check for colon and split the text
              const parts = point.trim().split(/:/);
              if (parts.length > 1) {
                  return (
                      <li key={index} className="flex items-center space-x-2">
                          <FaCheck  />
                          <span className="text-orange-400">{parts[0].trim()}:</span> {/* Color before colon */}
                          <span>{parts.slice(1).join(":").trim()}</span> {/* Remaining text */}
                      </li>
                  );
              }
              return (
                  point.trim() !== "" && (
                      <li key={index} className="flex items-center space-x-2">
                          <FaCheck />
                          <span>{point.trim()}</span>
                      </li>
                  )
              );
          });
      }
      return null;
  };
    return (
      <div className="min-h-screen flex flex-col items-center bg-[#1F2937] p-5 pt-16">
        <Navbar/>
        <div className="w-full max-w-xl mt-16">
        <h2 className="text-[32px] font-bold text-center mb-4 font-manrope text-white">Health Hazards Detector</h2>
          <div className="bg-white shadow-md rounded-lg p-6">
            
  
            {/* Image Upload Form */}
            <form className="mb-4">
              <label className="block mb-2 text-gray-600 font-inter" htmlFor="image">Upload an image of the product's back (with nutrition facts and ingredients):</label>
              <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                <input
                  className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg p-2 focus:outline-none"
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  required
                />
                
              </div>

          

            </form>
  
            {/* Image Preview */}
            {imagePreview && (
              <div className="mt-4">
                <h3 className="text-black font-inter font-semibold mb-2">Image Preview:</h3>
                <img src={imagePreview} alt="Image Preview" className="w-full h-full object-cover rounded-lg" />
              </div>
            )}
  
            {/* Extracted Text */}
            {extractedText && (
              <div className="mt-6">
                <h4 className="text-[#1F2937] text-lg font-semibold">Extracted Ingredients:</h4>
                <p className="text-gray-700">{extractedText}</p>
  
                {/* Ingredients Analysis Button */}
                <button
                  onClick={handleAnalyze}
                  className="mt-4 w-full bg-orange-300 hover:bg-orange-400 text-white py-2 rounded-lg"
                  disabled={isAnalyzing}
                >
                  {isAnalyzing ? 'Analyzing...' : 'Analyze Ingredients'}
                </button>
              </div>
            )}
  
            {/* Health Hazards Report */}
            {report && (
              <div className="mt-6">
                <h4 className="text-red-600 text-lg font-semibold">Health Hazards Report:</h4>
                <p className="text-gray-700">{renderAsList(report)}</p>
              </div>
            )}
          </div>
        </div>
  
        <footer className="w-full py-4 bg-gray-800 text-center text-white mt-auto">
          <span>© 2024 AI-Powered Food Safety System</span>
        </footer>
      </div>
    );
  };

export default Hazard