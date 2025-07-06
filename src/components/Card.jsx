import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { CiLocationOn } from "react-icons/ci";
// import { FaTemperatureHigh } from "react-icons/fa";
import { FaWind } from "react-icons/fa";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { toast } from 'react-toastify';
import getWeather from './api';




function Card() {
    const[input,setInput]=useState('')
    const[search,setSearch]=useState(null)

    // const apiCall = async () => {
    //     try {
    //         const data = await getWeather(input)
    //         setSearch(data)
    //         console.log(data)
    //     } catch (err) {
    //         console.error("API Error:", err)
    //         setSearch(null)
    //     }
    // setInput('');
    // }
    const apiCall = async () => {
    if (!input.trim()) {
        toast.error('Please enter a city name')
        return;
    }

    try {
        const data = await getWeather(input.trim())
        if (data.cod === '404' || !data.weather) {
        toast.error('City not found. ')
        setSearch(null)
        } else {
        setSearch(data)
        toast.success('Weather fetched successfully')
        }
    } catch (err) {
        console.error("API Error:", err)
        toast.error('Error fetching data. Try again later.')
        setSearch(null)
    }

    setInput('');
};


    return (
        
        <div className='min-h-screen bg-[url("/images/thunder.jpg")] bg-cover bg-center pt-[10%] '>
        <div className=' flex items-center justify-center flex-col '>
            <div className='bg-white/10 backdrop-blur-lg p-5 rounded-2xl shadow-2xl mt-5'>
                <h1 className='text-3xl font-bold m-3 text-center flex flex-col justify-center items-center '><TiWeatherPartlySunny size={45}/>
Weather App</h1>
            <div className='flex flex-row gap-3 my-6 mx-3'>
                <input 
                type="text" 
                placeholder='Enter a city...' 
                className=" bg-white rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                value={input}
                onChange={(e)=>setInput(e.target.value)}/>
                <button 
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-4 py-2 rounded-lg transition-all duration-200"
                onClick={()=>apiCall()}
                >Search</button>
                
            </div>

            { search && search.weather &&(
                <div className="mt-6 bg-gray-700 text-white p-4 rounded-xl shadow-md max-w-md mx-auto flex flex-col gap-2  items-center">
                    <div>
                        <h2 className="text-3xl font-semibold flex flex-row gap-2 mt-2"><CiLocationOn />{search.name} <span className='text-sm mt-2'>({search.sys.country})</span> </h2>
                    </div>
                    <div className='flex flex-col'>
                        <img src={`https://openweathermap.org/img/wn/${search.weather[0].icon}@2x.png`} alt="" className='mt-[-25px]' />
                        <p className='text-lg capitalize'>{search.weather[0].description}</p>
                    </div>
                    <p className='font-light text-lg'></p>
                    <p className="text-3xl ml-2 flex flex-row ">{search.main.temp}<span className='font-light text-sm mt-3'>&deg;C</span></p>
                <div className='bg-[#363333] p-2 rounded-2xl'>
                        <p className='text-2xl flex flex-row  gap-2'><FaWind />Wind: {search.wind.speed} m/s</p>
                    </div>
                </div>
                )}
                
            </div>
        </div>
           {/* <p>{JSON.stringify(search)}</p> */}
        </div>
    )
    }

export default Card
