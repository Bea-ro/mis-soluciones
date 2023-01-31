import React from 'react'


const Hangman = () => {

const words = [
coche,
caravana,
plátano,
conchas,
juego
]

const [word, setWord] = useState('')

  return (
    <div>
        <h1>Hangman</h1>
        <button type='button' onClick={()=>{
setWord('') //meter random
        }}>Start</button>

        <p>Palabra: {word}</p>
        <p>Pista: {//separar la palabra en letras y con un map poner cada letra oculta}</p>
//cuando se muestren todas, mensaje enhorabuena
<label htmlFor="pista">Pista        
<input type="text" maxLength={1}/> //cuando se meta un input, comprobar si está en pista y si es así, mostrar
</label>

<p>Intentos fallidos: //meter en array letras que no va acertando y que no pueda volver a ponerlas
  //y cuando llegan a 15 intentos, El juego ha terminado
</p>


        </div>
  )
}

export default Hangman