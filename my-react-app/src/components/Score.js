import React from 'react';

const Score = ({ wins, ties, losses }) => {
    return (
        <form className="score">
            <label className="scoreLabel" htmlFor="win"><b>Wins:</b></label>
            <div id="win">
                {wins}
            </div>
            <label className="scoreLabel" htmlFor="tie"><b>Ties:</b></label>
            <div id="tie">
                {ties}
            </div>
            <label className="scoreLabel" htmlFor="lose"><b>Loses:</b></label>
            <div id="lose">
                {losses}
            </div>
        </form>
    );
};

export default Score;