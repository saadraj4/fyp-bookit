import React from 'react';
import banner from '../assets/img/bus/banner.jpg';
import img from '../assets/img/bus/2.png';
export default function Banner() {
  return (
    <div>
      <div className="banner w-full py-24 sm:px-20 px-10 background-image flex  justify-end align-middle items-center">
        <div className='sm:col-span-1 col-span-2 sm:pr-10 sm:text-left text-center w-[50%] bg-gray-700 rounded-lg p-2 bg-opacity-40'>
          <div className="max-w-screen-lg mx-auto text-justify">
            <h1 className="text-slate-800 md:text-7xl text-5xl font-bold pb-3">Book Karo</h1>
            <h2 className="text-[#E0FBFC] text-xl md:text-2xl py-5 font-bold">
              We offer Online Digital Booking System
            </h2>
            <p className="dynamic-content sm:text-xl text-[16px] text-[#E0FBFC]">
              Kali Linux, known initially as BackTrack Linux, is a free and open-source Linux-based operating system geared at advanced penetration testing and security auditing. Kali Linux has hundreds of tools that perform different information security activities, including penetration testing, security research, computer forensics, and reverse engineering.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
