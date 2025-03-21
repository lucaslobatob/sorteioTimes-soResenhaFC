import React from 'react';
import './teamDisplay.css'; // Certifique-se de ter o arquivo CSS correto

function TeamDisplay({ teams }) {
  if (!teams || Object.keys(teams).length === 0) {
    return <p>Nenhum time disponível.</p>;
  }

  return (
    <div className="team-display">
      {teams.map((team, index) => (
        <div key={index} className="team">
          <h3>Time {index + 1}</h3>
          <ul>
            {team.map((player, playerIndex) => (
              <li key={playerIndex}>{player}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default TeamDisplay;
