import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="flex sticky top-0 h-screen">
      <aside className="w-64 bg-gray-800 text-white h-screen">

        <ul className="h-full">
          <ul className="h-full flex flex-col items-center justify-center font-bold ">
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <br />
            <li>
              <Link to="/addBus">Add Bus</Link>
            </li>
            <br />
            <li>
              <Link to="/removeBus">Remove Bus</Link>
            </li>
            <br />
            <li>
              <Link to="/removeTicket">Remove Ticket</Link>
            </li>
            <br />
            <li>
              <Link to="/requests">Requests</Link>
            </li></ul>
        </ul>
      </aside>
      <main className="flex-1 p-8"></main>
    </div>
  );
}

export default Sidebar;
