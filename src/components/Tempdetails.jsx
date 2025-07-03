import React from 'react'
import {FaThermometerEmpty} from 'react-icons/fa'
import {BiSolidDropletHalf} from 'react-icons/bi'
import {FiWind} from 'react-icons/fi'
import {GiSunrise,GiSunset} from 'react-icons/gi'
import {MdKeyboardArrowUp,MdKeyboardArrowDown} from 'react-icons/md'

function Tempdetails() {

    const verticalDetails =[
        {
            Icon:FaThermometerEmpty,
            title: "Real Feel",
            value: '22°'
        },
        {
            Icon:BiSolidDropletHalf,
            title: "Humidity",
            value: '345%'
        },
        {
            Icon:FiWind,
            title: "Wind",
            value: '11 km/h'
        }
    ];
    const horzDetails =[
        {
            Icon:GiSunrise,
            title: "Sunrise",
            value: '05:33 AM'
        },
        {
            Icon:GiSunset,
            title: "Sunset",
            value: '07:33 PM'
        },
        {
            Icon:MdKeyboardArrowUp,
            title: "High",
            value: '37'
        },
        {
            Icon:MdKeyboardArrowDown,
            title: "Low",
            value: '37'
        }
    ]
    return (
        <div>
        <div className='flex items-center justify-center my-6 tex-xl text-shadow-cyan-300'>
            <p>Rain</p>
        </div>
        <div className='flex flex-row items-center justify-between py-3'>
            <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="" 
            className='w-20'/>
            <p className='text-5xl'>34°</p>
            <div className='flex flex-col space-y-3 items-start'>
                {verticalDetails.map(({Icon,title,value},i)=>(
                <div key={i}className='flex font-light text-sm items-center justify-center'>
                    <Icon size={18}/>{title} <span className='font-medium ml-1'>{value}</span>
                </div>))}
            </div>
        </div>
        <div cla>

        </div>
        
        </div>
    )
}

export default Tempdetails
