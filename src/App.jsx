import { useState } from 'react';
import Title from './Title';
import GoalSelector from './GoalSelector';
import ScoreButtons from './ScoreButton';
import ScoreDisplay from './ScoreDisplay';
import './App.css'

function App() {
    const [score1, setScore1] = useState(0);
    const [score2, setScore2] = useState(0);
    const [goal, setGoal] = useState(0);
    const [winner, setWinner] = useState("");

    function handleClick1() {
        setScore1(prev => {
            const newScore = prev + 1;
            if (newScore === goal) setWinner("Player 1");
            return newScore;
        });
    }

    function handleClick2() {
        setScore2(prev => {
            const newScore = prev + 1;
            if (newScore === goal) setWinner("Player 2");
            return newScore;
        });
    }

    function reset() {
        setScore1(0);
        setScore2(0);
        setWinner("");
    }

    return (
        <>
            <Title name="Score-Keeper" />
            <ScoreDisplay score1={score1} score2={score2} winner={winner} />
            <GoalSelector goal={goal} setGoal={setGoal} />
            <ScoreButtons handleClick1={handleClick1} handleClick2={handleClick2} reset={reset} winner={winner} goal={goal} />
        </>
    );
}

export default App;
