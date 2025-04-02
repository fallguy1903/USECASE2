import React, { Component } from "react";
import "./ScoreDisplay.css";

class ScoreDisplay extends Component {
    render() {
        const { score1, score2, winner } = this.props;

        return (
            <>
                <p>{score1} to {score2}</p>
                {!winner && <p>Use Buttons Below to Keep Score</p>}
                {winner && <h1 style={{ color: "green" }}>{winner} Won</h1>}
            </>
        );
    }
}

export default ScoreDisplay;
