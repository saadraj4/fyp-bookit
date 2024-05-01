import React from "react";
import img from "../assets/img/tours/1.png";

export default function Tour_Details() {
  return (
    <div>
      <div className="w-full md:p-20 p-10">
        <div className="flex flex-wrap">
          <div className="md:mr-10 md:w-[67%] w-full">
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
                  <p className="p-3 px-7 text-slate-800">
                  Join De Exotic Travellers on a 4-day group tour to the breathtakingly beautiful Neelum Valley and Taobat
                  </p>
                  <div className="detailed-info md:p-10 p-5">
                    <h1 className="text-3xl text-slate-800">Tour Policy</h1>
                    <p className="my-5 text-slate-800">
                      Please bring a National Identity Card (CNIC) and a copy of CNIC along with you (mandatory). The Company reserves the right to refuse any participant, who does not have CNIC, to board the trip without any refund. The Company reserves the unfettered right to substantially change, alter or modify the trip schedule without any prior intimation to participants and/or costs due to unforeseen factors including without limitation to traffic jams, landslides, riots, terrorist activity, political turmoil, bad weather or as deemed fit to be in the best interest of the whole group by the Company. You warrant and affirm that you will not get involved in any character failing activity, including but not limited to use of obscene language or as the Company or its representative(s) deems fit, during the trip and acknowledge that failure to abide by this provision will entitle the Company to drop you off from rest of the trip without any refund. Please take care of the other participants’ respect and privacy. The Company and its representative(s) reserve the right to remove any person from the trip without warning in the case of noncompliance with this condition. If, for any unforeseen reason or activity that is beyond the control of the Company, the trip is cancelled at any time before departure then participants will be entitled to refund of their respective amount paid to the Company after 20% deductions from the amount paid and/or charging any administrative costs incurred to make such refunds. The Company shall be entitled to make a 100% deduction along with any administrative costs incurred on the total amount or full initial deposit, as the case may be if the participant cancels his/her booking in the last two days before departure. You warrant and affirm that you do not possess any explosives, weapons, or prohibited drugs of any sort throughout the trip. The Company and its representative(s) shall not be held liable for any situation that arises due to your mollified or negligence and you shall hold the Company and its representative(s) harmless and indemnified from any legal or civil consequences arising out of your actions in this regard. Any participant found to be in possession of the aforementioned restricted article(s) shall be immediately dropped from the trip without any refund. In case of theft, robbery or loss or damage by any means whatsoever, to the personal belongings of participants, regardless of their monetary value, during the trip, the Company or its representative(s) shall not be held liable for any such loss or damage be it direct or indirect. You warrant and affirm that you will use/handle any of the Company’s equipment provided to you during the course of this trip will utmost reasonable skill and care and warrant to not damage Company’s property/equipment and/or any service tool under the possession of Company being used for the trip. If you fail to adhere to this condition, either intentionally or negligently, you shall be bound to pay/reimburse/indemnify the Company for its losses and any consequential damages that may arise from your failure to comply with this condition. The Company will take all reasonably possible measures to ensure safety and wellbeing of participants of the trip, however, in case any unwanted situation arises which is beyond the reasonable control of the Company or its representative(s) and in presence of any unforeseeable, inevitable event, the Company and/or its representative(s) shall, by any reason whatsoever, not be held liable and responsible for any consequences. We wish you all the best and looking forward to seeing you join this Thrilling and Adventurous
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-[28%] w-full md:h-96 h-auto col-span-5 bg-slate-300 rounded-md md:my-0 my-10 shadow-lg">
            <form>
              <div className="form-field">
                <p className="p-5 mt-5">
                  Select City from where you will join this tour
                </p>
                <div className="city text-center mx-5 mb-2">
                  <select className="px-5 py-3 w-full rounded shadow-sm outline-none">
                    <option>--- Select City ---</option>
                    <option> Islamabad </option>
                    <option> Lahore </option>
                    <option> Karachi </option>
                  </select>
                </div>
              </div>
              <div className="form-field">
                <p className="p-5 mt-0">
                  Select Time slot when you want to visit
                </p>
                <div className="city text-center mx-5">
                  <input
                    type="time"
                    className="px-5 py-3 w-full rounded shadow-sm outline-none"
                  />
                </div>
              </div>
              <div className="form-field">
                
                <div className="city text-center m-5">
                  <button
                    type="submit"
                    className="px-5 py-3 w-full bg-slate-700 text-white hover:bg-slate-300 border-slate-600 hover:text-slate-700 duration-200 border rounded shadow-sm outline-none"
                  >Book Now
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
