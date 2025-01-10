import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-white">
      <div className="mx-5 flex flex-wrap items-center justify-between">
        {/* Logo with routing to Home */}
        <div
          className="text-black px-12 py-5 font-bold text-2xl"
          style={{ backgroundColor: "#fcad35", marginLeft: "1rem" }} // Added marginLeft for slight adjustment
        >
          <Link to="/">LOGO</Link>
        </div>

        {/* Navbar links */}
        <div className="hidden md:flex md:space-x-6 md:ml-44 text-white font-semibold gap-20 md:pt-12 mr-8">
          <Link to="/about" className="hover:text-gray-400 text-black">
            ABOUT US
          </Link>

          <div className="relative">
            {/* OUR PRODUCT with dropdown */}
            <button
              onClick={toggleDropdown}
              className="hover:text-gray-400 text-black"
            >
              OUR PRODUCT
            </button>
            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute left-0 mt-2 bg-white text-black rounded-lg shadow-lg w-40">
                <ul>
                  <li>
                    <Link
                      to="/product/item1"
                      className="block px-4 py-2"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      Item 1
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/product/item2"
                      className="block px-4 py-2"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      Item 2
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>

          <Link to="/services" className="hover:text-gray-400 text-black">
            OUR SERVICE
          </Link>
          <Link to="/blog" className="hover:text-gray-400 text-black">
            BLOG
          </Link>
          <Link to="/contact" className="hover:text-gray-400 text-black">
            CONTACT
          </Link>
          <Link to="/login" className="hover:text-gray-400 text-black">
            LOGIN/SIGNUP
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden">
          <button
            onClick={toggleDropdown}
            className="text-black hover:text-gray-400"
          >
            ☰
          </button>
        </div>

        {/* Mobile dropdown menu */}
        {isDropdownOpen && (
          <div className="w-full mt-4 bg-white text-black rounded-lg shadow-lg md:hidden">
            <ul className="space-y-2 p-4">
              <li>
                <Link
                  to="/about"
                  className="block hover:text-gray-400 text-black"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  ABOUT US
                </Link>
              </li>
              <li>
                <button
                  onClick={toggleDropdown}
                  className="block hover:text-gray-400 text-black w-full text-left"
                >
                  OUR PRODUCT
                </button>
                {isDropdownOpen && (
                  <ul className="pl-4">
                    <li>
                      <Link
                        to="/product/item1"
                        className="block px-4 py-2"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        Item 1
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/product/item2"
                        className="block px-4 py-2"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        Item 2
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <Link
                  to="/services"
                  className="block hover:text-gray-400 text-black"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  OUR SERVICE
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="block hover:text-gray-400 text-black"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  BLOG
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="block hover:text-gray-400 text-black"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  CONTACT
                </Link>
              </li>
              <li>
                <Link
                  to="/login"
                  className="block hover:text-gray-400 text-black"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  LOGIN/SIGNUP
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
