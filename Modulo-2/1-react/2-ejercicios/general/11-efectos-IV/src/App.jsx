import { useState, useEffect } from 'react'
import './App.css'
import movies from './components/Movies'
import genres from './components/Genres'


function App() {
 
  const [moviesList, setMoviesList] = useState(movies)
  const [genre, setGenre] = useState('All')

useEffect(() => {
if (genre === 'All') {movies.title} else {
let filteredMoviesList =
movies.filter((movie) => movie.genre === genre) 
setMoviesList(filteredMoviesList)}
}, [genre])
  

  return (
    <div className="App">
    
    <div>
    <ul>
    {moviesList.map((movie) => (
    <li key={movie.id}>{movie.title}
    </li>
    )
    )}
      </ul>
     </div>

     <div>
     <select name="genre" id="genre"  
     onChange={(e) => {setGenre(e.target.value)}}
     > 
     {genres.map((genre) => (
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