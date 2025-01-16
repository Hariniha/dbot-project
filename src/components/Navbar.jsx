

import React, { useState } from 'react'
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);
  const [isServiceDropdownOpen, setIsServiceDropdownOpen] = useState(false);

  const toggleProductDropdown = () => {
    setIsProductDropdownOpen((prev) => !prev);
    setIsServiceDropdownOpen(false); // Close the other dropdown
  };

  const toggleServiceDropdown = () => {
    setIsServiceDropdownOpen((prev) => !prev);
    setIsProductDropdownOpen(false); // Close the other dropdown
  };
  return (
    <nav className='flex flex-row gap-24 text-black font-semibold text-1xl'>
      <div><Link to="/"><img src="src/assets/Logo.png" alt="Example Image" className="mt-5 ml-10" style={{ width: "168px", height: "78px" }} /></Link></  div>
      <div className='mt-20 ml-44'><Link to="/about">ABOUT US</Link></div>
     
      <div className='mt-20 relative'>
        <button onClick={toggleProductDropdown}>OUR PRODUCT</button>
        {isProductDropdownOpen && (
          <div>
            <ul className="  bg-black mt-2 absolute z-50 text-white rounded-lg shadow-lg w-40">
              <li>
                <Link to="/DbotTrack" onClick={() => setIsProductDropdownOpen(false)}>
                  DbotTrack
                </Link>
              </li>
              <li>
                <Link to="/item2" onClick={() => setIsProductDropdownOpen(false)}>
                  Item 2
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>

      <div className='mt-20'>
        <button onClick={toggleServiceDropdown}>OUR SERVICE</button>
        {isServiceDropdownOpen && (
          <div>
            <ul className='  bg-white  mt-2 absolute z-50 text-black rounded-lg shadow-lg w-40'>
              <li className='pt-1'>
                <Link to="/1" onClick={() => setIsServiceDropdownOpen(false)}>
                  1
                </Link>
              </li>
              <li className=''>
                <Link to="/2" onClick={() => setIsServiceDropdownOpen(false)}>
                  2
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    
      <div>
        
        <ul  className='flex mt-20 pb-2 flex-row gap-24' >
          <li><Link to="/blog">BLOG</Link></li>
          <li><Link to="/contact">CONTACT US</Link></li>
          <li><Link to="/login">LOGIN/SIGNUP</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
