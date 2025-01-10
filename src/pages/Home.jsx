import React from 'react'
import Header from '../components/Header'
import Dbot from "../components/Dbot"
import Aec from "../components/Aec"
import Banner from "../components/Banner"
import Somefacts from '../components/Somefacts'



const Home = () => {
  return (
    <div>
        <div><Header/></div>
        {/* <div><OurClients/></div> */}
        <div><Dbot/></div>
        <div><Aec/></div>
        <div><Banner/></div>
        <div><Somefacts/></div>
        
    </div>
  )
}

export default Home