import React from 'react'
import Header from '../components/Header'
import Info from "../components/Info"
import OurClients from '../components/OurClients'
import Somefacts from '../components/Somefacts'
import Testimonials from '../components/Testimonials'
import ContactUs from '../components/ContactUs'





const Home = () => {
  return (
    <div>
        <div><Header/></div>
        <div><OurClients/></div>
        <div><Info/></div>
        <div><Somefacts/></div>
        <div><Testimonials/></div> 
        <div><ContactUs/></div>
       
       

        
    </div>
  )
}

export default Home