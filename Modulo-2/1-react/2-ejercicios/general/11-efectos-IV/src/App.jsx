import { useState, useEffect } from 'react'
import './App.css'
import movies from './components/Movies'
import genres from './components/Genres'


function App() {
 
  const [moviesList, setMoviesList] = useState(movies)
  const [genresList, setGenresList] = useState(genres)

  useEffect(() => {
  const filteredMoviesList = () => {
    moviesList.filter((movie) => {
    return movie.genre === genresList  
    })
  }
  setMoviesList(filteredMoviesList())
  }, [genresList])
  

  return (
    <div className="App">
    
    <div>
     {moviesList.map((movie) => (
      <ul>
        <li key={movie.id}>{movie.title}</li>
      </ul>
      )
     )}
     </div>

     <div>
     <select name="genre" id="genre"  
     onSelect={(e) => {setGenresList(e.target.value)}}
     > 
     {genresList.map((genre) => (
     <option value={genre.name} key={genre.id}>{genre.name}
     </option>
     
     )
     )}   
     </select>
     </div>
    
    </div>
  )
}

export default App