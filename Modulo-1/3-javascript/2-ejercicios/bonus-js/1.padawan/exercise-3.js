const movies = [
    { name: "Titan A.E.", durationInMinutes: 130 },
    { name: "Nightmare before Christmas", durationInMinutes: 225 },
    { name: "Inception", durationInMinutes: 165 },
    { name: "The Lord of the Rings", durationInMinutes: 967 },
    { name: "Star Wars: A New Hope", durationInMinutes: 214 },
    { name: "Terminator", durationInMinutes: 140 },
  ];

  const shortMovies = []
  const mediumMovies = []
  const longMovies = []

  for (i = 0; i < movies.length; i++) {
const movie = movies[i]
if (movie.durationInMinutes < 100) {
    shortMovies.push(movie.name)
} else if (movie.durationInMinutes >100 & movie.durationInMinutes <200) {
mediumMovies.push(movie.name)
} else if (movie.durationInMinutes > 200) {
longMovies.push(movie.name)
}
  }

console.log(`Películas cortas: ` + shortMovies);
console.log(`Películas medianas: ${mediumMovies}`);
console.log(`Películas largas: ` + longMovies)