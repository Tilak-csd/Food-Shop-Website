import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import Menu_cards from '../components/Menu_cards'
import Footer from '../components/Footer'
import Header_sub from '../components/Header_sub'

export default function Menu() {
    return (
        <>
            <Header_sub>
                <Navbar />
                <HeroSection showbutton={false} heading={'Discover Our Café Menu'} text={'Explore our carefully curated selection of coffees, snacks, and sweet treats'} />
            </Header_sub>
            <Menu_cards />
            <Footer />
            
        </>
    )
}
