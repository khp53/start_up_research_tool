import React, { useState } from 'react'
import Footer from '../footer/footer';
import Navbar from '../navbar/Navbar';
import ChatBox from './ChatBox';

export default function Chat() {
    return (
        <main>
            <Navbar />
            <ChatBox />
            <Footer />
        </main>
    );
}
