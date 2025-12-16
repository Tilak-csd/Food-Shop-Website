import React from 'react'

export default function Header({ children }) {
    return (
        <div className='relative min-h-screen bg-cover bg-center bg-no-repeat' style={{ backgroundImage: "url('./header.avif')" }}>
            <div className="absolute inset-0 bg-black/30"></div>
            <div className="relative z-10 flex flex-col min-h-screen">
                {children}
            </div>

        </div>
    )
}
