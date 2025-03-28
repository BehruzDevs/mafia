import React from 'react';

function PlayerList({ players }) {
  return (
    <div className="player-list">
      <h2>Players</h2>
      <ul>
        {players.length === 0 ? (
          <p>No players yet.</p>
        ) : (
          players.map((player, index) => (
            <li key={index}>
              {index + 1}. {player.name}
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default PlayerList;
