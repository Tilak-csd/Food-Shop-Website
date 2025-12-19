import React from "react";

export default function ChatBot_Messages({ scrollRef, messages }) {
  return (
    <div className="h-96 p-4 overflow-y-auto bg-gray-50 space-y-4">
      {messages.map((m, i) => (
        <div
          key={i}
          className={`flex items-end gap-2 ${
            m.role === "user" ? "justify-end" : "justify-start"
          }`}
        >
          {/* Bot Avatar */}
          {m.role === "bot" && (
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 text-lg shrink-0">
              🤖
            </div>
          )}

          {/* Message Bubble */}
          <div
            className={`max-w-[85%] p-3 rounded-2xl text-sm shadow-sm whitespace-pre-wrap leading-relaxed ${
              m.role === "user"
                ? "bg-indigo-600 text-white rounded-tr-none"
                : "bg-white text-gray-800 border border-gray-100 rounded-tl-none"
            }`}
          >
            {m.content}
          </div>
        </div>
      ))}
      <div ref={scrollRef} />
    </div>
  );
}
