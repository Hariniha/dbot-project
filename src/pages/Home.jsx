import React from 'react'
import Header from '../components/Home/Header'
import Info from "../components/Home/Info"
import OurClients from '../components/Home/OurClients'
import Somefacts from '../components/Home/Somefacts'
import Testimonials from '../components/Home/Testimonials'
import ContactUs from '../components/Home/ContactUs'
import Blank from "../components/Home/Blank"





const Home = () => {
  return (
    <div>
        <div><Header/></div>
        <div><OurClients/></div>
        <div><Info/></div>
        <div><Somefacts/></div>
        <div><Testimonials/></div> 
        <div><ContactUs/></div>
        <div><Blank/></div>
       
       

        
    </div>
  )
}

export default Home