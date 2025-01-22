import React, { useState } from 'react';
import Intro from './components/Intro';
import Game from './components/Game';
import Results from './components/Results';
import Score from './components/Score';
import Outro from './components/Outro';
import './styles/main.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    const [wins, setWins] = useState(0);
    const [losses, setLosses] = useState(0);
    const [result, setResult] = useState('');
    const [inGame, setInGame] = useState(false);
    const [gameOver, setGameOver] = useState(false);

    const playGame = (playerChoice) => {
        const computerChoice = getComputerChoice();
        if (playerChoice === computerChoice) {
            // Determining a tie, but not incrementing ties in this simplified logic
            setResult('It\'s a Tie!');
        } else if (
            (playerChoice === "rock" && computerChoice === "scissors") ||
            (playerChoice === "paper" && computerChoice === "rock") ||
            (playerChoice === "scissors" && computerChoice === "paper")
        ) {
            setWins((prevWins) => {
                const newWins = prevWins + 1;
                if (newWins === 5) {
                    setGameOver(true);
                }
                return newWins;
            });
            setResult('You Won!');
        } else {
            setLosses((prevLosses) => {
                const newLosses = prevLosses + 1;
                if (newLosses === 5) {
                    setGameOver(true);
                }
                return newLosses;
            });
            setResult('You Lost.');
        }
    };

    const resetGame = () => {
        setWins(0);
        setLosses(0);
        setResult('');
        setInGame(false);
        setGameOver(false);
    };

    return (
        <div>
            {!inGame ? (
                <Intro startGame={() => setInGame(true)} />
            ) : gameOver ? (
                <Outro winner={wins === 5 ? 'Humans' : 'Aliens'} playAgain={resetGame} />
            ) : (
                <div>
                    <Game playGame={playGame} />
                    <Results result={result} />
                    <Score wins={wins} losses={losses} />
                </div>
            )}
        </div>
    );
}

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

export default App;
