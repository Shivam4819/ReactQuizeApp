import React from "react"

const Result=({score, playagain})=>(
    <div className="score-board">
        <div className="score">You score {score}/5 correct answer</div>
        <button className="playBtn" onClick={playagain}>Play Again</button>

    </div>
)

export default Result;
