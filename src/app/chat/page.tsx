import React from 'react'
import Footer from '../footer/footer';
import Navbar from '../navbar/Navbar';
import ChatBox from './ChatBox';

export default function Chat() {
    return (
        <main>
            <Navbar />
            <div className="flex flex-col items-center justify-between h-screenMod mx-10">
                <h1 className="text-3xl text-white font-bold text-left mainText my-5">Chat with us</h1>
                <ChatBox />
                <div className="flex flex-row items-center w-full">
                    <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                    <button className="btn btn-primary mx-2">Send</button>
                </div>

            </div>
            <Footer />
        </main>
    );
}
