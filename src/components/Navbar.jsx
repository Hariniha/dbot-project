import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../App.css";
import arrow from "../assets/arro.png"

const Navbar = () => {
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);
  const [isServiceDropdownOpen, setIsServiceDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu

  const toggleProductDropdown = () => {
    setIsProductDropdownOpen((prev) => !prev);
    setIsServiceDropdownOpen(false); // Close the other dropdown
  };

  const toggleServiceDropdown = () => {
    setIsServiceDropdownOpen((prev) => !prev);
    setIsProductDropdownOpen(false); // Close the other dropdown
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <div className='Navbar'>
    <nav className=" relative flex flex-wrap items-center h-24  justify-between p-2    text-1xl shadow-[0_4px_6px_0_rgba(0,0,0,0.3)]" >
      {/* Logo */}
      <div className='relative bottom-[1px] sm:bottom-[28px]'>
  <Link to="/">
    <img
      src="src/assets/Logo.png"
      alt="Example Image"
      className="mt-2 ml-2 sm:mt-5 sm:ml-10"
      style={{ width: '100px', height: '50px' }}
    />
  </Link>
</div>


      {/* Desktop Navigation */}
      <div className="des hidden md:flex  text-black relative bottom-[45px]  md:items-center md:gap-8 lg:gap-24 z-50" >
        <div className="mt-24 ml-4">
          <Link to="/about">ABOUT US</Link>
        </div>

        <div className="mt-24 relative">
          <button onClick={toggleProductDropdown}>OUR PRODUCT</button>
          {isProductDropdownOpen && (
            <div>
              <ul className="bg-white space-y-2 mt-4 p-3 absolute z-50 text-black rounded-lg shadow-lg w-40">
                <li>
                  <Link
                    to="/DbotTrack"
                    onClick={() => setIsProductDropdownOpen(false)}
                    className='des'
                  >
                    DbotTrack
                  </Link>
                </li>
                <li>
                  <Link
                    to="/item2"
                    onClick={() => setIsProductDropdownOpen(false)}
                    className='des'
                  >
                    Item 2
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>

        <div className="mt-24">
          <button onClick={toggleServiceDropdown}>OUR SERVICE</button>
          {isServiceDropdownOpen && (
            <div>
              <ul className="bg-white des space-y-2 mt-4 p-2 absolute z-50 text-black rounded-lg shadow-lg w-40">
                <li className="pt-1">
                  <Link
                    to="/DbotTaas"
                    onClick={() => setIsServiceDropdownOpen(false)}
                  >
                    DbotTaas
                  </Link>
                </li>
                <li>
                  <Link
                    to="/2"
                    onClick={() => setIsServiceDropdownOpen(false)}
                  >
                    2
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>

        <ul className="flex mt-24 pb-2 des  top-[4px]  mr-8 flex-row gap-8 lg:gap-24">
          <li>
            <Link to="/blog"className='des'>BLOG</Link>
          </li>
          <li>
            <Link to="/contact"className='des'>CONTACT US</Link>
          </li>
          <li>
            <Link to="/login"className='des'>LOGIN/SIGNUP</Link>
          </li>
        </ul>
      </div>

      {/* Mobile Menu Button */}
      <div className="flex md:hidden">
        <button
          onClick={toggleMobileMenu}
          className="p-2 border rounded bg-gray-200"
        >
          {/* Burger Icon */}
          <div className="space-y-1">
            <div className="w-6 h-0.5 bg-black"></div>
            <div className="w-6 h-0.5 bg-black"></div>
            <div className="w-6 h-0.5 bg-black"></div>
          </div>
        </button>
      </div>

      {/* Mobile Menu Sliding In from the Right */}
      <div
        className={`des fixed top-0 right-0 h-full bg-gray-100 shadow-lg p-4 transform ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 w-64 z-40 `}
      >
        <button
          onClick={toggleMobileMenu}
          className="text-black font-bold text-4xl mb-4"
        >
          <img src={arrow}/>
        </button>

        {/* Mobile Menu Items */}
        <ul className="flex flex-col gap-4">
          <li>
            <Link to="/about" onClick={toggleMobileMenu}>
              ABOUT US
            </Link>
          </li>
          {/* OUR PRODUCT Dropdown in Mobile Menu */}
          <li>
            <button
              onClick={toggleProductDropdown}
              className="w-full text-left"
            >
              OUR PRODUCT
            </button>
            {isProductDropdownOpen && (
              <ul className="space-y-2 mt-4 p-3 bg-white rounded-lg shadow-lg text-black">
                <li>
                  <Link to="/DbotTrack" onClick={toggleMobileMenu}>
                    DbotTrack
                  </Link>
                </li>
                <li>
                  <Link to="/item2" onClick={toggleMobileMenu}>
                    Item 2
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* OUR SERVICE Dropdown in Mobile Menu */}
          <li>
            <button
              onClick={toggleServiceDropdown}
              className="w-full text-left"
            >
              OUR SERVICE
            </button>
            {isServiceDropdownOpen && (
              <ul className="space-y-2 mt-4 p-3 bg-white rounded-lg shadow-lg text-black">
                <li>
                  <Link to="/DbotTaas" onClick={toggleMobileMenu}>
                    DbotTaas
                  </Link>
                </li>
                <li>
                  <Link to="/2" onClick={toggleMobileMenu}>
                    2
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li>
            <Link to="/blog" onClick={toggleMobileMenu}>
              BLOG
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={toggleMobileMenu}>
              CONTACT US
            </Link>
          </li>
          <li>
            <Link to="/login" onClick={toggleMobileMenu}>
              LOGIN/SIGNUP
            </Link>
          </li>
        </ul>
      </div>
    </nav>
    </div>
  );
};

export default Navbar;
