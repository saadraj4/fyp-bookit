import React from 'react';

const Redirect = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="max-w-md p-8 bg-white rounded-lg shadow-lg text-center">
        <p className="text-xl font-bold mb-4">
          You will be shortly redirected toward the payment gateway
        </p>
        <p className="text-gray-600">
          Please wait a moment while we process your request.
        </p>
      </div>
    </div>
  );
};

export default Redirect;
