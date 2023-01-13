import './App.css'


function App() {

  const characters = [
    {
      id: 1,
      name: 'Rick Sanchez',
      status: 'Alive',
      origin: 'Earth (C-137)',
      location: 'Citadel of Ricks',
      image:
        'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    },
  
    {
      id: 2,
      name: 'Morty Smith',
      status: 'Alive',
      species: 'Human',
      origin: 'Earth (C-137)',
      location: 'Citadel of Ricks',
      image:
        'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
    },
  
    {
      id: 3,
      name: 'Summer Smith',
      status: 'Alive',
      species: 'Human',
      origin: 'Earth (Replacement Dimension)',
      location: 'Earth (Replacement Dimension)',
      image:
        'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
    },
  ];
    
return (
    <div className="App">

{characters.map((character) => {
return ( 
<div className="character-card" key={character.id}>
  <h3>{character.name}</h3>
  <p>Estado: {character.status}</p>
  <p>Vive en: {character.location}</p>
<img src={character.image} alt={character.name} />
</div>
)
})
}
    </div>
  )
}

export default App
