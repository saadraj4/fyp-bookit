import React from "react";
import downloadImg from "../assets/img/appscreen.png";

export default function Download() {
  return (
    <div className="download my-20 px-20 w-full">
      <div className="download-section grid grid-cols-2">
        <div className="md:col-span-1 col-span-2">
          <div className="text">
          <h1 className="text-slate-800 md:text-5xl text-3xl font-semibold">COMING SOON...</h1>
            <h3 className="text-slate-800 md:text-5xl text-2xl mt-2">
              Mobile App
            </h3>
            <div className="content text-slate-600 ">
              <p className="my-4 mt-5 md:text-2xl text-xl">
                Download our app for the fastest, most convenient way to Book
                Tickets Online.
              </p>
              <p>
                Our app has all your booking needs covered: Secure payment
                channels, easy 4-step booking process, and sleek user designs.
                What more could you ask for?
              </p>

              <ul className="my-5 list-disc px-10">
                <li>Booking Online</li>
                <li>Recharge</li>
                <li>Secure Payments</li>
                <li>And much more ....</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="md:col-span-1 col-span-2">
          <div className="image md:ml-20 md:mt-0 mt-10">
            <img src={downloadImg} alt = "alternative"className="h-full w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
