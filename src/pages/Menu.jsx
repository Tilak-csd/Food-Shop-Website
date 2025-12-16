import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'

export default function Menu() {
    return (
        <>
            <Header>
                <Navbar />
                <HeroSection showbutton={false} />
            </Header>
        </>
    )
}
