import React from 'react'
import Footer from '../footer/footer';
import Navbar from '../navbar/Navbar';

export default function Chat() {
    return (
        <main>
            <Navbar />
            <div className="flex flex-col items-center justify-between h-screenMod mx-10">
                <h1 className="text-3xl text-white font-bold text-left mainText my-5">Chat with us</h1>

                <div className="w-full my-10 px-5 custom-scrollbar" style={{ height: '500px', overflowY: 'scroll' }}>
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
                <div className="flex flex-row items-center w-full">
                    <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                    <button className="btn btn-primary mx-2">Send</button>
                </div>

            </div>
            <Footer />
        </main>
    );
}
