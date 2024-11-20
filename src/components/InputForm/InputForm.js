import React, { useState } from 'react';

function InputForm({ onAddPlayer }) {
  const [input, setInput] = useState('');

  return (
    <div>
    <h3>Adicionar jogadores que estão confirmados na lista</h3>
      <input
        type="text"
        placeholder="Nome do jogador"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        style={{
          marginLeft: "18px",
        }}
        onClick={() => {
          if (input.trim()) {
            onAddPlayer(input);
            setInput('');
          }
        }}
      >
        Adicionar Jogador
      </button>
    </div>
  );
}

export default InputForm;
