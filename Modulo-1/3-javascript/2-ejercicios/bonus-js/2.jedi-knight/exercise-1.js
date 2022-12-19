const movies = [
  {
    title: "Bracula: Condemor II",
    duration: 192,
    categories: ["comedia", "aventura"],
  },
  {
    title: "Spider-Man: No Way Home",
    duration: 122,
    categories: ["aventura", "acción"],
  },
  {
    title: "The Voices",
    duration: 223,
    categories: ["comedia", "thriller"],
  },
  {
    title: "Shrek",
    duration: 111,
    categories: ["comedia", "aventura", "animación"],
  },
];

// for (let i = 0; i < movies.length; i++) {
//     let movie = movies[i]
//     console.log(movie.categories)
// }


// movies.forEach((movie) => {
// console.log(movie.categories)
// });


let newCategoryList = []

for (let movie of movies) {
  console.log(movie)
  for (let category of movie.categories) {
    console.log(category)
if (newCategoryList.includes(category)) {
newCategoryList
}
else {newCategoryList.push(category)}
}}


console.log(newCategoryList)



  

