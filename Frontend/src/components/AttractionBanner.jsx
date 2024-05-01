import React from 'react';
import banner from '../assets/img/attraction/banner.jpg';
import img from '../assets/img/bus/2.png';
export default function AttractionBanner() {
  return (
    <div className="w-screen h-screen bg-no-repeat p-0 bg-[image:var(--image-url)] "  style={{'--image-url': `url(${banner})`, 'background-size':'cover'} } >    
    <div className="banner w-full py-24 sm:px-20 px-10 align-middle items-center">
    <div className='sm:pr-10 sm:text-left text-center  backdrop-opacity-10 backdrop-invert bg-white/50 rounded-md p-10 '>
      <div className="max-w-screen-lg mx-auto">
      <h1 className="text-slate-800 md:text-7xl text-4xl font-bold pb-3">Incredible Attractions</h1>
      <h2 className="text-slate-900 text-xl md:text-2xl py-5 font-bold">
        We offer Online Digital Booking System
      </h2>
      <p className="dynamic-content sm:text-xl text-[16px] text-black">
      Kali Linux, known initially as BackTrack Linux, is a free and open-source Linux-based operating system geared at advanced penetration testing and security auditing.
        </p>
      </div>
      </div>
    </div>
        
    </div>
  );
}
