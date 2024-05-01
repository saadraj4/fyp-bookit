import React from 'react';
import banner from '../assets/img/blog/banner.png';
import img from '../assets/img/bus/2.png';
export default function BlogBanner() {
  return (
    <div className="w-screen h-screen bg-no-repeat p-0 bg-[image:var(--image-url)] " style={{ '--image-url': `url(${banner})`, 'background-size': 'cover' }} >
      <div className="banner w-full py-24 sm:px-20 px-10 align-middle items-center">
        <div className='sm:pr-10 sm:text-left text-center  backdrop-opacity-30 backdrop-invert bg-black/60 rounded-md p-10 '>
          <div className="max-w-screen-lg mx-auto">
            <h1 className="text-white md:text-7xl text-5xl font-bold pb-3">Blog Of World</h1>
            <h2 className="text-white text-xl md:text-2xl py-5 font-bold">
              We offer Online Digital Booking System
            </h2>
            <p className="dynamic-content sm:text-xl text-[16px] text-white">
              Kali Linux, known initially as BackTrack Linux, is a free and open-source Linux-based operating system geared at advanced penetration testing and security auditing.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
