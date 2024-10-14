
import './App.css';
import IngredientAnalysis from './Components/Ingredients';
import Detection from './Components/Detection';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Home from './Components/Home';
import Hazard from './Components/Hazard';

import React, { useState } from 'react';
import FetchFood from './Components/FetchFood';





function App() {

  
  return (
    
    <Router>   
      
        <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path="/detect" exact element={<Detection/>} />
                <Route path="/analyzer" element={<IngredientAnalysis />} />
        <Route path="/hazard" element={<Hazard />} />
        <Route path='/nutrients' element={<FetchFood/>} />
          </Routes>
      </Router>
  
  );
}

export default App;
