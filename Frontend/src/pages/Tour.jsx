import React from 'react';
import Header from '../components/Header';
import TourBanner from '../components/TourBanner';
import Footer from '../components/Footer';
import Download from '../components/Download';
import Features from '../components/Features';
import Tours from '../components/Tours';

export default function Tour() {
  return (
    <div>
    <Header />
    <TourBanner />
    <Tours />
    <Download />
    <Features />
    <Footer />
    </div>
  )
}


