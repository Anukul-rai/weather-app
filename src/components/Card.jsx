import React from 'react'

function Card() {
    return (
        <div className='min-h-screen bg-[url("/images/background.jpg")] bg-cover bg-center '>
            <div className='flex items-center justify-center flex-col'>
                <div className='bg-indigo-900 p-5 rounded-2xl shadow-2xl mt-5'>
                    <h1 className='text-3xl m-3 text-center text-white'>Weather App</h1>
                    <div className='flex flex-row gap-3 mt-2 mb-5'>
                        <input
                            type="text"
                            placeholder='Enter a location...'
                            className='rounded-xl bg-white text-gray-600 px-3 py-1'
                        />
                        <button className='text-sm py-1 px-3 rounded-3xl bg-yellow-500 border-none transition-colors duration-300 hover:bg-black hover:text-white'>
                            Search
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
