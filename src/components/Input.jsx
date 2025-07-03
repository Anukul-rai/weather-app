import React from 'react'
import { IoSearchCircleOutline } from "react-icons/io5";
import { BiCurrentLocation } from "react-icons/bi";



function Input() {
    return (
        <div className='flex flex-row justify-center my-6'>
            <div className='flex flex-row  w-3/4 items-center justify-center space-x-4'>
                <input 
                type="text" 
                placeholder='Search by city..' 
                className='bg-white text-gray-700 py-2 px-3 rounded w-full shadow-xl capitalize
                focus:outline-none placeholder:lowercase'/>
                    <IoSearchCircleOutline size={40} className='cursor-pointer hover:scale-110'/>
                    <BiCurrentLocation size={40} className='cursor-pointer hover:scale-110' />
                    <div className='flex flex-row w-1/4 items-center justify-center'>
                        <button className='text-2xl font-medium transition ease-in-out hover:scale-110'>°C</button>
                        <p className='text-2xl font-medium mx-1 mb-1'>|</p>
                        <button className='text-2xl font-medium transition ease-in-out hover:scale-110'>°F</button>
                    </div>
            </div>
        </div>
    )
}

export default Input
