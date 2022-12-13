
let fantasticFour = [
  "La antorcha humana",
  "Mr. Fantástico",
  "La mujer invisible",
  "La cosa",
];

let indice = 2
let indice2 = 3

const swap = () => {
  const deleteValue = fantasticFour[indice]
  fantasticFour[indice] = fantasticFour[indice2]
  fantasticFour[indice2] = deleteValue
  console.log(fantasticFour)
}

swap()
