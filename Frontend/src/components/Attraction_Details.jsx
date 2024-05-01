import React from 'react'
import img from '../assets/img/attraction/2.jpg';

export default function Attraction_Details() {
  return (
    <div>
    <div className="w-full md:p-20 p-10">
    <div className="grid grid-cols-4 gap-x-5">
      <div className="md:col-span-3 col-span-4">
        <div className="details bg-slate-100 rounded-md shadow-lg shadow-slate-400 border">
          <img src={img} className="w-full rounded-tl-md rounded-tr-md" />
          <div className="registration">
            <form className="md:p-10 p-5 bg-white">
              <h1 className="font-bold md:text-4xl text-3xl text-slate-800">
                Personal Details
              </h1>
              <div className="form-fields md:px-5 py-1 grid grid-cols-2">
                <div className="form-group m-1 md:col-span-1 col-span-2">
                  <input
                    name="email"
                    className="input border w-full border-slate-300 rounded-md p-2 px-5"
                    placeholder="Email"
                  />
                </div>
                <div className="form-group m-1 md:col-span-1 col-span-2">
                  <input
                    name="fullName"
                    className="input border w-full border-slate-300 rounded-md p-2 px-5"
                    placeholder="Name"
                  />
                </div>
              </div>
              <div className="form-fields md:px-5 py-1 grid grid-cols-2">
                <div className="form-group m-1 md:col-span-1 col-span-2">
                  <input
                    name="number"
                    className="input border w-full border-slate-300 rounded-md p-2 px-5"
                    placeholder="03xxxxxxxxx"
                    pattern="03[0-9]{9,9}"
                    required
                  />
                </div>
                <div className="form-group m-1 md:col-span-1 col-span-2">
                  <input
                    name="CNIC"
                    className="input border w-full border-slate-300 rounded-md p-2 px-5"
                    placeholder="45301-2781645-5"
                    pattern="[0-9]{5,5}-[0-9]{7,7}-[0-9]{1,1}"
                    required
                  />
                </div>
                <button
                  className="border rounded-md m-1 bg-slate-800 text-white hover:text-slate-800 duration-150 p-2 mt-3 md:w-[50%] w-[100%] border-slate-500 hover:bg-white"
                  type="submit"
                >
                  Submit
                </button>
              </div>
              <p className="p-3 px-7 text-slate-800">
                Your booking details will be sent to this email address and
                mobile number.
              </p>
            </form>

            <div className="event-info p-5">
              
              <div className="detailed-info md:p-10 p-5">
              <h1 className="text-3xl text-slate-800">
              Attraction Details 
              </h1>
              <p className=" my-5 text-slate-800">
              PAKISTAN’S LONGEST WATER BODY ZIPLINE MESMERIZING VIEW OF KHANPUR DAM Length: 1 Km Height from ground: 150 ft Speed: up to 80km/hr Riding Options: Straight sitting, 360 degree, Belly position Distance from Islamabad: 45 km LOCATION: Orange Lake Resort, Khanpur Dam Pakistan.
              </p>
              <h1 className="text-3xl text-slate-800">
              Activity Policy 
              </h1>
              <p className="my-5 text-slate-800">
              1. Tickets are non-refundable and non-transferable. 2. Online Generated Invoice or Message must be presented at the event for entry.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:col-span-1 col-span-4 bg-slate-300 rounded-tr-md rounded-tl-md md:my-0 my-10 ">
        <h1 className="font-bold rounded-lg text-3xl bg-slate-800 shadow-lg shadow-white text-white p-5">
          Details
        </h1>
        <div className="my-5">
          <div className="city flex justify-between p-[8px] px-3 text-[15px] m-2 rounded-md bg-slate-100">
            <p>City</p>
            <p>Khanpur Dam</p>
          </div>
          <div className="event flex justify-between p-[8px] px-3 text-[15px] m-2 rounded-md bg-slate-100">
            <p>Event</p>
            <p>Orange Resort Zipline - Khanpur Dam | Buy Tickets Online by Bookkaru</p>
          </div>
          <div className="venue flex justify-between p-[8px] px-3 text-[15px] m-2 rounded-md bg-slate-100">
            <p>Venue</p>
            <p>Orange Lake Resorts, Khanpur Dam, Pakistan.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
    </div>
  )
}
