import React, { useState } from 'react';
import InputForm from './components/InputForm/InputForm.js';
import PlayerList from './components/PlayerList/PlayerList.js';
import TeamDisplay from './components/TeamDisplay/TeamDisplay.js';
import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';
import './App.css';

function App() {
  const [players, setPlayers] = useState([]);
  const [teams, setTeams] = useState([]);

  // Adicionar jogador
  function addPlayer(name) {
    if (name.trim() !== '') setPlayers([...players, name]);
  }

  // Função genérica para sortear times
  function sortTeams(numTeams) {
    if (players.length < numTeams) {
      alert('Jogadores insuficientes para formar os times!');
      return;
    }

    const shuffled = [...players].sort(() => Math.random() - 0.5); // Embaralha jogadores
    const tempTeams = Array.from({ length: numTeams }, () => []); // Cria arrays vazios para os times

    shuffled.forEach((player, index) => {
      tempTeams[index % numTeams].push(player); // Distribui os jogadores entre os times
    });

    setTeams(tempTeams);
  }

  // Limpar todos os dados
  function clearAllData() {
    setPlayers([]);
    setTeams([]);
  }

  return (
    <div className="container-main">
      <Header />
      <span className="container-span">
        <p>
          O Sorteador de Times é um aplicativo prático e intuitivo, que permite organizar partidas de forma rápida. 
          Com ele, você pode adicionar jogadores, visualizar a lista completa e sortear equipes aleatoriamente, 
          garantindo equilíbrio e dinamismo nos jogos. Ideal para amigos e grupos que querem focar no futebol ou qualquer esporte
          sem perder tempo com a formação dos times!
        </p>
        <InputForm className="inputPlayer" onAddPlayer={addPlayer} />
        <PlayerList players={players} />
        <div style={{ marginTop: '10px' }}>
          <button onClick={() => sortTeams(2)} style={{ marginRight: '10px' }}>
            Sortear 2 Times
          </button>
          <button onClick={() => sortTeams(3)}>Sortear 3 Times</button>
          <button onClick={clearAllData} style={{ marginLeft: '10px' }}>
            Excluir Todos os Dados
          </button>
        </div>
        <TeamDisplay className='team-display' teams={teams} />
      </span>
      <div className="container-footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;