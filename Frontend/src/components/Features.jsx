import React from "react";
import {
  AiOutlineLock,
  AiOutlineBranches,
} from "react-icons/ai";

export default function Features() {
  return (
    <div className="features w-100">
      <div className="w-full bg-slate-800 p-20  text-white  grid grid-cols-4">
        <div className="md:col-span-2 md:my-0 my-10 col-span-4 col feature4 px-5 md:px-10">
          <div className="font-bold text-white sm:text-5xl text-4xl">
            Our Features
          </div>
          <p className="my-5">
          Our app has all your booking needs covered: Secure payment
              channels, easy 4-step booking process. Our app has all your booking needs covered: Secure payment
              channels.
              Our app has all your booking needs covered: Secure payment
              channels, easy 4-step booking process. Our app has all your booking needs covered: Secure payment
              channels.
          </p>
          
        </div>

        <div className="md:col-span-1 px-3 col-span-2 col feature1">
          <div className="icon">
            <AiOutlineLock className="text-8xl font-bold text-[#98C1D9] " />
            <h1 className="md:text-4xl text-2xl my-2 font-bold">100% Secure</h1>
            <p className="">
              Our app has all your booking needs covered: Secure payment
              channels, easy 4-step booking process.
            </p>
          </div>
        </div>

        <div className="md:col-span-1 col-span-2 px-3 feature2">
          <div className="icon">
            <AiOutlineBranches className="text-8xl font-bold text-[#98C1D9] " />
            <h1 className="md:text-4xl text-2xl my-2 font-bold">10+ Branches</h1>
            <p className="">
              Our app has all your booking needs covered: Secure payment
              channels, easy 4-step booking process.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
