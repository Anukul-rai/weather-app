import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function Card() {
    const[input,setInput]=useState('')
    const[search,setSearch]=useState()

    const fetchApi = async(input)=>{
    if (!input) return;
    try {
        const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${input}&appid=edb1b2074b737302fac36846f4db105e`)
        const data = await res.json()
        setSearch(data)
        console.log(data)
        } catch (error) {
        console.error(error)
        }
    }
    

    const handleSearch = async(e)=>{
        e.preventDefault()
        await fetchApi(input)
        setInput('')
    }
    return (
        <div className='min-h-screen bg-[url("/images/thunder.jpg")] bg-cover bg-center pt-[10%] '>
        <div className=' flex items-center justify-center flex-col '>
            <div className='bg-indigo-800 p-5 rounded-2xl shadow-2xl mt-5'>
                <h1 className='text-3xl font-bold m-3 text-center '>Weather App</h1>
            <div className='flex flex-row gap-3 my-6 mx-3'>
                <input 
                type="text" 
                placeholder='Enter a location...' 
                className='rounded-xl bg-white text-gray-600 px-3 py-1 ' 
                value={input}
                onChange={(e)=>setInput(e.target.value)}/>
                <button 
                className='text-sm py-1 px-3 rounded-3xl bg-yellow-500 border-none transition-colors duration-300 hover:bg-black focus:border-none'
                onClick={handleSearch}
                >Search</button>
            </div>
            </div>
        </div>
            { search && (
                <div className="mt-6 bg-white text-black p-4 rounded-xl shadow-md max-w-md mx-auto">
                    <h2 className="text-2xl font-bold">{search.city.name}, {search.city.country}</h2>
                    <p className="text-lg">Temperature: {(search.list[0].main.temp - 273.15).toFixed(1)}°C</p>
                    <p>Condition: {search.list[0].weather[0].main}</p>
                    <p>{search.list[0].dt_txt}</p>
                </div>
                )}
        </div>
    )
    }

export default Card
