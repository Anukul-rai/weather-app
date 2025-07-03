
import React, { useState, useEffect } from 'react'
import Search from './components/Search'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Topbuttons from './components/Topbuttons';
import Input from './components/Input';
import Timeandloc from './components/Timeandloc';
import Tempdetails from './components/Tempdetails';

function App() {

  return (
    <div className='mx-auto max-w-screen-lg mt-4 py-5 px-32 bg-gradient-to-br shadow-xl shadow-gray-400 from-cyan-600 to-amber-700'>
      <Topbuttons />
      <Input/>
      <Timeandloc/>
      <Tempdetails/>
      <ToastContainer />
    </div>
  )
}

export default App
