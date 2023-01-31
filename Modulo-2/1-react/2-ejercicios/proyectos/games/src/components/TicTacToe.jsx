import React, {useState, useEffect} from 'react'
import './TicTacToe.css'

const TicTacToe = () => {

const [playerX, setPlayerX] = useState(true)
let emptyGameboard = [null, null, null, null, null, null, null, null, null]
const [gameboard, setGameboard] = useState(emptyGameboard)
let gamecell = gameboard.map((gamecell) => gamecell)
const [winner, setWinner] = useState(false)
const [message, setMessage] = useState('Pulsa el botón Start para comenzar la partida.')


const handleStart = () => {
  setGameboard(emptyGameboard);
  setPlayerX(true);
  setWinner(false);
  setMessage('Comienza el jugador X') //clic start habiendo ganado uno, vuelve mensaje Enhorabuena
  console.log('oulsas start y gameboard es', gameboard)
}

const handleWinner = () => { 
  if (
  gameboard[0]===gameboard[1] && gameboard[0]===gameboard[2] && gameboard[0]!=null  && gameboard[1]!=null && gameboard[2]!=null|| 
  gameboard[3]===gameboard[4] && gameboard[3]===gameboard[5] && gameboard[3]!=null && gameboard[4]!=null && gameboard[5]!=null || 
  gameboard[6]===gameboard[7] && gameboard[6]===gameboard[8] && gameboard[6]!=null && gameboard[7]!=null && gameboard[8]!=null || 
  gameboard[0]===gameboard[3] && gameboard[0]===gameboard[6] && gameboard[0]!=null && gameboard[3]!=null && gameboard[6]!=null || 
  gameboard[1]===gameboard[4] && gameboard[1]===gameboard[7] && gameboard[1]!=null && gameboard[4]!=null && gameboard[7]!=null || 
  gameboard[2]===gameboard[5] && gameboard[2]===gameboard[8] && gameboard[2]!=null && gameboard[5]!=null && gameboard[8]!=null || 
  gameboard[0]===gameboard[4] && gameboard[0]===gameboard[8] && gameboard[0]!=null && gameboard[4]!=null && gameboard[8]!=null || 
  gameboard[2]===gameboard[4] && gameboard[2]===gameboard[6] && gameboard[2]!=null && gameboard[4]!=null && gameboard[6]!=null
  ) {
  setWinner(true);
  }
  }

  

useEffect(() => {
  console.log('se ejecuta el useeffect(alert ganador)')
  handleWinner();
  if (winner) {
  setMessage(`¡Enhorabuena ${playerX? "O" : "X"}! ¡Has ganado la partida! 🏅`)
  }
  if (!winner & !gameboard.includes(null)) {
  setMessage("¡Habéis empatado! Podéis empezar una nueva partida.");
  } 
  }, [gamecell])

  
const handleClick = (e) => {
  setMessage(`Es el turno del jugador ${playerX? "O" : "X"}`)
  
  let index = e.target.id
  if (gameboard[index] === null && playerX) {
    gameboard[index]="X"
  }
  else if (gameboard[index] === null && !playerX) {
    gameboard[index]="O"};
    setPlayerX(!playerX);
}


  return (
    <div className="tic-tac-toe">
      
      <div className="header">
        <h1>TicTacToe</h1>
        <button type="button" className="start-button" onClick={handleStart}
            >Start</button> 
        <p>{message}</p>
        </div>
       
        <div className="gameboard" id="gameboard">
<button type="button" className="gamecell" id="0" onClick={handleClick}>{gameboard[0]}</button>
<button type="button" className="gamecell" id="1" onClick={handleClick}>{gameboard[1]}</button>
<button type="button" className="gamecell" id="2" onClick={handleClick}>{gameboard[2]}</button>
<button type="button" className="gamecell" id="3" onClick={handleClick}>{gameboard[3]}</button>
<button type="button" className="gamecell" id="4" onClick={handleClick}>{gameboard[4]}</button>
<button type="button" className="gamecell" id="5" onClick={handleClick}>{gameboard[5]}</button>
<button type="button" className="gamecell" id="6" onClick={handleClick}>{gameboard[6]}</button>
<button type="button" className="gamecell" id="7" onClick={handleClick}>{gameboard[7]}</button>
<button type="button" className="gamecell" id="8" onClick={handleClick}>{gameboard[8]}</button>


        </div>

        </div>
  )
}

export default TicTacToe

