import React from 'react'
import Header from '../components/Header';
import Download from '../components/Download';
import Footer from '../components/Footer';
import Features from '../components/Features';
import Partners from '../components/Partners';
import Booking from '../components/Booking'
export default function FindABus() {

  return (
    <div>
    <Header/>
    <Booking />
    <Download />
    <Partners />
    <Features />
    <Footer />
    </div>
  )
}


