import { useState, useEffect } from 'react'
import CardArray from './CardArray.jsx'
import CardCounter from './CardCounter.jsx'

function Game({ prevPage, highScore, setHighScore}) {
  const suits = ['clubs', 'diamonds', 'hearts', 'spades'];
  const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];

  const [cards, setCards] = useState(() => {
    const initialCards = suits.map(suit => ({
      id: suit,
      remaining: [],
      collected: []
    }));
    return initialCards;
  });

  let score = 0;

  cards.map((suit) => (
    score += suit.collected.length
  ));

  console.log(score);

  if (score > highScore) {
    setHighScore(score);
  }

  useEffect(() => { // load card photos
    const cardsDirectory = '/src/assets/cards/';

    if (cards[0].remaining.length < 13) {
      let newCards = [...cards];

      for (let i = 0; i < suits.length; i++) {
        for (let j = 0; j < values.length; j++) {
          // define cards here by putting the file names into the remaining array of cards state variable
          newCards[i].remaining.push(`${cardsDirectory}${values[j]}_of_${suits[i]}.png`);
        }
      }
      console.log(newCards);
      setCards(newCards);
    }
  }, []);

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
        <CardArray cards={cards} setCards={setCards}/>
        <CardCounter/>
      </div>
      <button id='backButton' onClick={prevPage}>Back to Menu</button>
    </div>
  )
}

export default Game