import React, { useState, useEffect } from 'react';

function Lobby() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/players')
      .then((response) => response.json())
      .then((data) => setPlayers(data))
      .catch((error) => console.log('Xatolik:', error));
  }, []);

  return (
    <div>
      <h1>Lobby</h1>
      <ul>
        {players.map((player, index) => (
          <li key={index}>{player.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Lobby;
