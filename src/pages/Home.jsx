import React from 'react'
import Header from '../components/Header'
import Info from "../components/Info"
import OurClients from '../components/OurClients'
import Somefacts from '../components/Somefacts'





const Home = () => {
  return (
    <div>
        <div><Header/></div>
        <div><OurClients/></div>
        <div><Info/></div>
        <div><Somefacts/></div> 
       
       

        
    </div>
  )
}

export default Home