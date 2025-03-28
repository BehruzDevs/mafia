import { useEffect, useState } from 'react';
import io from 'socket.io-client';

// Socket.io ulanishi
const socket = io('http://localhost:5000');

export default function Lobby() {
  const [players, setPlayers] = useState([]);
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState([]);

  // O'yinchilar ro'yxatini olish
  useEffect(() => {
    fetch('http://localhost:5000/api/players')
      .then((res) => res.json())
      .then((data) => setPlayers(data));

    socket.on('receive_message', (msg) => {
      setChat((prevChat) => [...prevChat, msg]);
    });

    return () => socket.disconnect();
  }, []);

  // Xabar yuborish
  const sendMessage = () => {
    socket.emit('send_message', message);
    setMessage('');
  };

  return (
    <div>
      <h1>Lobby</h1>
      <ul>
        {players.map((player, index) => (
          <li key={index}>{player.name}</li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
      <div>
        <h2>Chat:</h2>
        {chat.map((msg, index) => (
          <p key={index}>{msg}</p>
        ))}
      </div>
    </div>
  );
}
