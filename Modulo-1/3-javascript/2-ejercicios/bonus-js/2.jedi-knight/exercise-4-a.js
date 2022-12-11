const mainCharacters = [
  "Luke",
  "Leia",
  "Han Solo",
  "Chewbacca",
  "Rey",
  "Anakin",
  "Obi-Wan",
];

function findArrayIndex(mainCharacters, text) {
    return mainCharacters.indexOf(text)
    }


console.log(findArrayIndex(mainCharacters, 'Luke'))