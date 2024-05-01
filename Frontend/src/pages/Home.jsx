import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import BusRoutes from '../components/BusRoutes';
import Download from '../components/Download';
import Footer from '../components/Footer';
import Features from '../components/Features';
import BookSystem from '../components/BookSystem';
import Partners from '../components/Partners';


export default function Home() {
  return (
    <div>
    <Header/>
    <Banner />
    <BookSystem />
    <BusRoutes />
    <Download />
    <Partners />
    <Features />
    <Footer />
    </div>
  )
}


