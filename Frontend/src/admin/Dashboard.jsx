import React, {useState,useEffect} from 'react'
import Sidebar from './Sidebar'
import { Luggage, Tv, Cable, Utensils, Wifi, Armchair } from 'lucide-react';
import image from "../assets/logo/logo.png"
import axios from 'axios';


function Dashboard() {
  const [busOptions, setBusOptions] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:80/bus/allbus")
    .then(res => {
      console.log(res.data);
      setBusOptions(res.data)
    })
    .catch(err => {
      console.log(err);
    })
  }, [])
  return (
    <>
    <div className='flex'>
    <div><Sidebar/></div>
      <div className="space-y-4 mt-8 flex-1">
        {busOptions.map((bus, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-start gap-10">


            <div className="flex flex-col justify-center  w-32  items-center ">
              <img src={image} alt="image" srcSet="" />

              <div className="text-lg  italic">{bus.time}</div>
              <div className="text-lg  italic">{bus.date}</div>

            </div>


            <div className="flex flex-col flex-grow justify-center   items-start ">
              <div className="text-lg font-semibold">{bus.type}</div>
              <div className='flex gap-5 my-4'>
                <Luggage stroke='green' fill='yellow' className='hover:bg-blue-700 rounded-md cursor-pointer' />
                <Tv stroke='green' fill='yellow' className='hover:bg-blue-700 rounded-md cursor-pointer' />
                <Cable stroke='green' fill='yellow' className='hover:bg-blue-700 rounded-md cursor-pointer' />
                {(bus.type.toUpperCase() == "EXECUTIVE") ?
                  <>
                    <Utensils stroke='green' fill='yellow' className='hover:bg-blue-700 rounded-md cursor-pointer' />
                    <Wifi stroke='green' fill='yellow' className='hover:bg-blue-700 rounded-md cursor-pointer' />
                    <Armchair stroke='green' fill='yellow' className='hover:bg-blue-700 rounded-md cursor-pointer' />
                  </> : <></>}
              </div>
            </div>



            <div className="text-lg font-bold mr-18">{bus.origin}</div>
            <div className="text-lg font-bold mr-20">{bus.destination}</div>
            
            <section className='mr-20'>
              <div className="text-lg font-bold">{bus.price}</div>
              <p className='-mt-2 italic'>Per Person</p>
            </section>

          </div>
        ))}
      </div>
      </div>
    </>
  )
}

export default Dashboard