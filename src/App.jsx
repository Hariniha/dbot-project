import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';
import DbotTrack from './pages/DbotTrack';
import DbotTaas from "./pages/DbotTaas";
// import Blank from './components/Blank';

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
           <Route path="/DbotTaas"  element={<DbotTaas/>}/>
         </Routes>
         {/* <Blank/> */}
      </div>
    </Router>
  );
};

export default App;
