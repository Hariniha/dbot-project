import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Blank from  "./components/Blank"
import Product from './pages/Product';
import DbotTrack from './pages/DbotTrack';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/DbotTrack" element={<DbotTrack/>} />
          <Route path="/Product" element={<Product/>}/>
          <Route path="/Blank"   element={<Blank/>}/>
         </Routes>
      </div>
    </Router>
  );
};

export default App;
