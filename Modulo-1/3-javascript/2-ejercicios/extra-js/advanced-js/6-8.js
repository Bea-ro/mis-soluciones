// const numbers = [32, 21, 63, 95, 100, 67, 43];
// numbers.find((num) => {
//   if (num === 100) {
//     console.log(num);
//   }
// });

// const movies = [
//   { title: "Madagascar", stars: 4.5, date: 2015 },
//   { title: "Origen", stars: 5, date: 2010 },
//   { title: "Your Name", stars: 5, date: 2016 },
// ];
// movies.find((movie) => {
//   if (movie.date === 2010) {
//     console.log(movie.title);
//   }
// });

// const aliens = [
//   { name: "Zalamero", planet: "Eden", age: 4029 },
//   { name: "Paktu", planet: "Andromeda", age: 32 },
//   { name: "Cucushumushu", planet: "Marte", age: 503021 },
// ];
// const mutations = [
//   {
//     name: "Porompompero",
//     description:
//       "Hace que el alien pueda adquirir la habilidad de tocar el tambor",
//   },
//   {
//     name: "Fly me to the moon",
//     description: "Permite volar, solo y exclusivamente a la luna",
//   },
//   {
//     name: "Andando que es gerundio",
//     description: "Invoca a un señor mayor como Personal Trainer",
//   },
// ];

// const cucushumushuAlien = aliens.find((alien) => {
//   if (alien.name === "Cucushumushu") {
//     return alien;
//   }
// });
// const porompomperoMutation = mutations.find((mutation) => {
//   if (mutation.name === "Porompompero") {
//     return mutation;
//   }
// });
// const cucushumushuAlienWithMutation = {
//   ...cucushumushuAlien,
//   mutation: porompomperoMutation,
// };
// console.log(cucushumushuAlienWithMutation);

const exams = [
  { name: "Yuyu Cabeza Crack", score: 5 },
  { name: "Maria Aranda Jimenez", score: 1 },
  { name: "Cristóbal Martínez Lorenzo", score: 6 },
  { name: "Mercedez Regrera Brito", score: 7 },
  { name: "Pamela Anderson", score: 3 },
  { name: "Enrique Perez Lijó", score: 6 },
  { name: "Pedro Benitez Pacheco", score: 8 },
  { name: "Ayumi Hamasaki", score: 4 },
  { name: "Robert Kiyosaki", score: 2 },
  { name: "Keanu Reeves", score: 10 },
];
const totalScore = exams.reduce((acc, exam) => acc + exam.score, 0)
console.log(totalScore);
const approves = exams.reduce((acc, exam) => {
if (exam.score >=5) {return acc + exam.score
} else {
  return acc}
}, 0);
console.log(approves);
const averageScore = exams.reduce((acc, exam) => acc + exam.score, 0) / exams.length
console.log(averageScore)



const videogames = [
    {name: 'Final Fantasy VII', genders: ['RPG'], score: 9.5},
    {name: 'Assasins Creed Valhala', genders: ['Aventura', 'RPG'], score: 4.5},
    {name: 'The last of Us 2', genders: ['Acción', 'Aventura'], score: 9.8},
    {name: 'Super Mario Bros', genders: ['Plataforma'], score: 8.5},
    {name: 'Genshin Impact', genders: ['RPG', 'Aventura'], score: 7.5},
    {name: 'Legend of Zelda: Breath of the wild', genders: ['RPG', 'La cosa más puto bonita que he visto nunca'], score: 10},
]
const rpg = videogames.filter((videogame) => videogame.genders.includes('RPG'))
console.log(rpg)
const scoreAverage = rpg.reduce((acc, next) => acc + next.score, 0) / rpg.length
console.log(scoreAverage)
