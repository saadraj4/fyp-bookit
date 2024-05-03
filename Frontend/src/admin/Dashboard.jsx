import React from 'react';
import RouteManager from './RouteManager';
import TicketManager from './TicketManager';

function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-5">
      <h1 className="text-4xl font-bold text-center text-gray-900">Admin Dashboard</h1>
      <div className="mt-10 grid grid-cols-2 gap-4">
        <RouteManager />
        <TicketManager />
      </div>
    </div>
  );
}

export default Dashboard;
