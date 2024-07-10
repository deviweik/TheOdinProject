import { useState, useEffect } from 'react'
import Game from './Game.jsx'
import Scoreboard from './Scoreboard.jsx'
import './Pong.css'

function Pong() {

  const boardWidth = 1000;
  const boardHeight = 550;

  const initialState = {
    ball: { x: boardWidth/2, y: boardHeight/2, dx: 2, dy: 0 },
    paddle1: { y: boardHeight/2 },
    paddle2: { y: boardHeight/2 },
    score: { player1: 0, player2: 0 },
  };

  const [state, setState] = useState(initialState);
  const [gameTime, setGameTime] = useState(0); // Game time in seconds

  useEffect(() => {
    const intervalId = setInterval(() => {
      setGameTime((prevTime) => prevTime + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []); // runs once when the component mounts

  const timerStart = 60 * 5;
  const currentTime = timerStart - gameTime;

  return (
    <>
      <div id='outerBorder'>
        <div id='innerBorder'>
          <div id='scoreboardContainer'>
            <Scoreboard currentTime={currentTime} state={state} setState={setState}/>
          </div>
          <div id='gameContainer'>
            <Game gameTime={gameTime} state={state} setState={setState}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Pong
