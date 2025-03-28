import React, { useEffect, useState } from 'react';
import { api } from '../services/api';

function GamePage() {
  const [gameState, setGameState] = useState(null);

  useEffect(() => {
    // O'yin holatini olish
    api.getGameState().then((data) => {
      setGameState(data);
    });
  }, []);

  return (
    <div className="game-container">
      <h1>Game Started</h1>
      {gameState ? (
        <>
          <p>Round: {gameState.round}</p>
          <ul>
            {gameState.players.map((player, index) => (
              <li key={index}>
                {player.name} - {player.role}
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default GamePage;
