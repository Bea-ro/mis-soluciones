import { useState, useEffect } from 'react'
import './App.css'

function App() {
    const [characters, setCharacters] = useState([])
  
    useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
    .then((res) => res.json())
    .then((charactersData) => {setCharacters(charactersData.results)})
    }, [])
  
  console.log(`El estado es:`, characters)
  
     return (
      <div className="App">
    {characters.map((character) => {return (
    <div className="character-card" key={character.id}>
    <h3>{character.name}</h3>
    <p>Estado: {character.status}</p>
    <p>Vive en: {character.location.name}</p>
    <img src={character.image} alt={character.name} />
      </div>)})}
      
  </div>
  )}

export default App
