import React from 'react'
import Card from './components/Card'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div>
      <Card/>
      <ToastContainer />
    </div>
  )
}

export default App
