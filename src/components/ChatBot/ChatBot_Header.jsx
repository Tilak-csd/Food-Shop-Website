import React from 'react'

export default function ChatBot_Header({setIsOpen}) {
    return (
        <div className="bg-amber-600 p-4 flex items-center justify-between shadow-md" >
            <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <h3 className="text-white font-medium">Support AI</h3>
            </div>
            <button
                onClick={() => setIsOpen(false)}
                className="text-white cursor-pointer hover:bg-amber-500 p-1 rounded-lg transition-colors"
            >
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>
    )
}
