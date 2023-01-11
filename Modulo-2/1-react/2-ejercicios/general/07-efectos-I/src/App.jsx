import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0);
  console.log(counter);
  useEffect(() => {}, [counter])

  return (
    <div className="App">
      <p>{counter}</p>
      <button type="button" onClick={() => setCounter(counter + 1)}>Suma 1</button> 
       
    </div>
  )
}

export default App
