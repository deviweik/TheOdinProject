import { useState, useEffect } from 'react'
import './App.css'

const getRandomElements = (arr, count) => {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

function CardArray({ score, setScore }) {

  const [photos, setPhotos] = useState([]);
  const [randomTwelve, setRandomTwelve] = useState([]);
  const [clickedImages, setClickedImages] = useState([]); 

  console.log(clickedImages);

  useEffect(() => {
    const photoModules = import.meta.glob('./assets/cards/*.{png,jpg,jpeg,svg}');
    const photoPaths = Object.keys(photoModules);
    const loadPhotos = async () => {
      const photos = await Promise.all(photoPaths.map((path) => photoModules[path]()));
      setPhotos(photos);

      const randomPhotos = getRandomElements(photos, 12);
      setRandomTwelve(randomPhotos);
    };
    loadPhotos();
  }, []);

  const handleClick = (imageSrc) => {
    const imageName = imageSrc.split('/').pop(); // Get the image filename
    console.log("Clicked image:", imageName); // Debugging line

    if (clickedImages.includes(imageName)) {
      // Game over: reset the score and clear the clicked images
      console.log("Image already clicked. Game over."); // Debugging line
      setScore(0);
      setClickedImages([]); // Clear the clicked images
    } else {
      // Add image to clickedImages and update the score
      setClickedImages(prev => [...prev, imageName]);
      setScore(prevScore => prevScore + 1);
    }

    // Reshuffle and set new random photos
    const randomPhotos = getRandomElements(photos, 12);
    setRandomTwelve(randomPhotos);
  };

  return (
    <div id='cardArray' className='flex'>
      {randomTwelve.map((image, index) => (
        <img
          key={index}
          className="cardPhoto"
          src={image.default}
          alt={`image-${index}`}
          onClick={() => handleClick(image.default)}
        />
      ))}
    </div>
  )
}

export default CardArray