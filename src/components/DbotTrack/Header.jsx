import React from 'react'
import "./Header.css"

const Header = () => {
  return (
    <div  className="header">
        <div className="header-contents text-white ">
            <h2 className='font-bold text-7xl'>DBOT TRACK</h2>
            <p className='text-white'> Your SaaS tool to Capture, Visualize and Analyze construction sites, at ease.</p>
            <button className="text-white py-3  px-6 text-lg"
        style={{ backgroundColor: '#fcad35' }}>KNOW MORE</button>     
        </div>
    </div>
  )
}

export default Header 

// .header{
//     height: 34vw;
//     margin: 20px auto;
//     background: url("/header_img.png") no-repeat center center;
//     background-size: cover;
//     position: relative;
//     border-radius: 10px;
    
// }