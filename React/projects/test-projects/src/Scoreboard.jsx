import PropTypes from 'prop-types'
import './Pong.css'

function Scoreboard({ currentTime, state, setState }) {

  return (
    <>
      <p id='playerOneScore' className='score'>{state.score.player1}</p>
      <p id='timer'>{secondsToMinutes(currentTime)}</p>
      <p id='playerTwoScore' className='score'>{state.score.player2}</p>
    </>
  ) 
}

function secondsToMinutes(timeInSeconds) {
  const minutes = Math.floor(timeInSeconds/60);
  var seconds = Math.floor(timeInSeconds % 60);
  seconds = seconds.toString();
  if (seconds.length === 1) {
    seconds = '0' + seconds;
  }
  const timeInMinutes = minutes.toString() + ':' + seconds;
  return timeInMinutes;
}

Scoreboard.propTypes = {
  currentTime: PropTypes.number.isRequired,
  state: PropTypes.object.isRequired,
  setState: PropTypes.func.isRequired,
};

export default Scoreboard

