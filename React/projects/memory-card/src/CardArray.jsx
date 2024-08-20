import { useState, useEffect } from 'react'
import './App.css'

const getRandomElements = (arr, count) => {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

function CardArray({ cards, setCards }) {

  const handleClick = (imageSrc) => {
    const imageName = imageSrc.split('/').pop(); // Get the image filename
    console.log("Clicked image:", imageName); // Debugging line

    // Reshuffle and set new random photos
  };

  return (
    <div id='cardArray' className='flex'>
      {cards[0].remaining.map((image, index) => (
        <img
          key={index}
          className="cardPhoto"
          src={image}
          alt={image.substring(18)}
          onClick={() => handleClick(image)}
        />
      ))}
    </div>
  )
}

export default CardArray