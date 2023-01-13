import { useEffect } from 'react'
import { useState } from 'react'
import './App.css'


function App() {

const[style,setStyle] = useState({})
const[backgroundColor,setBackgroundColor] = useState('#ffffff')

useEffect(() => {
const newStyles = {backgroundColor:backgroundColor}
setStyle(newStyles)
}, [backgroundColor])

  return (
    <div className="App">
      <h2>Esditando estilos de forma dinámica</h2>
      <button style={style}>Estilos dinámicos</button>
      <br />
      <label>
        Selecciona un color de fondo: 
        <br />
      <input 
      type="color" 
      value={backgroundColor}
      onChange={(e) => {setBackgroundColor(e.target.value)}}
      />
      </label>
    </div>
  )
}

export default App
