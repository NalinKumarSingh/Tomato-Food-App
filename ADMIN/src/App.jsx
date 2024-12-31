import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Sidebar from './Components/Sidebar/Sidebar'
import { Route, Routes } from 'react-router-dom'
import Add from './Pages/Add/Add.jsx'
import Orders from './Pages/Orders/Orders.jsx'
import List from './Pages/List/List.jsx'
import { ToastContainer} from 'react-toastify';
const App = () => {
  const url = 'http://localhost:3000';
  return (
    <div>
      <ToastContainer/>
      <Navbar></Navbar>
      <hr />
      <div className='app-content'>
        <Sidebar/>
        <Routes>
            <Route path='/add' element={<Add url = {url} />} />
            <Route path='/list' element={<List url = {url} />} />
            <Route path='/orders' element={<Orders url = {url} />} /> 
          </Routes>
      </div>
    </div>
  )
}

export default App

