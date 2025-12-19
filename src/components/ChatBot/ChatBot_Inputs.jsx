import React from 'react'

export default function ChatBot_Inputs({input, setInput, sendMessage}) {
    return (
        <div className="p-4 bg-white border-t border-gray-100 flex gap-2">
            <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                className="flex-1 bg-gray-100 p-2.5 px-4 rounded-full outline-none focus:ring-2 focus:ring-amber-600 text-sm transition-all"
                placeholder="Write a message..."
            />
            <button
                onClick={sendMessage}
                className="bg-amber-600 cursor-pointer hover:bg-amber-700 text-white p-2.5 rounded-full shadow-lg transition-transform active:scale-95"
            >
                <svg fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                </svg>
            </button>
        </div>
    )
}
