import React, { useEffect, useState } from 'react'

function Card() {


  return (
    <div className='flex justify-center flex-col items-center h-screen bg-black'>
      <h2 className='text-white'>Weather Information</h2>
      <div className='text-white'>
        {/* Weather details will be displayed here */}
        <p className='text-2xl font-bold'>Weather Details</p>
        {weatherData?(
          <div>
            <p>Latitude:</p>
            <p>City: {weatherData.name}</p>
            <p>Temperature: {Math.round(weatherData.main.temp - 273.15)}°C</p>
            <p>Condition: {weatherData.weather[0].description}</p>
          </div>
        ) : (
          <p>Loading...</p>
        )
        } 
      </div>
      <div className='mt-4'>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
          Refresh
        </button>
        <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2'>
          Clear
        </button>
      </div>
    </div>
  )
}

export default Card
