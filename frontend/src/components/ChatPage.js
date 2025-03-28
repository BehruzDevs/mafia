import React, { useState, useEffect } from 'react';
import { api } from '../services/api';

function ChatPage() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    // So'nggi xabarlarni olish
    api.getMessages().then((data) => {
      setMessages(data);
    });
  }, []);

  const sendMessage = () => {
    if (newMessage.trim()) {
      api.sendMessage(newMessage).then((message) => {
        setMessages((prev) => [...prev, message]);
        setNewMessage('');
      });
    }
  };

  return (
    <div className="chat-container">
      <h1>Game Chat</h1>
      <div className="messages">
        {messages.map((msg, index) => (
          <div key={index} className="message">
            <p>{msg}</p>
          </div>
        ))}
      </div>
      <input
        type="text"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        placeholder="Type a message..."
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default ChatPage;
