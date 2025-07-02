import React, { useState } from 'react'

import { toast } from 'react-toastify'

function Search() {
  const [input, setInput] = useState("")
  const [search, setSearch] = useState("")

  const handleSearch = () => {
    if (input.trim() !== "") {
      setSearch(input)
      setInput("")
      return
    }else{
      toast.error("Please enter a city name")
    }
    }

  return (
    <div className='flex justify-center items-center h-screen bg-gradient-to-r from-blue-200 to-blue-500 bg-[url("/images/background.jpg")] bg-cover bg-center'>
    <div className='flex flex-col bg-white text-blue-900 py-4 px-6 rounded-xl shadow-cyan-700 shadow-md w-full max-w-md '>
        <h1 className='text-2xl font-bold mb-4 text-center mt-2'>Weather App</h1>
        <div className='flex justify-around py-3 px-4 gap-3'>
            <input 
            type="text" 
            placeholder="Search for a city..."
            className='w-full p-2 ml-2  rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 text-black bg-white'
            value={input}
            onChange={(e) => setInput(e.target.value)}
            />
            <button className='bg-cyan-600 hover:bg-cyan-800 text-white font-bold py-2 px-4 rounded-md cursor-pointer'
            onClick={handleSearch}
            >Search</button>
        </div>
    </div>
    </div>
  )
}

export default Search
