import NormalMovie from './NormalMovie'
import FavoriteMovie from './FavoriteMovie'

const MovieList = (props) => {

return (
<div>
<ul>

{props.movies.map((movie) => 

<li key={movie.title}>
{movie.isFavorite ? <FavoriteMovie title={movie.title} year={movie.year}/> : <NormalMovie title={movie.title}/>}
</li>
)}

</ul>
</div>)
}

export default MovieList       
      