import React from 'react'
import Header_sub from '../components/Header_sub'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import Contact from '../components/Contact'

export default function Location() {
    return (
        <>
            <Header_sub>
                <Navbar />
                <HeroSection heading={"Visit Us or Call Us Today"} showbutton={false} />
            </Header_sub>
            <Contact />
        </>
    )
}
