



// import React, { useState } from 'react';

// // import { connectToWebSocket, sendMessage } from "../../api/WebSocketService"; // Import the WebSocket service
// // import io from 'socket.io-client';


// // const SERVER_URL = 'http://localhost:8080'; // Adjust the WebSocket server URL

// function Chat() {
//   // const [messages, setMessages] = useState([]);
//   // const [messageInput, setMessageInput] = useState('');
//   // const socket = io(SERVER_URL);
//   const [stateVariable, setStateVariable] = useState(initialValue);

//   useEffect(() => {
//     // Connect to the WebSocket server when the component mounts
//     socket.on('connect', () => {
//       console.log('Connected to WebSocket server');
//     });

//     // Listen for incoming messages
//     socket.on('chatMessage', (message) => {
//       console.log('Received message:', message);
//       // Handle incoming messages by updating the state
//       setMessages((prevMessages) => [...prevMessages, message]);
//     });

//     // Cleanup the WebSocket connection when the component unmounts
//     return () => {
//       socket.disconnect();
//       console.log('Disconnected from WebSocket server');
//     };
//   }, []);

//   const handleSendMessage = () => {
//     if (messageInput.trim() !== '') {
//       // Send a message to the WebSocket server
//       socket.emit('chatMessage', messageInput);
//       setMessageInput('');
//     }
//   };

//   return (
//     <div>
//       <h1>Chat App</h1>
//       <div>
//         <div>
//           {messages.map((message, index) => (
//             <div key={index}>{message}</div>
//           ))}
//         </div>
//         <input
//           type="text"
//           placeholder="Enter your message"
//           value={messageInput}
//           onChange={(e) => setMessageInput(e.target.value)}
//         />
//         <button onClick={handleSendMessage}>Send</button>
//       </div>
//     </div>
//   );
// }

// export default Chat;


import React, { useState } from 'react';
import { Textarea, Button, IconButton } from "@material-tailwind/react";
import { LinkIcon } from "@heroicons/react/24/outline";

function Chat() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim() === '') return;

    const newMessages = [{ text: newMessage, sender: 'user' }, ...messages];
    setMessages(newMessages);
    setNewMessage('');
  };

  return (
    // <div className="flex flex-col  m-5 gap-2 p-5 w-[420px] h-fit bg-white rounded-lg shadow-lg z-[1000]">
    //   <div className=' p-0 m-0 h-[400px] flex flex-col border border-[#72C075] rounded-lg'>
    //     <div className="chat-messages bg-white flex flex-col overflow-y-auto relative justify-content-end rounded-[20px] " style={{ scrollbarWidth: 'none' }}>
    //       <div className='flex flex-col-reverse overflow-y-auto '
    //         style={{ minHeight: '400px', scrollbarWidth: 'none' }}
    //       >
    //         {messages.map((message, index) => (
    //           <div key={index} className={`message ${message.sender === 'user' ? 'self-end' : 'self-start'
    //             } py-2 px-4 rounded-full m-2 bg-[#377A85] bg-opacity-80 text-white`}>
    //             {message.text}
    //           </div>
    //         ))}
    //       </div>
    //     </div>
    //   </div>
    //   <div className="chat-input flex justify-content-end bottom-[90%]">
    //     <div className="flex w-full flex-row w-[400px] items-center gap-2 rounded-[99px] border border-gray-900/10 bg-gray-900/5 p-2">
    //       <div className="flex">
    //         <IconButton variant="text" className="rounded-full" color='#22577A'>
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             fill="none"
    //             viewBox="0 0 24 24"
    //             strokeWidth={2}
    //             stroke="#22577A"
    //             className="h-5 w-5"
    //           >
    //             <path
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //               d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
    //             />
    //           </svg>
    //         </IconButton>
    //         <IconButton variant="text" className="rounded-full">
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             fill="none"
    //             viewBox="0 0 24 24"
    //             stroke="#22577A"
    //             strokeWidth={2}
    //             className="h-5 w-5"
    //           >
    //             <path
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //               d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
    //             />
    //           </svg>
    //         </IconButton>
    //       </div>
    //       <Textarea
    //         rows={1}
    //         resize={true}
    //         placeholder="Your Message"
    //         className="min-h-full !border-0 focus:border-transparent"
    //         containerProps={{
    //           className: "grid h-full",
    //         }}
    //         labelProps={{
    //           className: "before:content-none after:content-none",
    //         }}
    //         value={newMessage}
    //         onChange={(e) => setNewMessage(e.target.value)}
    //       />
    //       <div>
    //         <IconButton variant="text" className="rounded-full" onClick={handleSendMessage}>
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             fill="none"
    //             viewBox="0 0 24 24"
    //             stroke="#22577A"
    //             strokeWidth={2}
    //             className="h-5 w-5"
    //           >
    //             <path
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //               d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
    //             />
    //           </svg>

    //         </IconButton>
    //       </div>
    //     </div>

    //   </div>
    // </div>
    <div>
      <h1>Chat App</h1>
      <div>
        <div>
          {messages.map((message, index) => (
            <div key={index}>{message}</div>
          ))}
        </div>
        <input
          type="text"
          placeholder="Enter your message"
          value=""

        />
        <button >Send</button>
      </div>
    </div>
  );
}

export default Chat;
