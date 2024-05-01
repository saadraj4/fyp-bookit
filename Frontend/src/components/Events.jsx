import React from 'react'
import {AiOutlineArrowRight} from 'react-icons/ai';
import img1 from '../assets/img/events/2.png'
import img2 from '../assets/img/events/3.png'
import img3 from '../assets/img/events/4.png'


export default function Events() {
  return (
    <div className='w-full p-20'>
    <div className='my-10 text-slate-700'>
    <h1 className='text-5xl font-bold overflow-hidden'>
    Events
    </h1>
    <p className='my-5'>
    Great minds discuss ideas; average minds discuss events; small minds discuss people.
    </p>
    </div>
      <div className='events flex-wrap flex justify-around items-center'>
        <div className='event bg-slate-200 my-5 rounded-md'>
            <div className='image rounded-md'>
            <img className='rounded-tr-md rounded-tl-md w-80 h-72' src={img1} />
            </div>
            <div className='link px-5 py-4'>
            <a href='/event-details' className='flex py-2 items-center gap-3'>
            Event
            <AiOutlineArrowRight />
            </a>
            </div>
        </div>
        <div className='event bg-slate-200 my-5 rounded-md'>
            <div className='image rounded-md'>
            <img className='rounded-tr-md rounded-tl-md w-80 h-72' src={img2} />
            </div>
            <div className='link px-5 py-4'>
            <a href='/event-details' className='flex py-2 items-center gap-3'>
            Event
            <AiOutlineArrowRight />
            </a>
            </div>
        </div>
        <div className='event bg-slate-200 my-5 rounded-md'>
            <div className='image rounded-md'>
            <img className='rounded-tr-md rounded-tl-md w-80 h-72' src={img3} />
            </div>
            <div className='link px-5 py-4'>
            <a href='/event-details' className='flex py-2 items-center gap-3'>
            Event
            <AiOutlineArrowRight />
            </a>
            </div>
        </div>
      </div>
    </div>
  )

  }

