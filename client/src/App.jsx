import React, { useContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Result from './pages/Result'
import BuyCredit from './pages/BuyCredit'
import Navbar from './compnents/Navbar.jsx'
import Footer from './compnents/Footer.jsx'

import Login from './compnents/Login.jsx'
import { AppContext } from './context/AppContext.jsx'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const {showLogin} = useContext(AppContext)
  return (
    <div className="bg-[#111827] min-h-screen w-full">
      <ToastContainer />
      <Navbar />
      {showLogin && <Login />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/result' element={<Result />} />
        <Route path='/buy' element={<BuyCredit />} />
      </Routes>
      <Footer/>

    </div>
  )
}

export default App