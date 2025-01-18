import React from 'react'
import Header from '../components/DbotTrack/Header'
import Info from '../components/DbotTrack/Info'
import Working from "../components/DbotTrack/Working"
import Deliver from "../components/DbotTrack/Deliver"

const DbotTrack = () => {
  return (
    <div>
      <div><Header/></div>
      
      <div><Info/></div>
      <div><Working/></div>
      <div><Deliver/></div>
    </div>
  )
}

export default DbotTrack