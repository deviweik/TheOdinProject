import { useState, useEffect } from 'react'
import './App.css'

function CardCounter() {

  const initialCardCounts = [
    {
      id : 'club',
      collected : 0,
      total : 13
    },
    {
      id : 'diamond',
      collected : 0,
      total : 13
    },
    {
      id : 'heart',
      collected : 0,
      total : 13
    },
    {
      id : 'spade',
      collected : 0,
      total : 13
    }
  ];

  const [cardCounts, setCardCounts] = useState([]);
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    setCardCounts(initialCardCounts);
  }, []);

  useEffect(() => {
    const photoModules = import.meta.glob('./assets/suits/*.{png,jpg,jpeg,svg}');
    const photoPaths = Object.keys(photoModules);

    const loadPhotos = async () => {
      const photos = await Promise.all(
        photoPaths.map(async (path) => {
          const module = await photoModules[path]();
          const fileName = path.split('/').pop().split('.').shift(); // Get the file name without extension
          return { [fileName]: module.default };
        })
      );

      const photoObject = Object.assign({}, ...photos); // Merge all photo objects into one
      setPhotos(photoObject);
    };

    loadPhotos();
  }, []);

  return (
    <div id='cardCounter' className='flex'>
      {cardCounts.map((suit) => (
        <div key={suit.id} className='suitContainer flex'>
          <img
            key={suit.id}
            className="suitImg"
            src={photos[suit.id]} 
            alt={suit.id}
          />
          <h2>{suit.collected}/{suit.total}</h2>
        </div>
      ))}
    </div>
  )
}

export default CardCounter
