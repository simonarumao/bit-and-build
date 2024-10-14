
import axios from 'axios';
import React, { useState } from 'react';
import FoodChart from './FoodChart'; 
import Navbar from './Navbar'


const FetchFood = () => {
    const [foodData, setFoodData] = useState(null);
  const [foodName, setFoodName] = useState('');
  const [error, setError] = useState(null);

  // Function to fetch food data from the Flask API
  const fetchFoodData = async () => {
      try {
    
          const response = await axios.get(`http://localhost:5000/api/food/${foodName}`);
        console.log(response)
      setFoodData(response.data);
      setError(null);
    } catch (err) {
      console.error(err); // Log error for debugging
      setError('Food not found');
      setFoodData(null);
    }
 };
    
  return (
      <div className="App">
          <Navbar />  
    <div className=''>     
    <h1 className='mt-24 font-semibold font-inter text-black text-[30px]'>Food Nutrition Data Visualization</h1>

    {/* Input field to search for food */}
    <div className='mt-9 px-60'>
      <input
        type="text"
        value={foodName}
        onChange={(e) => setFoodName(e.target.value)}
        placeholder="Enter food name"
        style={styles.input}
        required
              />
              
       <div className='bg-[#1F2937] text-white px-4 py-3 rounded-lg'>     
        <button onClick={fetchFoodData} >
            Analyze
        </button>
        </div>  
              </div>
              </div> 

    {/* Error message */}
    {error && <p style={{ color: 'red' }}>{error}</p>}

    {/* Chart */}
    {foodData && <FoodChart foodData={foodData} />} {/* Render FoodChart component */}
  </div>
);
}

// Styles for the App component
const styles = {
appContainer: {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
  backgroundColor: '#f9f9f9',
  minHeight: '100vh',
},
header: {
  marginBottom: '20px',
  fontSize: '28px',
  fontWeight: 'bold',
  color: '#333',
},
inputContainer: {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%', // Adjust as needed
  maxWidth: '500px',
},
input: {
  width: '100%',
  padding: '15px',
  marginBottom: '10px',
  borderRadius: '5px',
  border: '1px solid #007BFF',
  fontSize: '18px',
  color: '#333',
  transition: 'border-color 0.3s, box-shadow 0.3s',
  outline: 'none',
},
button: {
  width: '100%',
  padding: '15px',
  borderRadius: '5px',
  border: 'none',
  backgroundColor: '#007BFF',
  color: '#fff',
  fontSize: '20px',
  fontWeight: 'bold',
  cursor: 'pointer',
  transition: 'background-color 0.3s, transform 0.2s',
},

}

export default FetchFood