import { useState } from 'react'
import './App.css'

function App() {
  
  const [active, setActive] = useState(false);
  console.log(active);
  const toggle = () => setActive(!active)
  

  return (
    <div className="App">
      <button 
      onClick={toggle}>
    ON/OFF</button>
    <p>{active? 'Encendido' : 'Apagado'}</p>
    </div>
  )
}

export default App
