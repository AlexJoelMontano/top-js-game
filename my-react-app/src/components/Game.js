import React from 'react';

const Game = ({ playGame }) => {
  return (
    <div className="game">
      <h2>Choose your weapon!</h2>
      <button className="btn btn-secondary" onClick={() => playGame('rock')}>Rock</button>
      <button className="btn btn-secondary" onClick={() => playGame('paper')}>Paper</button>
      <button className="btn btn-secondary" onClick={() => playGame('scissors')}>Scissors</button>
    </div>
  );
};

export default Game;
