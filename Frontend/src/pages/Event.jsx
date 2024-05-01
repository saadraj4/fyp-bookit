import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Events from '../components/Events'
import Features from '../components/Features'
import Download from '../components/Download'
import EventBanner from '../components/EventBanner'

export default function Event() {
  return (
    <div>
    <Header />
    <EventBanner />
    <Events />
    <Features />
    <Download />
    <Footer />
    </div>
  )
}


