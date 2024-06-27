"use client";
import React, { useEffect, useRef, useState } from 'react'

function ChatBox() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [chatHistory, setChatHistory] = useState<{ id: number; sender: string; message: string; }[]>([]);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [chatHistory]);


    const sendMessage = async () => {
        setLoading(true);
        const endpoint = process.env.NEXT_PUBLIC_API_ENDPOINT || '';
        const token = process.env.NEXT_PUBLIC_COHERA_API_TOKEN || '';
        const data = {
            "message": message,
            "chat_history": [],
            "temperature": 0.9,
            "model": "c4ai-aya-23",
            "stream": true,
            "connectors": [],
            "prompt_truncation": "OFF"
        };

        try {
            const response = await fetch(endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify(data),
            });

            if (!response.body) throw new Error("No response body");

            const reader = response.body.getReader();
            let { value: chunk, done: readerDone } = await reader.read();
            chunk = chunk ? chunk : new Uint8Array();

            let decoder = new TextDecoder();
            let jsonStr = '';

            while (!readerDone) {
                let segment = decoder.decode(chunk, { stream: true });
                jsonStr += segment;

                let lines = jsonStr.split('\n');
                if (lines.length > 1) {
                    for (let i = 0; i < lines.length - 1; i++) {
                        try {
                            let jsonObj = JSON.parse(lines[i]);
                            console.log('Parsed JSON object:', jsonObj['text']);
                            addChatHistoryReceiver(jsonObj['response']['text']);
                        } catch (e) {
                            console.error('Failed to parse JSON object:', lines[i], e);
                        }
                    }
                    jsonStr = lines[lines.length - 1];
                }

                ({ value: chunk, done: readerDone } = await reader.read());
                chunk = chunk ? chunk : new Uint8Array();
            }

            if (jsonStr.trim()) {
                try {
                    let jsonObj = JSON.parse(jsonStr);
                    console.log('Parsed JSON object 2:', jsonObj);
                    addChatHistoryReceiver(jsonObj['response']['text']);
                } catch (e) {
                    console.error('Failed to parse JSON object:', jsonStr, e);
                }
            }
        } catch (error) {
            console.error('Failed to send message:', error);
        } finally {
            setLoading(false);
        }
    };

    const addChatHistorySender = () => {
        setChatHistory(chatHistory => [...chatHistory, { id: chatHistory.length + 1, sender: "User", message: message, }]);
    }

    const addChatHistoryReceiver = (responseMsg: string) => {
        setChatHistory(chatHistory => [...chatHistory, { id: chatHistory.length + 1, sender: "Support", message: responseMsg, }]);
    }

    return (
        <div className="flex flex-col items-center justify-between h-screenMod mx-10">
            <h1 className="text-3xl text-white font-bold text-left mainText my-5">Chat with us</h1>
            <div ref={scrollRef} className="w-full my-10 px-5 custom-scrollbar" style={{ height: '500px', overflowY: 'scroll' }}>
                {chatHistory.map((chat) => (
                    <div key={chat.id} className={`chat ${chat.sender === "Support" ? "chat-start" : "chat-end"}`}>
                        <div className={`chat-bubble ${chat.sender === "Support" ? "chat-bubble-info" : "chat-bubble-accent"}`}>{chat.message}</div>
                    </div>
                ))}
            </div>
            {loading && <div className="text-white py-2">Loading...</div>}
            <div className="flex flex-row items-center w-full">
                <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered w-full text-white"
                    value={message}
                    onChange={(e) => {
                        setMessage(e.target.value);
                    }}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            sendMessage();
                            addChatHistorySender();
                            setMessage('');
                        }
                    }}
                />
                <button className="btn btn-primary mx-2" onClick={() => {
                    sendMessage();
                    addChatHistorySender();
                    setMessage('');
                }}>Send</button>
            </div>
        </div>
    )
}

export default ChatBox