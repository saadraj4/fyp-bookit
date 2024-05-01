import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import img1 from "../assets/img/tours/1.png";
import img2 from "../assets/img/tours/2.png";
import img3 from "../assets/img/tours/3.png";

export default function Tours() {
  return (
    <div className="w-full p-20">
      
    <div className="Hunza-and-Skardo">
        <div className="my-10 text-slate-700">
          <h1 className="md:text-5xl text-3xl font-bold overflow-hidden">
            Hunza and Skardo
          </h1>
        </div>
        <div className="Tours flex-wrap flex justify-around items-center">
          <div className="Tour bg-slate-200 hover:scale-105 duration-300  my-5 rounded-md">
            <a href="/tour-details" className="py-2 items-center gap-3">
              <div className="image rounded-md">
                <img
                  className="rounded-tr-md rounded-tl-md w-80 h-72"
                  src={img1}
                />
              </div>
              <div className="link px-5 py-4 w-80">
                8 Days Tour to Hunza only for Couple
              </div>
            </a>
          </div>
          <div className="Tour bg-slate-200 hover:scale-105 duration-300  my-5 rounded-md">
            <a href="/tour-details" className="py-2 items-center gap-3">
              <div className="image rounded-md">
                <img
                  className="rounded-tr-md rounded-tl-md w-80 h-72"
                  src={img2}
                />
              </div>
              <div className="link px-5 py-4 w-80">
                8 Tour to beautifull Hunza and Skardo Valley
              </div>
            </a>
          </div>
          <div className="Tour hover:scale-105 duration-300 bg-slate-200 my-5 rounded-md">
            <a href="/tour-details" className="py-2 items-center gap-3">
              <div className="image rounded-md">
                <img
                  className="rounded-tr-md rounded-tl-md w-80 h-72"
                  src={img3}
                />
              </div>
              <div className="link px-5 py-4">7 Days tour to Skardo</div>
            </a>
          </div>
        </div>
      </div>

      <div className="Naran-and-Kagan">
        <div className="my-10 text-slate-700">
          <h1 className="md:text-5xl text-3xl font-bold overflow-hidden">
            Hunza and Kagan
          </h1>
        </div>
        <div className="Tours flex-wrap flex justify-around items-center">
          <div className="Tour bg-slate-200 hover:scale-105 duration-300  my-5 rounded-md">
            <a href="/tour-details" className="py-2 items-center gap-3">
              <div className="image rounded-md">
                <img
                  className="rounded-tr-md rounded-tl-md w-80 h-72"
                  src={img1}
                />
              </div>
              <div className="link px-5 py-4 w-80">
                10 Days Tour to Naran and Kagan
              </div>
            </a>
          </div>
          <div className="Tour bg-slate-200 hover:scale-105 duration-300  my-5 rounded-md">
            <a href="/tour-details" className="py-2 items-center gap-3">
              <div className="image rounded-md">
                <img
                  className="rounded-tr-md rounded-tl-md w-80 h-72"
                  src={img2}
                />
              </div>
              <div className="link px-5 py-4 w-80">
                5 Days Tour To Naran
              </div>
            </a>
          </div>
          <div className="Tour hover:scale-105 duration-300 bg-slate-200 my-5 rounded-md">
            <a href="/tour-details" className="py-2 items-center gap-3">
              <div className="image rounded-md">
                <img
                  className="rounded-tr-md rounded-tl-md w-80 h-72"
                  src={img3}
                />
              </div>
              <div className="link px-5 py-4">
              5 Days Tour To Kagan
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
