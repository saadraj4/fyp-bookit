import React from "react";
import {
  AiOutlineMail,
  AiOutlineLock,
  AiOutlineUser,
  AiOutlinePhone,
} from "react-icons/ai";

export default function SignUp() {
  return (
    <div className="sign_up">
      <div className="w-full bg-slate-700 p-20 flex justify-around align-middle items-center gap-10">
        <div className="sign_up_area w-[50%] p-10">
          <div className="form">
            <div className="text-5xl my-5 text-white font-bold">Sign Up</div>
            <form className="sign_up-form my-10">
              <div className="form-group my-5 border rounded flex justify-center items-center align-middle">
                <div className="icons w-[10%] text-center">
                  <AiOutlineUser
                    autoFocus
                    className="p-0 text-white text-2xl w-full text-center"
                  />
                </div>
                <div className="input w-[90%]">
                  <input
                    type="text"
                    className="p-2 outline-none w-full"
                    placeholder="Full Name"
                  />
                </div>
              </div>

              <div className="form-group my-5 border rounded flex justify-center items-center align-middle">
                <div className="icons w-[10%] text-center">
                  <AiOutlineMail
                    autoFocus
                    className="p-0 text-white text-2xl w-full text-center"
                  />
                </div>
                <div className="input w-[90%]">
                  <input
                    type="text"
                    className="p-2 outline-none  w-full"
                    placeholder="Email"
                  />
                </div>
              </div>

              <div className="form-group my-5 border rounded flex justify-center items-center align-middle">
                <div className="icons w-[10%] text-center">
                  <AiOutlinePhone
                    autoFocus
                    className="p-0 text-white text-2xl w-full text-center"
                  />
                </div>
                <div className="input w-[90%]">
                  <input
                    type="text"
                    className="p-2 outline-none  w-full"
                    placeholder="Phone Number"
                  />
                </div>
              </div>

              <div className="form-group my-5 border rounded flex justify-center items-center align-middle">
                <div className="icons w-[10%] text-center">
                  <AiOutlineLock className="p-0 text-white text-2xl w-full text-center" />
                </div>
                <div className="input w-[90%]">
                  <input
                    type="text"
                    className="p-2 outline-none w-full"
                    placeholder="Password"
                  />
                </div>
              </div>
              <div></div>
              <div>
                <button
                  type="submit"
                  className="p-2 my-5 px-16 border bg-slate-700 text-white duration-300 hover:bg-white hover:text-slate-700 rounded-md"
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="engage text-center p-10 w-[50%] bg-white rounded">
          <div className="text-3xl my-5 text-slate-800 font-bold">
            One of Us ?
          </div>
          <div className="text-xl text-slate-800 font-bold">
            Please Login In if you already have an account.
          </div>
          <div className="my-10">
            <a
              href="/login"
              className="p-3 px-14 border hover:bg-slate-700 hover:text-white duration-300 border-slate-700 rounded-full"
            >
              Login
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
