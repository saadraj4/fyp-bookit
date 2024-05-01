import React from 'react'
import Header from "../components/Header";
import Footer from "../components/Footer";
import Download from "../components/Download";
import Features from "../components/Features";
import Tour_Details from "../components/Tour_Details";

export default function TourDetails() {
  return (
    <div>
    <div>
    <Header />
      <Tour_Details />
    <Download />
    <Features />
    <Footer />
    </div>
    </div>
  )
}
