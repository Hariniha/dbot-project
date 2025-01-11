import React, { useState } from "react";
import { Link } from "react-router-dom";
import Product from "../pages/Product";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <nav className="bg-white flex flex-row">
      <div className="mx-5 flex flex-wrap items-center justify-between">
        {/* Logo with routing to Home */}
        <div
          className="text-black px-12 py-5 font-bold text-2xl"
          style={{ backgroundColor: "#fcad35", marginLeft: "1rem" }}
        >
          <Link to="/">LOGO</Link>
        </div>
        </div>

        {/* Navbar links */}
        <div className=" ml-32 mr-24 mt-10">
          <Link to="/about" className="hover:text-gray-400 font-semibold  text-black" style={{}}>
            ABOUT US
          </Link>
        </div>
        <div className="  text-white font-semibold gap-20 mt-10 ">


          {/* OUR PRODUCT with dropdown */}
          <div className="flex flex-row gap-24">
          <div className=" ">
            <Link to={Product}>
              <button
                type="button"

                onClick={toggleDropdown}
                className="text-black hover:text-gray-400"
              >
                OUR PRODUCT
              </button></Link>
            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute left-0 mt-2 bg-white text-black rounded-lg shadow-lg w-40">
                <ul>
                  <li>
                    <Link
                      to="/item1"
                      className="block px-4 py-2 hover:text-gray-400"
                      onClick={() => setIsDropdownOpen(false)} // Close dropdown when item is clicked
                    >
                      Item 1
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/item2"
                      className="block px-4 py-2 hover:text-gray-400"
                      onClick={() => setIsDropdownOpen(false)} // Close dropdown when item is clicked
                    >
                      Item 2
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div className=" text-white  font-semibold gap-20">
            <ul className="flex flex-row gap-24">
            <li><Link to="/services" className="hover:text-gray-400  text-black">
              OUR SERVICE
            </Link></li>
            <li><Link to="/blog" className="hover:text-gray-400 text-black">
              BLOG
            </Link></li>
            <li><Link to="/contact" className="hover:text-gray-400 text-black">
              CONTACT
            </Link></li>
            <li><Link to="/login" className="hover:text-gray-400  text-black">
              LOGIN/SIGNUP
            </Link></li>
            </ul>
          </div>
        </div>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden">
          <button className="text-black hover:text-gray-400">☰</button>
        </div>

        {/* Mobile dropdown menu */}
        <div className="w-full mt-4 bg-white text-black rounded-lg shadow-lg md:hidden">
          <ul className="space-y-2 p-4">
            <li>
              <Link to="/about" className="block hover:text-gray-400 text-black">
                ABOUT US
              </Link>
            </li>
            <li>
              <Link
                to="/item1"
                className="block px-4 py-2 hover:text-gray-400"
                onClick={() => setIsDropdownOpen(false)} // Close dropdown when item is clicked
              >
                Item 1
              </Link>
            </li>
            <li>
              <Link
                to="/item2"
                className="block px-4 py-2 hover:text-gray-400"
                onClick={() => setIsDropdownOpen(false)} // Close dropdown when item is clicked
              >
                Item 2
              </Link>
            </li>
            <li>
              <Link to="/services" className="block hover:text-gray-400 text-black">
                OUR SERVICE
              </Link>
            </li>
            <li>
              <Link to="/blog" className="block hover:text-gray-400 text-black">
                BLOG
              </Link>
            </li>
            <li>
              <Link to="/contact" className="block hover:text-gray-400 text-black">
                CONTACT
              </Link>
            </li>
            <li>
              <Link to="/login" className="block hover:text-gray-400 text-black">
                LOGIN/SIGNUP
              </Link>
            </li>
          </ul>
        </div>
      
    </nav>
  );
};

export default Navbar;
