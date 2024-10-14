import React, { useState } from 'react';
import { MdOutlineFoodBank } from "react-icons/md";
import Navbar from './Navbar';


const ImageUpload = () => {
    const [image, setImage] = useState(null);
    const [prediction, setPrediction] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [imagePreview, setImagePreview] = useState('');

    const handleImageChange = (event) => {
        const selectedImage = event.target.files[0];
        if (selectedImage) {
            setImage(selectedImage);
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result); // Set image preview
            };
            reader.readAsDataURL(selectedImage);
            setPrediction(''); // Reset prediction on new file selection
            setError(''); // Reset error message
            alert('Image uploaded successfully!'); // Alert on upload
        }
    };

    const data = [
        "Potatoes",
        "Vegetable Oil",
        "Salt",
        "Preservatives (like TBHQ",
        "Flavor Enhancers"

    ]

    const accData = [

    ]

    const handleUpload = async () => {
        if (!image) {
            setError('Please upload an image');
            return;
        }

        const formData = new FormData();
        formData.append('image', image);

        setLoading(true); // Set loading state
        setError(''); // Reset error message

        try {
            const response = await fetch('http://localhost:5000/api/predict', {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            setPrediction(data.prediction); // Set prediction result
        } catch (err) {
            setError('Failed to fetch prediction: ' + err.message); // Handle errors
        } finally {
            setLoading(false); // Reset loading state
        }
    };

    return (
        
        <div className='bg-[#1F2937] -mt-32'>
        <Navbar/>
            <div className='mt-32 '>
                
        <h2 className="text-[40px] font-semibold text-center mb-4 font-manrope pt-24 text-white ">Food Defect Detection</h2>
        <div className="max-w-lg mx-auto p-5 bg-white rounded-lg shadow-lg mt-8">
            
            <div className="flex flex-col items-center justify-center mb-4">
                <label 
                    htmlFor="dropzone-file" 
                    className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition duration-200 ease-in-out"
                >
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        {imagePreview ? (
                            <img 
                                src={imagePreview} 
                                alt="Uploaded Preview" 
                                className="w-72 h-60 object-cover rounded-lg" // Set width and height for smaller size
                            />
                        ) : (
                            <>
                                <svg 
                                    className="w-10 h-10 mb-4 text-gray-500" 
                                    aria-hidden="true" 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    fill="none" 
                                    viewBox="0 0 20 16"
                                >
                                    <path 
                                        stroke="currentColor" 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        strokeWidth="2" 
                                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                                    />
                                </svg>
                                <p className="mb-2 text-sm text-gray-500">
                                    <span className="font-semibold">Click to upload</span> or drag and drop
                                </p>
                                <p className="text-xs text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                            </>
                        )}
                    </div>
                    <input 
                        id="dropzone-file" 
                        type="file" 
                        className="hidden" 
                        accept="image/*" 
                        onChange={handleImageChange} 
                    />
                </label>
            </div>
            <button 
                onClick={handleUpload} 
                disabled={loading} 
                className={`w-full py-2 mt-4 text-white rounded-lg ${loading ? 'bg-gray-400' : 'bg-orange-400  transition duration-200 ease-in-out'}`}
            >
                {loading ? 'Uploading...' : 'Upload Image'}
            </button>
            {error && <p className="error text-red-500 mt-2 font-bold text-center">{error}</p>}
            {prediction && <p className="result text-green-500 font-bold mt-2 text-center">Prediction: {prediction}</p>}
            </div>
            <div className='flex flex-col items-center mt-16  ' >
                <div className='font-semibold text-[32px] text-white  font-inter'>Ingredients List</div>
                <div className='flex mt-9 mb-8'>
                    <div className='flex space-x-8 '>
                    {data.map((ingredient, index) => (
                    <li key={index} className="text-black list-none border px-4 py-3 bg-[#EBEDED] rounded-lg">
                        {ingredient}
                    </li>
                ))}  
                    </div>
                </div>
            </div>
            </div>
            <footer className="w-full py-4 bg-gray-800 text-center text-white mt-auto pt-16">
          <span>© 2024 AI-Powered Food Safety System</span>
        </footer>
            </div>
    );
};

export default ImageUpload;
