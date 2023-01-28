import React from 'react'

//crea array de palabras 
// botón start coge una palabra aleatoría del array de palabras y genera la pista inicial:
// Palabra: 'Coche'
// Pista: _ _ _ _ _
// Cada vez que se meta una letra, comprobar si está en la palabra. 
// Si está, mostrarla donde va; si no abajo en lista de letras erróneas utilizadas
// no permitir que usuario meta letras d ela lista de abajo (almacenarlas en un array de letras 
// Dar nº máx de intentos, "la partida se ha terminado, tienes que comenzar una nueva partida"
// gana si acierta todas las letras

const Hangman = () => {

const words = [
coche,
caravana,
plátano,
conchas,
juego
]


  return (
    <div>
        <h1>Hangman</h1>
        <button type='button' onClick={()=>{

        }}>Start</button>

<input type="text" maxLength={1} />

        </div>
  )
}

export default Hangman