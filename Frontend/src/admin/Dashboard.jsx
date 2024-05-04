// AdminDashboard.js
import React from 'react';

const AdminDashboard = ({ children }) => {
  return (
    <div className="flex">
      <aside className="w-64 bg-gray-800 text-white h-screen">
        {/* Navigation Links */}
        <ul>
          <li>Add Bus</li>
          <li>Remove Bus</li>
          <li>Update Ticket</li>
          <li>Remove Ticket</li>
        </ul>
      </aside>
      <main className="flex-1 p-8">{children}</main>
    </div>
  );
};

export default AdminDashboard;
