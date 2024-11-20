import React from 'react';

function PlayerList({ players }) {
  return (
    <div style={{ marginTop: '20px' }}>
      <h2>Jogadores:</h2>
      <ul>
        {players.map((player, index) => (
          <ol key={index}>{player}</ol>
        ))}
      </ul>
    </div>
  );
}

export default PlayerList;
