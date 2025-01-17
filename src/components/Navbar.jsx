import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
    <nav className="relative flex flex-wrap items-center justify-between p-4 text-black font-semibold text-1xl shadow-[0_4px_6px_0_rgba(0,0,0,0.3)]">
      {/* Logo */}
      <div>
        <Link to="/">
          <img
            src="src/assets/Logo.png"
            alt="Example Image"
            className="mt-2 ml-2 sm:mt-5 sm:ml-10"
            style={{ width: '168px', height: '78px' }}
          />
        </Link>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex md:items-center md:gap-8 lg:gap-24">
        <div className="mt-24 ml-4">
          <Link to="/about">ABOUT US</Link>
        </div>

        <div className="mt-24 relative">
          <button onClick={toggleProductDropdown}>OUR PRODUCT</button>
          {isProductDropdownOpen && (
            <div>
              <ul className="bg-black mt-2 absolute z-50 text-white rounded-lg shadow-lg w-40">
                <li>
                  <Link
                    to="/DbotTrack"
                    onClick={() => setIsProductDropdownOpen(false)}
                  >
                    DbotTrack
                  </Link>
                </li>
                <li>
                  <Link
                    to="/item2"
                    onClick={() => setIsProductDropdownOpen(false)}
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
              <ul className="bg-white mt-2 absolute z-50 text-black rounded-lg shadow-lg w-40">
                <li className="pt-1">
                  <Link
                    to="/1"
                    onClick={() => setIsServiceDropdownOpen(false)}
                  >
                    1
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

        <ul className="flex mt-24 pb-2  mr-8 flex-row gap-8 lg:gap-24">
          <li>
            <Link to="/blog">BLOG</Link>
          </li>
          <li>
            <Link to="/contact">CONTACT US</Link>
          </li>
          <li>
            <Link to="/login">LOGIN/SIGNUP</Link>
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
        className={`fixed top-0 right-0 h-full bg-gray-100 shadow-lg p-4 transform ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 w-64 z-40`}
      >
        <button
          onClick={toggleMobileMenu}
          className="text-black font-bold text-lg mb-4"
        >
          Close
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
              <ul className="pl-4 mt-2 bg-white rounded-lg shadow-lg text-black">
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
              <ul className="pl-4 mt-2 bg-white rounded-lg shadow-lg text-black">
                <li>
                  <Link to="/1" onClick={toggleMobileMenu}>
                    1
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
  );
};

export default Navbar;
