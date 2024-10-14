import React, { useState } from "react";
import axios from "axios";
import { IoWarningOutline } from "react-icons/io5";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { FaRegThumbsUp } from "react-icons/fa";
import { MdHealthAndSafety } from "react-icons/md";
import { FaAngleUp } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa6";
import { IoIosSettings } from "react-icons/io";
import { FaCheck } from "react-icons/fa";
import Navbar from "./Navbar";



function IngredientAnalysis() {
    const [ingredients, setIngredients] = useState("");
    const [results, setResults] = useState({
        safety: "",
        benefits: "",
        health_impacts: "",
        allergies: ""
    });

    const [openSection, setOpenSection] = useState(null);

    // Function to toggle the visibility of each section
    const toggleSection = (section) => {
        setOpenSection(openSection === section ? null : section);
    };

    const handleAnalyze = async (type) => {
        try {
            const response = await axios.post(`http://localhost:5000/api/${type}`, {
                ingredients: ingredients,
            });
            setResults((prevResults) => ({
                ...prevResults,
                [type]: response.data[type],
            }));
        } catch (error) {
            console.error("Error analyzing ingredients:", error);
        }
    };

    const renderAllergies = (allergyData) => {
        return allergyData.split('\n').map((item, index) => {
            return (
                <div
                    key={index}
                    className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-3 mb-2 rounded-md"
                >
                    {item.trim()}
                </div>
            );
        });
    };

    // Helper function to split text by periods or new lines
    // Helper function to split text by periods or new lines
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
        <div className="flex flex-col items-center justify-center min-h-screen bg-[#1F2937] p-4 pt-16 px-48 ">
            <Navbar/>
            <div className="flex space-x-3 mt-20">
            <h1 className="text-4xl font-semibold text-center text-white mb-12 font-inter ">AI-Based Ingredient Analysis Tool</h1>
                <IoIosSettings className="text-[32px] mt-1 text-white" />
            </div>

            <div className="md:mx-28 mt-8 mb-6 p-8 bg-white shadow-lg rounded-2xl w-full">
                <div className="bg-[#1F2937] rounded-lg py-1">
                    <h2 className="text-center text-white text-md md:text-lg font-semibold"> Ingredients</h2>
                </div>
                <div className="mb-6 mt-8">
                    <label htmlFor="default-input" className="block mb-2 text-sm font-medium text-black dark:text-white">List of Ingredients</label>
                    <input 
                        type="text" 
                        onChange={(e) => setIngredients(e.target.value)} 
                        id="default-input" 
                        placeholder="Enter Ingredients" 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-200 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                </div>
                <div className="mt-4 flex justify-center space-x-4">
                    <div className="bg-[#EBEDED] text-black font-semibold py-2 px-4 rounded-md shadow flex space-x-2">
                        <AiOutlineSafetyCertificate className="mt-1 text-[17px]" />
                        <button onClick={() => handleAnalyze("safety")}>
                            Analyze Safety
                        </button>
                    </div>
                    <div className="bg-[#17C6ED] text-white font-semibold py-2 px-4 rounded-md shadow flex space-x-2">
                        <FaRegThumbsUp className="mt-1 text-[17px]" />
                        <button onClick={() => handleAnalyze("benefits")}>
                            Show Benefits
                        </button>
                    </div>
                    <div className="bg-[#EBEDED] text-black font-semibold py-2 px-4 rounded-md shadow flex space-x-2">
                        <MdHealthAndSafety className="mt-1 text-[17px]" />
                        <button onClick={() => handleAnalyze("health_impacts")}>
                            Show Health Impacts
                        </button>
                    </div>
                    <div className="bg-orange-400 text-white font-semibold py-2 px-4 rounded-md shadow flex space-x-2">
                        <IoWarningOutline className="mt-1 text-[17px]" />
                        <button onClick={() => handleAnalyze("allergies")}>
                            Show Allergies
                        </button>
                    </div>
                </div>
            </div>

            <div className="w-full  mt-6">
                {/* Safety Analysis Dropdown */}
                {results.safety && (
                    <>
                        <div
                            className="cursor-pointer bg-white p-4 rounded-md shadow-md flex justify-between items-center"
                            onClick={() => toggleSection("safety")}
                        >
                            <h2 className="text-md font-semibold text-gray-900">
                                Safety Results
                            </h2>
                            <span>{openSection === "safety" ? <FaAngleUp className="text-gray-500" />: <FaAngleDown className="text-gray-500" />}</span>
                        </div>
                        {openSection === "safety" && (
                            <div className="p-4 border border-t-0 border-gray-200 bg-white rounded-b-md">
                                <p className="list-none text-left">{renderAsList(results.safety)}</p>
                            </div>
                        )}
                    </>
                )}

                {/* Benefits Dropdown */}
                {results.benefits && (
                    <>
                        <div
                            className="cursor-pointer bg-white p-4 rounded-md shadow-md flex justify-between items-center mt-2"
                            onClick={() => toggleSection("benefits")}
                        >
                            <h2 className="text-md font-semibold text-gray-900">
                                Benefits of Ingredients
                            </h2>
                            <span>{openSection === "benefits" ? <FaAngleUp className="text-gray-500" /> : <FaAngleDown className="text-gray-500" />}</span>
                        </div>
                        {openSection === "benefits" && (
                            <div className="p-4 border border-t-0 border-gray-200 bg-white rounded-b-md">
                                <p className="list-none text-left"> {renderAsList(results.benefits)}</p>
                            </div>
                        )}
                    </>
                )}

                {/* Allergy Information Dropdown */}
                {results.allergies && (
                <>
                    <div
                        className="cursor-pointer bg-white p-4 rounded-md shadow-md flex justify-between items-center mt-2"
                        onClick={() => toggleSection("allergies")}
                    >
                        <h2 className="text-md font-semibold text-gray-900">
                            Allergies Expected
                        </h2>
                        <span>{openSection === "allergies" ? <FaAngleUp className="text-gray-500" /> : <FaAngleDown className="text-gray-500" />}</span>
                    </div>
                    {openSection === "allergies" && (
                        <div className="p-4 border border-t-0 border-gray-200 bg-white rounded-b-md">
                            {renderAllergies(results.allergies)}
                        </div>
                    )}
                </>
            )}

                {/* FSSAI Analysis Dropdown */}
                {results.health_impacts && (
                    <>
                        <div
                            className="cursor-pointer bg-white p-4 rounded-md shadow-md flex justify-between items-center mt-2"
                            onClick={() => toggleSection("health_impacts")}
                        >
                            <h2 className="text-md font-semibold text-gray-900">
                                Health Impacts
                            </h2>
                            <span>{openSection === "health_impacts" ? <FaAngleUp className="text-gray-500" /> : <FaAngleDown className="text-gray-500" />}</span>
                        </div>
                        {openSection === "health_impacts" && (
                            <div className="p-4 border border-t-0 border-gray-200 bg-white rounded-b-md">
                                <p className="list-none text-left">{renderAsList(results.health_impacts)}</p>
                            </div>
                        )}
                    </>
                )}
            </div>
            <footer className="w-full py-4 bg-gray-800 text-center text-white mt-auto pt-16">
          <span>© 2024 AI-Powered Food Safety System</span>
        </footer>
        </div>
    );
}

export default IngredientAnalysis;
