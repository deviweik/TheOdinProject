import { useEffect } from 'react'
import PropTypes from 'prop-types'
import './Pong.css'

function Game({ gameTime, state, setState }) {

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

  var paddleOneY = null;
  var paddleTwoY = null;

  if (state.paddle1.y) {
    var paddleOneY = state.paddle1.y;
  }
  if (state.paddle2.y) {
    var paddleTwoY = state.paddle2.y;
  }

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

