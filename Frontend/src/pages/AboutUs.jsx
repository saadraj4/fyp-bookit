import React from 'react';
import Header from '../components/Header';

export default function AboutUs() {
  return (
    <>
    <Header/>
    <div className="background-image py-16">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 py-12 bg-gray-100 bg-opacity-40 font-semibold  text-center text-white rounded-lg shadow-lg">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Welcome to Bookit</h2>
        <p className="text-lg text-gray-800 mb-6">
          Your Journey Begins Here
        </p>
        <p className="text-lg text-gray-800 mb-6">
          Bookit is not just another travel agency; we are your gateway to unforgettable experiences. From exotic destinations to personalized itineraries, we are here to turn your travel dreams into reality.
        </p>
        <p className="text-lg text-gray-800 mb-6">
          Our dedicated team of travel experts is committed to providing you with exceptional service every step of the way. Whether you're planning a relaxing beach getaway, an adventurous trek through the mountains, or a romantic escape to a secluded paradise, we have the expertise and resources to make it happen.
        </p>
        <p className="text-lg text-gray-800 mb-6">
          Discover the world with Kainat Travels and embark on a journey that will leave you with memories to last a lifetime.
        </p>
        <div className="text-center">
          <a
            href="#contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition duration-300"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
    </>
  );
}