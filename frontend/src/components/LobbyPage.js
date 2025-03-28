// src/components/LobbyPage.js
import React, { useState } from 'react';

function LobbyPage({ players, setPlayers, addPlayer, setPlayerName, setIsAdmin }) {
  const [name, setName] = useState('');
  const [isAdded, setIsAdded] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === 'admin') {
      setIsAdmin(true);
    }
    setPlayerName(name);
    addPlayer(name);
    setIsAdded(true);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Lobby</h1>
      {!isAdded ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Ismingizni kiriting"
            style={{ padding: '8px', fontSize: '16px' }}
          />
          <button
            type="submit"
            style={{
              padding: '8px 16px',
              fontSize: '16px',
              marginLeft: '8px',
              cursor: 'pointer',
            }}
          >
            Qo'shish
          </button>
        </form>
      ) : (
        <div>
          <h2>O'yinchilar ro'yxati:</h2>
          <ol style={{ listStyleType: 'decimal', paddingLeft: '0', display: 'inline-block', textAlign: 'left' }}>
            {players.map((player, index) => (
              <li key={index} style={{ padding: '4px 0' }}>
                {index + 1}. {player.name}
              </li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
}

export default LobbyPage;
