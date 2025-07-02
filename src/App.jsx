
import React, { useState, useEffect } from 'react'
import Search from './components/Search'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [cityName, setCityName] = useState("");
  const [countryCode, setCountryCode] = useState("");


  const apikey ='edb1b2074b737302fac36846f4db105e'

  const fetchApi = async() => {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName},${countryCode}&appid=${apikey}`,)
    const data = await res.json()
    setWeatherData(data)
    console.log(data)
  }

  useEffect(()=>{
    fetchApi()
  },[])
  return (
    <div>
      <Search/>
      {/* <Card/> */}
      <ToastContainer />
    </div>
  )
}

export default App
