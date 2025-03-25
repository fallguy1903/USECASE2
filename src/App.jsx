import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Title from './Title'

function App() {
  const [score1, setScore1] = useState(0)
  const [score2, setScore2] = useState(0)
  const [goal,setGoal] = useState(0);
  const [winner,setWinner] = useState("");

  function handleClick1(){
    setScore1(score1+1);
    if(score1+1==goal)
    {
      setWinner("Player 1");

    }
  }
  function handleClick2(){
    setScore2(score2+1);
      if(score2+1==goal)
      {
        setWinner("Player 2");
      }
  }
  function reset(){
    setScore1(0);
    setScore2(0);
    setWinner("");
  }
  return (
    <>
      <Title name="Score-Keeper"/>
      <p>{score1} to {score2}</p>
      {!winner && <p>Use Buttons Below to Keep Score</p>}
      {winner && <h1 style={{color:'green'}}>{winner} Won</h1>}
      <label>Select the score:</label>
      <select value={goal} onChange={(e) => setGoal(e.target.value)}>
        <option value="">Choose...</option>
        <option value="3">3</option>
        <option value="5">5</option>
        <option value="10">10</option>
      </select>

      <button onClick={handleClick1} disabled={winner||!goal}>+1 player1</button>
      <button onClick={handleClick2} disabled={winner||!goal}>+1 player2</button>
      <button onClick={reset}>Reset</button>
    </>
  )
}

export default App
