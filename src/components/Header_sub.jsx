import React from 'react'

export default function Header_sub({ children }) {
    return (
        <div className='relative h-[50vh] bg-cover bg-center bg-no-repeat' style={{ backgroundImage: "url('./header.avif')" }}>
            <div className="absolute inset-0 bg-black/30"></div>
            <div className="relative z-10 flex flex-col h-[50vh]">
                {children}
            </div>
        </div>
    )
}
