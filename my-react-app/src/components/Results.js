import React from 'react';

const Results = ({ result }) => {
    return (
        <div id="results" className="resultContainer">
            {result === 'win' && <div id="winner" className="resultsData">You Won!</div>}
            {result === 'lose' && <div id="loser" className="resultsData">You Lost.</div>}
            {result === 'tie' && <div id="tieGame" className="resultsData">Well...It's a tie!</div>}
        </div>
    );
};

export default Results;