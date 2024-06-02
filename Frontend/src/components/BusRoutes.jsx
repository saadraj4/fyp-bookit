import React from "react";

export default function BusRoutes() {
  return (
    <div className="BusRoutes my-20 w-full px-10">
      <h1 className="md:text-5xl text-4xl text-center text-slate-800">
        Popular Bus Routes
      </h1>
      <div className="routes py-10 grid grid-cols-2">
        <div className="rout1 sm:col-span-1 col-span-2 mx-10">
          <div className="flex align-middle items-center justify-between py-5 text">
            <p className="text-slate-700">Lahore To Karachi</p>
            <button className="cursor-default border border-[#EE6C4D] p-2 rounded-md px-6 text-[#EE6C4D] hover:text-[#FFFFFF] hover:bg-[#EE6C4D]">
              2:00pm
            </button>
          </div>
          <hr className="border-slate-400" />
        </div>

        <div className="rout2 sm:col-span-1 col-span-2  mx-10">
          <div className="flex align-middle items-center justify-between py-5 text">
            <p className="text-slate-700">Lahore To Peshawer</p>
            <button className="cursor-default border border-[#EE6C4D] p-2 rounded-md px-6 text-[#EE6C4D] hover:text-[#FFFFFF] hover:bg-[#EE6C4D]">
              3:00pm
            </button>
          </div>
          <hr className="border-slate-400" />
        </div>

        <div className="rout3 sm:col-span-1 col-span-2  mx-10">
          <div className="flex align-middle items-center justify-between py-5 text">
            <p className="text-slate-700">Lahore To Rawalpindi / Islamabad</p>
            <button className="cursor-default border border-[#EE6C4D] p-2 rounded-md px-6 text-[#EE6C4D] hover:text-[#FFFFFF] hover:bg-[#EE6C4D]">
              4:00pm
            </button>
          </div>
          <hr className="border-slate-400" />
        </div>

        <div className="rout4 sm:col-span-1 col-span-2  mx-10">
          <div className="flex align-middle items-center justify-between py-5 text">
            <p className="text-slate-700">Rawalpindi / Islamabad To Lahore</p>
            <button className="cursor-default border border-[#EE6C4D] p-2 rounded-md px-6 text-[#EE6C4D] hover:text-[#FFFFFF] hover:bg-[#EE6C4D]">
              5:00pm
            </button>
          </div>
          <hr className="border-slate-400" />
        </div>

        <div className="rout5 sm:col-span-1 col-span-2  mx-10">
          <div className="flex align-middle items-center justify-between py-5 text">
            <p className="text-slate-700">Karachi to Quetta</p>
            <button className="cursor-default border border-[#EE6C4D] p-2 rounded-md px-6 text-[#EE6C4D] hover:text-[#FFFFFF] hover:bg-[#EE6C4D]">
              6:00pm
            </button>
          </div>
          <hr className="border-slate-400" />
        </div>

        <div className="rout6 sm:col-span-1 col-span-2  mx-10">
          <div className="flex align-middle items-center justify-between py-5 text">
            <p className="text-slate-700">Rawalpindi / Islamabad To Karachi</p>
            <button className="cursor-default border border-[#EE6C4D] p-2 rounded-md px-6 text-[#EE6C4D] hover:text-[#FFFFFF] hover:bg-[#EE6C4D]">
              7:00pm
            </button>
          </div>
          <hr className="border-slate-400" />
        </div>
      </div>
    </div>
  );
}
