import React from 'react'
import Header from "../components/DbotTaas/Header"
import Deliver from '../components/DbotTaas/Deliver'
import Need from "../components/DbotTaas/Need"
import How from "../components/DbotTaas/How"
import Pricing from '../components/DbotTaas/Pricing'

const DbotTaas = () => {
  return (
    <div>
    <div><Header/></div>
    <div><Deliver/></div>
    <div><Need/></div>
    <div><How/></div>
   <div><Pricing/></div>
    </div>
  )
}

export default DbotTaas