import React from 'react'

function Topbuttons() {

    const cities=[
        {
            id: 1,
            name: 'London',
        },
        {
            id: 2,
            name: 'New York',
        },
        {
            id: 3,
            name: 'Tokyo',
        },
        {
            id: 4,
            name: 'Sydney',
        },
        {
            id:5,
            name:'Kathmandu'
        }
    ]
    return (
        <div className='flex items-center justify-center my-6'>{
            cities.map((city,i)=>(
                <button className='text-white text-lg font-medium mx-2 px-4 py-2  rounded-2xl hover:bg-gray-700/35 transition duration-300'>{city.name}</button>
            ))
            }
        </div>
    )
}

export default Topbuttons
