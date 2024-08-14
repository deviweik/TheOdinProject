import menuPhoto from './assets/menu-photo.png';
import './App.css'

function Menu({ nextPage, highScore }) {

  return(
    <div id='menuContainer' className='flex'>
      <img src={menuPhoto} id='menuPhoto'/>
      <div id='menuRight'>
        <h1 id='menuHeader'>Welcome to Memory Card</h1>
        <h3 id='menuDescription'>Try to click as many cards as you can without clicking the same one twice!</h3>
        <br/>
        <button onClick={nextPage}>Let&apos;s Play!</button>
        <h2 id='menuHighScore'>High Score: {highScore}</h2>
      </div>
    </div>
  )
}

export default Menu