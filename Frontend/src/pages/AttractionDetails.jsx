import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Download from '../components/Download';
import Features from '../components/Features';
import Attraction_Details from '../components/Attraction_Details';

export default function AttractionDetails() {
  return (
    <div>
    <Header />
    <Attraction_Details />
    <Download />
    <Features />
    <Footer />
    </div>
  )
}
