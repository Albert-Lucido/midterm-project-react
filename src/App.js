import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Add from './component/Add';
import DisplayAll from './component/DisplayAll';
import DisplayCategory from './component/DisplayCategory';
import DisplayLow from './component/DisplayLow';
import Remove from './component/Remove';
import Search from './component/Search';
import Sort from './component/Sort';
import Update from './component/Update';
import Navbar from './component/Navbar';

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<DisplayAll />} />
          <Route path='/Add' element={<Add />} />
          <Route path='/DisplayAll' element={<DisplayAll />} />
          <Route path='/DisplayCategory' element={<DisplayCategory />} />
          <Route path='/DisplayLow' element={<DisplayLow />} />
          <Route path='/Remove' element={<Remove />} />
          <Route path='/Search' element={<Search />} />
          <Route path='/Sort' element={<Sort />} />
          <Route path='/Update' element={<Update />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;