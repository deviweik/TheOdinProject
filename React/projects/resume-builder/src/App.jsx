import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Stepper from './components/Stepper';
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Stepper />
    </>
  );
}

export default App