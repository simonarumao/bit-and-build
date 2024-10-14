import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Line } from 'react-chartjs-2';
import { Radar,Pie } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend, ArcElement, PointElement, LineElement, RadialLinearScale } from 'chart.js';

// Register Chart.js components
ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend, ArcElement, PointElement, LineElement, RadialLinearScale);

// Daily values for percentage calculation
const dailyValues = {
  calories: 2000,
  fat: 70, // grams
  carbohydrates: 300, // grams
  protein: 50, // grams
  fiber: 25, // grams
  sodium: 2300 // milligrams
};

// Nutritional Insights Component
const NutritionalInsights = ({ foodData }) => {
  const dailyValuePercentage = (value, dailyValue) => (value / dailyValue) * 100;

  return (
    <div>
      <h2 className='font-semibold text-[32px] text-black font-inter'>Nutritional Insights</h2>
          <ul>
        <div className='flex space-x-4 mt-6'>
            <div className='bg-[#1F2937] text-white px-2 py-1 rounded-lg'><li>Calories: {foodData['Caloric Value']} ({dailyValuePercentage(foodData['Caloric Value'], dailyValues.calories).toFixed(2)}% DV)</li></div>
            <div className='bg-[#1F2937] text-white px-2 py-1 rounded-lg'><li>Fat: {foodData['Fat']}g ({dailyValuePercentage(foodData['Fat'], dailyValues.fat).toFixed(2)}% DV)</li></div>
            <div className='bg-[#1F2937] text-white px-2 py-1 rounded-lg'><li>Carbohydrates: {foodData['Carbohydrates']}g ({dailyValuePercentage(foodData['Carbohydrates'], dailyValues.carbohydrates).toFixed(2)}% DV)</li></div>
            <div className='bg-[#1F2937] text-white px-2 py-1 rounded-lg'><li>Protein: {foodData['Protein']}g ({dailyValuePercentage(foodData['Protein'], dailyValues.protein).toFixed(2)}% DV)</li></div>
            <div className='bg-[#1F2937] text-white px-2 py-1 rounded-lg'><li>Dietary Fiber: {foodData['Dietary Fiber']}g ({dailyValuePercentage(foodData['Dietary Fiber'], dailyValues.fiber).toFixed(2)}% DV)</li></div>
            <div className='bg-[#1F2937] text-white px-2 py-1 rounded-lg'><li>Sodium: {foodData['Sodium']}mg ({dailyValuePercentage(foodData['Sodium'], dailyValues.sodium).toFixed(2)}% DV)</li></div>
    </div>
      </ul>
    </div>
  );
};

// Line Chart Component
const LineChart = ({ foodData }) => {
  const lineData = {
    labels: ['Fat', 'Carbohydrates', 'Protein'],
    datasets: [
      {
        label: 'Macronutrient Trend',
        data: [
          foodData['Fat'] || 0,
          foodData['Carbohydrates'] || 0,
          foodData['Protein'] || 0
        ],
        fill: false,
        backgroundColor: '#4B0082', // Darker color
        borderColor: '#4B0082', // Darker color
        tension: 0.1,
      }
    ]
  };

  return (
    <Line data={lineData} options={{ responsive: true, plugins: { legend: { position: 'top' } } }} />
  );
};

// Radar Chart Component
const RadarChart = ({ foodData }) => {
  const radarData = {
    labels: ['Calories', 'Fat', 'Carbohydrates', 'Protein', 'Dietary Fiber'],
    datasets: [
      {
        label: 'Nutritional Composition',
        data: [
          foodData['Caloric Value'] || 0,
          foodData['Fat'] || 0,
          foodData['Carbohydrates'] || 0,
          foodData['Protein'] || 0,
          foodData['Dietary Fiber'] || 0
        ],
        backgroundColor: '#FF4500', // Darker color
        borderColor: '#FF4500', // Darker color
        borderWidth: 1,
      }
    ]
  };

  return (
    <Radar data={radarData} options={{ responsive: true, plugins: { legend: { position: 'top' } } }} />
  );
};

// Main FoodChart Component
const FoodChart = ({ foodData }) => {
  // Chart data setup for Bar Chart
  const chartData = {
    labels: ['Caloric Value', 'Fat', 'Carbohydrates', 'Protein', 'Dietary Fiber', 'Sodium'],
    datasets: [
      {
        label: 'Nutritional Value per 100g',
        data: [
          foodData['Caloric Value'] || 0,
          foodData['Fat'] || 0,
          foodData['Carbohydrates'] || 0,
          foodData['Protein'] || 0,
          foodData['Dietary Fiber'] || 0,
          foodData['Sodium'] || 0
        ],
        backgroundColor: [
          '#FF6347', // Darker red
          '#4682B4', // Darker blue
          '#FFD700', // Darker yellow
          '#32CD32', // Darker green
          '#8A2BE2', // Darker purple
          '#FF8C00'  // Darker orange
        ],
        borderColor: [
          '#FF6347', // Darker red
          '#4682B4', // Darker blue
          '#FFD700', // Darker yellow
          '#32CD32', // Darker green
          '#8A2BE2', // Darker purple
          '#FF8C00'  // Darker orange
        ],
        borderWidth: 1
      }
    ]
  };

  return (
    <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.3)', borderRadius: '8px', padding: '20px', margin: '20px auto', width: '90%' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
        {/* First Bar Chart */}
        <div style={{ height: '500px', padding: '10px' }}>
          <Bar 
            data={chartData} 
            options={{ 
              scales: { 
                y: { 
                  beginAtZero: true 
                } 
              },
              plugins: {
                legend: {
                  display: true
                },
                title: {
                  display: true,
                  text: 'Nutritional Values'
                }
              }
            }} 
          />
        </div>
        {/* Line Chart */}
        <div style={{ height: '500px', padding: '10px' }}>
          <LineChart foodData={foodData} />
        </div>
        {/* Radar Chart */}
        <div style={{ height: '500px', padding: '8px' }}>
          <RadarChart foodData={foodData} />
        </div>
        {/* Second Bar Chart */}
        <div style={{ height: '500px', padding: '10px' }}>
  <Pie 
    data={chartData} 
    options={{ 
      responsive: true,
      plugins: {
        legend: {
          display: true
        },
        title: {
          display: true,
          text: 'Nutritional Values'
        }
      }
    }} 
  />
</div>
        {/* Nutritional Insights */}
        <div style={{ width: '100%', marginTop: '20px', gridColumn: 'span 2' }}>
          <NutritionalInsights foodData={foodData} />
        </div>
      </div>
    </div>
  );
};

export default FoodChart;
