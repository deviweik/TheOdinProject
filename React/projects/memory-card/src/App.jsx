import { useState } from 'react'
import Menu from './Menu.jsx'
import Game from './Game.jsx'
import './App.css'

function App() {
  const [step, setStep] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const nextPage = () => {
    setStep(prevStep => prevStep + 1);
  }

  const prevPage = () => {
    setStep(prevStep => Math.max(prevStep - 1, 0));
  }

  return (
    <>
      {step === 0 && <Menu nextPage={nextPage} highScore={highScore}/>}
      {step === 1 && <Game prevPage={prevPage} highScore={highScore} setHighScore={setHighScore}/>}
    </>
  )
}

export default App
