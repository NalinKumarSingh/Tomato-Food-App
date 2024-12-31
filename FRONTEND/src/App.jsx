import React, { useState } from 'react'
import Navbar from './Components/navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Cart from './Pages/Cart/Cart'
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder'
import Footer from './Components/Footer/Footer'
import LoginPopUp from './Components/LoginPopUp/LoginPopUp'
import Verify from './Pages/Verify/Verify'
import MyOrders from './Pages/MyOrders/MyOrders'
const App = () => {
  const [showLogin, setShowLogin] = useState(false)

  return (
    <>
    {showLogin?<LoginPopUp setShowLogin={setShowLogin}/>:<></>}
    <div className='app'>
      <Navbar setShowLogin={setShowLogin}></Navbar>
      <Routes>
        <Route path='/' element = {<Home/>} />
        <Route path='/cart' element = {<Cart/>} />
        <Route path='order' element = {<PlaceOrder/>} />
        <Route path='/verify' element={<Verify></Verify>}/>
        <Route path='/myorders' element={<MyOrders></MyOrders>}/>
      </Routes>
    </div>
    <Footer/>
    </>
  )
}

export default App
