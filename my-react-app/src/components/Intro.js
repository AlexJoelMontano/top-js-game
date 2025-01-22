import React from 'react';

const Intro = ({ startGame }) => {
    return (
        <div className='intro'>
        <h1>Save Earth from Aliens!</h1>
        <p>The world is under attack and only you can save it...</p>
        <button className="btn btn-primary" onClick={startGame}>Start Game</button>
        </div>
    );
};

export default Intro;