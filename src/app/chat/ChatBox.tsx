"use client";
import React, { useEffect, useRef } from 'react'

function ChatBox() {
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, []);

    return (
        <div ref={scrollRef} className="w-full my-10 px-5 custom-scrollbar" style={{ height: '500px', overflowY: 'scroll' }}>
            {/* Mock array of chat messages for demonstration */}
            {[
                { id: 1, sender: "User", message: "Hello!" },
                { id: 2, sender: "Support", message: "Hi, how can we help you?" },
                { id: 2, sender: "User", message: "Hi, how can we help you?" },
                { id: 2, sender: "Support", message: "Hi, how can we help you?" },
                { id: 2, sender: "User", message: "Hi, how can we help you?" },
                { id: 2, sender: "Support", message: "Hi, how can we help you?" },
                { id: 2, sender: "User", message: "Hi, how can we help you?" },
                { id: 2, sender: "Support", message: "Hi, how can we help you?" },
                { id: 2, sender: "User", message: "Hi, how can we help you?" },
                { id: 2, sender: "Support", message: "Hi, how can we help you?" },
                { id: 2, sender: "User", message: "Hi, how can we help you?" },
                { id: 2, sender: "Support", message: "Hi, how can we help you?" },
                { id: 2, sender: "User", message: "Hi, how can we help you?" },
                // Add more chat messages here
            ].map((chat) => (
                <div key={chat.id} className={`chat ${chat.sender === "Support" ? "chat-start" : "chat-end"}`}>
                    <div className={`chat-bubble ${chat.sender === "Support" ? "chat-bubble-info" : "chat-bubble-accent"}`}>{chat.message}</div>
                </div>
            ))}
        </div>
    )
}

export default ChatBox