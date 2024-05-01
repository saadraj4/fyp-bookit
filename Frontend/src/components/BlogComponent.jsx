import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import img1 from "../assets/img/blog/1.png";
import img2 from "../assets/img/blog/2.jpg";
import img3 from "../assets/img/blog/3.jpg";

export default function BlogComponent() {
  return (
    <div className="w-full m-20">
      <div className="Punjab mt-20">
        <div className=" text-slate-700">
          <h1 className="text-4xl font-bold ">Punjab</h1>
          <div className="blogs flex flex-wrap gap-10 my-10">
            
          <div
              className="blog my-2 bg-no-repeat md:col-span-1 col-span-3 p-5 bg-[image:var(--image-url)] rounded-md h-80 w-80"
              style={{
                "--image-url": `url(${img1})`,
                "background-size": "cover",
              }}
            >
              <div className="">
                <h1 className="text-3xl font-bold text-white bg-slate-600 px-5 py-2 rounded-md">
                  Islamabad
                </h1>
              </div>
              <a
                href="/blog-details"
                className="flex hover:scale-110 duration-300 align-middle justify-between relative top-48 bg-slate-600 p-3 rounded-md px-5 text-slate-300 items-center gap-5"
              >
                <p>Details</p>
                <AiOutlineArrowRight />
              </a>
            </div>

            <div
              className="blog my-2 bg-no-repeat md:col-span-1 col-span-3 p-5 bg-[image:var(--image-url)] rounded-md h-80 w-80"
              style={{
                "--image-url": `url(${img2})`,
                "background-size": "cover",
              }}
            >
              <div className="">
                <h1 className="text-3xl font-bold text-white bg-slate-600 px-5 py-2 rounded-md">
                  Azad Kashmir
                </h1>
              </div>
              <a
                href="/blog-details"
                className="flex hover:scale-110 duration-300 align-middle justify-between relative top-48 bg-slate-600 p-3 rounded-md px-5 text-slate-300 items-center gap-5"
              >
                <p>Details</p>
                <AiOutlineArrowRight />
              </a>
            </div>

            <div
              className="blog my-2 bg-no-repeat md:col-span-1 col-span-3 p-5 bg-[image:var(--image-url)] rounded-md h-80 w-80"
              style={{
                "--image-url": `url(${img3})`,
                "background-size": "cover",
              }}
            >

            <div className="">
            <h1 className="text-3xl font-bold text-white bg-slate-600 px-5 py-2 rounded-md">
              Azad Kashmir
            </h1>
          </div>
          <a
            href="/blog-details"
            className="flex hover:scale-110 duration-300 align-middle justify-between relative top-48 bg-slate-600 p-3 rounded-md px-5 text-slate-300 items-center gap-5"
          >
            <p>Details</p>
            <AiOutlineArrowRight />
          </a>
        </div>
           
          </div>
        </div>
      </div>

      <div className="Sindh mt-20">
      <div className=" text-slate-700">
        <h1 className="text-4xl font-bold ">Sindh</h1>
        <div className="blogs flex flex-wrap my-10 gap-10">
          
        <div
            className="blog my-2 bg-no-repeat md:col-span-1 col-span-3 p-5 bg-[image:var(--image-url)] rounded-md h-80 w-80"
            style={{
              "--image-url": `url(${img1})`,
              "background-size": "cover",
            }}
          >
            <div className="">
              <h1 className="text-3xl font-bold text-white bg-slate-600 px-5 py-2 rounded-md">
                Hyderabad
              </h1>
            </div>
            <a
              href="/blog-details"
              className="flex hover:scale-110 duration-300 align-middle justify-between relative top-48 bg-slate-600 p-3 rounded-md px-5 text-slate-300 items-center gap-5"
            >
              <p>Details</p>
              <AiOutlineArrowRight />
            </a>
          </div>

          <div
            className="blog my-2 bg-no-repeat md:col-span-1 col-span-3 p-5 bg-[image:var(--image-url)] rounded-md h-80 w-80"
            style={{
              "--image-url": `url(${img2})`,
              "background-size": "cover",
            }}
          >
            <div className="">
              <h1 className="text-3xl font-bold text-white bg-slate-600 px-5 py-2 rounded-md">
                Sukkur
              </h1>
            </div>
            <a
              href="/blog-details"
              className="flex hover:scale-110 duration-300 align-middle justify-between relative top-48 bg-slate-600 p-3 rounded-md px-5 text-slate-300 items-center gap-5"
            >
              <p>Details</p>
              <AiOutlineArrowRight />
            </a>
          </div>

          <div
            className="blog my-2 bg-no-repeat md:col-span-1 col-span-3 p-5 bg-[image:var(--image-url)] rounded-md h-80 w-80"
            style={{
              "--image-url": `url(${img3})`,
              "background-size": "cover",
            }}
          >

          <div className="">
          <h1 className="text-3xl font-bold text-white bg-slate-600 px-5 py-2 rounded-md">
            Nawabshah
          </h1>
        </div>
        <a
          href="/blog-details"
          className="flex hover:scale-110 duration-300 align-middle justify-between relative top-48 bg-slate-600 p-3 rounded-md px-5 text-slate-300 items-center gap-5"
        >
          <p>Details</p>
          <AiOutlineArrowRight />
        </a>
      </div>
         
        </div>
      </div>
    </div>
    </div>
  );
}
