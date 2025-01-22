import React from 'react';

const Outro = ({ winner, playAgain }) => {
  return (
    <div className="outro">
      <h1>{winner} Win!</h1>
      <p>The battle is over. {winner} have emerged victorious!</p>
      <button className="btn btn-primary" onClick={playAgain}>Play Again</button>
    </div>
  );
};

export default Outro;
