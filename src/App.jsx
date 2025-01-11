import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Item1 from './pages/Item1';
import Product from './pages/Product';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          
      
          <Route path="/item1" element={<Item1 />} />
          <Route path="/Product" element={<Product/>}/>
          {/* <Route path="/contact" element={<Contact/>}/> */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
