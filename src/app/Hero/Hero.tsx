import React from 'react'

export default function Hero() {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="flex flex-col items-center">
                <h1 className="text-4xl text-white font-bold mainText">Welcome to Start Up Research AI</h1>
                <h3 className="text-1xl text-white font-normal">Customizable, helps you to do a deep research before getting started</h3>
                <h3 className="text-1xl text-white font-normal">on the start up eco-system!</h3>
                <button className="px-4 py-2 text-blue-500 border border-blue-500 rounded-full inline-flex items-center bg-transparent getStartedBtn">
                    Get Started
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="#3B82F6">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4l8 8-8 8" />
                    </svg>
                </button>
            </div>
        </div>
    );
}