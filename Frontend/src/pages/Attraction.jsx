import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Download from '../components/Download'
import Features from '../components/Features'
import Attractions from '../components/Attractions'
import AttractionBanner from '../components/AttractionBanner'

export default function Attraction() {
  return (
    <div>
    <Header />
    <AttractionBanner />
    <Attractions />
    <Download />
    <Features />
    <Footer />
    </div>
  )
}


