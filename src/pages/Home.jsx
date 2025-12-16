import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import Destination from '../components/Destination'
import Kitchen from '../components/Kitchen'
import ChefsSection from '../components/CheifsSection'
import GetInTouch from '../components/GetInTouch'
import Footer from '../components/Footer'
import Menucards from '../components/Menucards'

export default function Home() {
  return (
    <>
      <Header>
        <Navbar />
        <HeroSection  />
      </Header>
      <Destination />
      <Menucards />
      <Kitchen />
      <ChefsSection />
      <GetInTouch />
      <Footer />
    </>
  )
}
