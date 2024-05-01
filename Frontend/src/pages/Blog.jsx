import React from 'react';
import Header from '../components/Header';
import Download from '../components/Download';
import Features from '../components/Features';
import Footer from '../components/Footer';
import BlogBanner from '../components/BlogBanner';
import BlogComponent from '../components/BlogComponent';

export default function Blog() {
  return (
    <div>
    <Header />
    <BlogBanner />
    <BlogComponent />
    <Download />
    <Features />
    <Footer />
    </div>
  )
}


