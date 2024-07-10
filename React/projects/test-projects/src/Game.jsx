import { useEffect } from 'react'
import PropTypes from 'prop-types'
import './Pong.css'

function Game({ gameTime, state, setState }) {

  const paddleHeight = 100;

  useEffect(() => {
    const interval = setInterval(() => {
      setState((state) => {
        const newState = { ...state };

        newState.ball.x += newState.ball.dx;
        newState.ball.y += newState.ball.dy;

        return newState;
      })
    }, 1000 / 60);

    return () => clearInterval(interval);
  }, [setState])

  var paddleOneY = state.paddle1.y - paddleHeight/2;
  var paddleTwoY = state.paddle2.y - paddleHeight/2;

  return (
    <>
      <div 
        id='playerOnePaddle' 
        className='paddle' 
        style={{
          top: `${paddleOneY}px`,
        }}
      ></div>
      <div 
        id='ball'
        style={{

        }}
      ></div>
      <div 
        id='playerTwoPaddle' 
        className='paddle' 
        style={{
          top: `${paddleTwoY}px`,
        }}
      ></div>
    </>
  )
}

Game.propTypes = {
  gameTime: PropTypes.number.isRequired,
  state: PropTypes.object.isRequired,
  setState: PropTypes.func.isRequired,
};

export default Game

