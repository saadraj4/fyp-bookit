import React from 'react';

const Redirect = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="max-w-md p-8 bg-white rounded-lg shadow-lg text-center">
        <p className="text-xl font-bold mb-4">
          Thank you for choosing our services. Your Ticket(s) are confirmed
        </p>
        <p className="text-gray-600">
          Please reach the terminal 1 hour prior to departure
        </p>
      </div>
    </div>
  );
};

export default Redirect;