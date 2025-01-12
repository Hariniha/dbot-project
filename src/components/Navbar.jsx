// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   const toggleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };

//   return (
//     <nav className="bg-white ">
//       <div className="mx-5 flex items-center justify-between">
//         {/* Logo with routing to Home */}
//         <div
//           className="text-black px-9 py-5 font-bold text-2xl"
//           style={{ backgroundColor: "#fcad35" }}
//         >
//           <Link to="/">LOGO</Link>
//         </div>

//         {/* Navbar links */}
//         <div className="hidden md:flex space-x-6 mt-6 gap-24 px-28 text-black font-semibold">
//           <Link to="/about" className="hover:text-gray-400">ABOUT US</Link>

//           <div className="relative">
//             {/* OUR PRODUCT with dropdown */}
//             <button
              // onClick={toggleDropdown}
//               className="hover:text-gray-400"
//             >
//               OUR PRODUCT
//             </button>
//             {/* Dropdown Menu */}
//             {isDropdownOpen && (
//               <div className="absolute left-0 mt-2 bg-white text-black rounded-lg shadow-lg w-40">
//                 <ul>
//                   <li>
//                     <Link
//                       to="/product/item1"
//                       className="block px-4 py-2"
//                       onClick={() => setIsDropdownOpen(false)}
//                     >
//                       Item 1
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       to="/product/item2"
//                       className="block px-4 py-2"
//                       onClick={() => setIsDropdownOpen(false)}
//                     >
//                       Item 2
//                     </Link>
//                   </li>
//                 </ul>
//               </div>
//             )}
//           </div>

//           <Link to="/services" className="hover:text-gray-400">OUR SERVICE</Link>
//           <Link to="/blog" className="hover:text-gray-400">BLOG</Link>
//           <Link to="/contact" className="hover:text-gray-400">CONTACT</Link>
//           <Link to="/login" className="hover:text-gray-400">LOGIN/SIGNUP</Link>
//         </div>

//         {/* Mobile menu button */}
//         <div className="md:hidden">
//           <button onClick={toggleDropdown} className="text-black focus:outline-none">
//             <svg
//               className="h-6 w-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
//             </svg>
//           </button>
//         </div>
//       </div>

//       {/* Mobile menu */}
//       {isDropdownOpen && (
//         <div className="md:hidden">
//           <Link to="/about" className="block px-4 py-2 text-black hover:bg-gray-200">ABOUT</Link>
//           <Link to="/product/item1" className="block px-4 py-2 text-black hover:bg-gray-200">Item 1</Link>
//           <Link to="/product/item2" className="block px-4 py-2 text-black hover:bg-gray-200">Item 2</Link>
//           <Link to="/services" className="block px-4 py-2 text-black hover:bg-gray-200">OUR SERVICE</Link>
//           <Link to="/blog" className="block px-4 py-2 text-black hover:bg-gray-200">BLOG</Link>
//           <Link to="/contact" className="block px-4 py-2 text-black hover:bg-gray-200">CONTACT</Link>
//           <Link to="/login" className="block px-4 py-2 text-black hover:bg-gray-200">LOGIN/SIGNUP</Link>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

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
    <nav>
      <div className="text-black px-9 py-5 font-bold text-2xl"
    style={{ backgroundColor: "#fcad35" }}><Link to="/">LOGO</Link></div>
      <div><Link to="/about">ABOUT US</Link></div>
     
      <div>
        <button onClick={toggleProductDropdown}>OUR PRODUCT</button>
        {isProductDropdownOpen && (
          <div>
            <ul>
              <li>
                <Link to="/item1" onClick={() => setIsProductDropdownOpen(false)}>
                  Item 1
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

      <div>
        <button onClick={toggleServiceDropdown}>OUR SERVICE</button>
        {isServiceDropdownOpen && (
          <div>
            <ul>
              <li>
                <Link to="/1" onClick={() => setIsServiceDropdownOpen(false)}>
                  1
                </Link>
              </li>
              <li>
                <Link to="/2" onClick={() => setIsServiceDropdownOpen(false)}>
                  2
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    
      <div>
        
        <ul  className='flex flex-row gap-20' >
          <li><Link to="/blog">BLOG</Link></li>
          <li><Link to="/contact">CONTACT US</Link></li>
          <li><Link to="/login">LOGIN/SIGNUP</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
