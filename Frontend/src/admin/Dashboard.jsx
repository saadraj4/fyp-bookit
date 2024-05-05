//Dashboard.js
import Sidebar from './Sidebar';
import React from 'react';

const AdminDashboard = () => {
  return (
    <>
    <div className='flex'>
    <Sidebar/>
    <div className='flex-1'>Dashboard</div>
    </div>
    </>
  );
};

export default AdminDashboard;
