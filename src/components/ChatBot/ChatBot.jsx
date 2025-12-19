import { useState, useRef, useEffect } from "react";
import ChatBot_Header from './ChatBot_Header'
import ChatBot_Messages from "./ChatBot_Messages";
import ChatBot_Inputs from "./ChatBot_Inputs";
import ChatBot_Buttons from "./ChatBot_Buttons";
import { qa } from '../../data/qa'

export default function Chatbot() {
    const [isOpen, setIsOpen] = useState(false); // Toggle state
    const [messages, setMessages] = useState([
        { role: "bot", content: "Welcome to Shrestha Cafe! How can I assist you today?" }
    ]);
    const [input, setInput] = useState("");

    // function to specify the keywords in the user message.
    function getAnswer(message) {
        const text = message.toLowerCase();

        for (let item of qa) {
            if (item.keywords.some(keyword => text.includes(keyword))) {
                return item.answer;
            }
        }

        return "Sorry 😔 I can help with our menu, reservations, opening hours, or contact details.";
    }


    // when message entered and sent the message...
    const sendMessage = () => {
        if (!input.trim()) return;

        const messageText = input

        const userMsg = { role: "user", content: messageText };
        setMessages((prev) => [...prev,
            userMsg,
        { role: "bot", content: "Typing...." }
        ]);
        setInput("");

        setTimeout(() => {
            const reply = getAnswer(messageText);

            const botReply = {
                role: "bot",
                content: reply,
            };


            setMessages((prev) => {
                const updated = [...prev]
                updated.pop()
                return [
                    ...updated, botReply
                ]
            } );
        }, 800);
    };
    const scrollRef = useRef(null);

    useEffect(() => {
        if (isOpen) {
            scrollRef.current?.scrollIntoView({ behavior: "smooth" });
        }
    }, [messages, isOpen]);



    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
            {/* Chat Window */}
            {isOpen && (
                <div className="mb-4 w-80 sm:w-96 flex flex-col bg-white border border-gray-200 shadow-2xl rounded-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
                    {/* Headerr */}
                    <ChatBot_Header setIsOpen={setIsOpen} />

                    {/* Message Area */}
                    <ChatBot_Messages scrollRef={scrollRef} messages={messages} />

                    {/* Input Area */}
                    <ChatBot_Inputs sendMessage={sendMessage} setInput={setInput} input={input} />

                </div>
            )}

            {/* Floating Toggle Button */}
            <ChatBot_Buttons setIsOpen={setIsOpen} isOpen={isOpen} />
        </div>
    );
}