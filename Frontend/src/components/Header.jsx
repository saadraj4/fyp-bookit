import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';

export default function Header() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="header">
      <div className="navigation px-20 py-5 flex items-center justify-between bg-slate-800 text-[#E0FBFC]">
        <h1 className="site-title md:text-5xl text-4xl font-bold">
          <Link to="/">B<span className="italic">oo</span>k<span className="italic">I</span>t</Link>
        </h1>

        {toggle ? (
          <h3
            onClick={() => setToggle(!toggle)}
            className="text-2xl sm:hidden block"
          >
            <AiOutlineClose />
          </h3>
        ) : (
          <h3
            onClick={() => setToggle(!toggle)}
            className="text-2xl sm:hidden block"
          >
            <AiOutlineMenu />
          </h3>
        )}

        <ul className="links z-10 gap-5 hidden sm:flex">
          <li className="nav-link">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-link">
            <Link to="/bus">Bus</Link>
          </li>
          <li className="nav-link">
            <Link to="/tour">Tour</Link>
          </li>
          <li className="nav-link">
            <Link to="/attraction">Attraction</Link>
          </li>
          <li className="nav-link">
            <Link to="/event">Event</Link>
          </li>
          <li className="nav-link">
            <Link to="/blog">Blog</Link>
          </li>
          <li className="nav-link">
            <Link to="/contact-us">Contact Us</Link>
          </li>
          <li className="nav-link">
            <Link to="/register">Register</Link>
          </li>
          <li className="nav-link">
            <Link to="/login">Login</Link>
          </li>
        </ul>

        {/* Responsive menu */}
        <ul
          className={`duration-300 z-10 links top-20 py-5 h-screen text-[#E0FBFC] w-full sm:hidden fixed bg-slate-900 ${toggle ? "left-[0]" : "left-[-100%]"}`}
        >
          <li className="px-5 py-3 nav-link">
            <Link to="/">Home</Link>
          </li>
          <li className="px-5 py-3 nav-link">
            <Link to="/bus">Bus</Link>
          </li>
          <li className="px-5 py-3 nav-link">
            <Link to="/tour">Tour</Link>
          </li>
          <li className="px-5 py-3 nav-link">
            <Link to="/attraction">Attraction</Link>
          </li>
          <li className="px-5 py-3 nav-link">
            <Link to="/event">Event</Link>
          </li>
          <li className="px-5 py-3 nav-link">
            <Link to="/blog">Blog</Link>
          </li>
          <li className="px-5 py-3 nav-link">
            <Link to="/contact-us">Contact Us</Link>
          </li>
          <li className="px-5 py-3 nav-link">
            <Link to="/register">Register</Link>
          </li>
          <li className="px-5 py-3 nav-link">
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
