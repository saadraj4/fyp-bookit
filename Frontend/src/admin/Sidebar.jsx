import React from 'react'
import { Link } from 'react-router-dom'


function Sidebar() {
    return (
        <div className="flex">
            <aside className="w-64 bg-gray-800 text-white h-screen">
                {/* Navigation Links */}

                <ul>
                    <li><Link to="/dashboard">Dashboard</Link></li>
                    <li><Link to="/addBus">Add Bus</Link></li>
                    <li><Link to="/removeBus">Remove Bus</Link></li>
                    <li>Update Ticket</li>
                    <li>Remove Ticket</li>
                </ul>
            </aside>
            <main className="flex-1 p-8"></main>
        </div>
    )
}

export default Sidebar