// import React from 'react'
// //import {ChatMessage as ChatMessageType} from '../../models/ChatMessage';

// interface ChatMessage {
//     id: string;
//     sender: string;
//     message: string;
// }

// export default function ChatComponent({ chatHistory, message, setMessage, sendMessage, addChatHistorySender, loading, scrollRef }) {
//     return (
//         <div className="flex flex-col items-center justify-between h-screenMod mx-10">
//             <h1 className="text-3xl text-white font-bold text-left mainText my-5">Chat with us</h1>
//             <div ref={scrollRef} className="w-full my-10 px-5 custom-scrollbar" style={{ height: '500px', overflowY: 'scroll' }}>
//                 {chatHistory.map((chat: any) => (
//                     <div key={chat.id} className={`chat ${chat.sender === "Support" ? "chat-start" : "chat-end"}`}>
//                         <div className={`chat-bubble ${chat.sender === "Support" ? "chat-bubble-info" : "chat-bubble-accent"}`}>{chat.message}</div>
//                     </div>
//                 ))}
//             </div>
//             {loading && <div className="text-white py-2">Loading...</div>}
//             <div className="flex flex-row items-center w-full">
//                 <input
//                     type="text"
//                     placeholder="Type here"
//                     className="input input-bordered w-full text-white"
//                     value={message}
//                     onChange={(e) => {
//                         setMessage(e.target.value);
//                     }}
//                     onKeyDown={(e) => {
//                         if (e.key === 'Enter') {
//                             sendMessage();
//                             addChatHistorySender();
//                             setMessage('');
//                         }
//                     }}
//                 />
//                 <button className="btn btn-primary mx-2" onClick={() => {
//                     sendMessage();
//                     addChatHistorySender();
//                     setMessage('');
//                 }}>Send</button>
//             </div>
//         </div>
//     )
// }
