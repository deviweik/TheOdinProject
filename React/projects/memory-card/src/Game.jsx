import { useState } from 'react'
import CardArray from './CardArray.jsx'
import CardCounter from './CardCounter.jsx'

function Game({ prevPage, highScore, setHighScore}) {
  const [score, setScore] = useState(0);

  if (score > highScore) {
    setHighScore(score);
  }

  return (
    <div id='gameContainer' className='flex'>
      <div id='scoreboard'>
        <div className='top flex'>
          <h2 id='sbHighScoreLabel'>High Score:</h2>
          <h2 id='sbHighScore'>{score}</h2>
        </div>
        <div className='bottom flex'>
          <h1 id='sbScoreLabel'>Score: </h1>
          <h1 id='sbScore'>{score}</h1>
        </div>
      </div>
      <div id='gameboard'>
        <CardArray score={score} setScore={setScore}/>
        <CardCounter/>
      </div>
      <button id='backButton' onClick={prevPage}>Back to Menu</button>
    </div>
  )
}

export default Game