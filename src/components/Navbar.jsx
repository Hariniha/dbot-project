import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white">
      <div className="mx-5 flex items-center justify-center">
        {/* Logo */}
        <div
          className="text-black  px-12 py-5 font-bold text-2xl"
          style={{ backgroundColor: "#fcad35" }}
        >
          <Link to="/">LOGO</Link>
        </div>

        {/* Navbar links */}
        <div className="md:flex space-x-6 ml-44 text-white font-semibold gap-20 pt-12 mr-8">
          <Link to="/about" className="hover:text-gray-400 text-black">
            ABOUT
          </Link>
          <Link to="/product" className="hover:text-gray-400 text-black">
            OUR PRODUCT
          </Link>
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
      </div>
    </nav>
  );
};

export default Navbar;



