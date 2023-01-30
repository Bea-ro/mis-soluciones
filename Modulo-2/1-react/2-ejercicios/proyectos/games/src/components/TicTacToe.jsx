import React, {useState, useEffect} from 'react'
import './TicTacToe.css'

const TicTacToe = () => {

const [isStarted, setIsStarted] = useState(false)
const [playerX, setPlayerX] = useState(true)
const emptyGameboard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
]

const [gameboard, setGameboard] = useState(emptyGameboard)
const [gamecell, setGamecell] = useState(null)


const handleClick = (e) => {
setPlayerX(!playerX);
if (gamecell === null && playerX) {setGamecell("X")}
else if (gamecell === null && !playerX) {setGamecell("O")}
}

const winner = 
gameboard != null &&
gameboard[1]===gameboard[2]===gameboard[3] || gameboard[4]===gameboard[5]===gameboard[6] || gameboard[7]===gameboard[8]===gameboard[9] 
|| gameboard[1]===gameboard[4]===gameboard[7] || gameboard[2]===gameboard[5]===gameboard[8] || gameboard[3]===gameboard[6]===gameboard[9] 
|| gameboard[1]===gameboard[5]===gameboard[9] || gameboard[3]===gameboard[5]===gameboard[7]


useEffect(() => {
if (gamecell != null) {setGameboard(emptyGameboard);  
alert("¡Habéis empatado! Podéis empezar una nueva partida.");
setPlayerX(true)
} else if (winner) {setGameboard(emptyGameboard);
alert(`¡Enhorabuena ${playerX? "X" : "Y"}! ¡Has ganado la partida!`);
setPlayerX(true)
}

}, [gamecell])



  return (
    <div className="tic-tac-toe">
      
      <div className="header">
        <h1>TicTacToe</h1>
        <button type="button" className="start-button" onClick={()=>{
            isStarted ? setIsStarted(false) : setIsStarted(true)}
            }>Start</button> 
        <p>Es el turno del jugador: {playerX? "X" : "Y"}</p>
        </div>
       
        <div className="gameboard" id="gameboard">
<button type="button" className="gamecell" id="button-1" onClick={handleClick}>{gamecell}</button>
<button type="button" className="gamecell" id="button-2" onClick={handleClick}>{gamecell}</button>
<button type="button" className="gamecell" id="button-3" onClick={handleClick}>{gamecell}</button>
<button type="button" className="gamecell" id="button-4" onClick={handleClick}>{gamecell}</button>
<button type="button" className="gamecell" id="button-5" onClick={handleClick}>{gamecell}</button>
<button type="button" className="gamecell" id="button-6" onClick={handleClick}>{gamecell}</button>
<button type="button" className="gamecell" id="button-7" onClick={handleClick}>{gamecell}</button>
<button type="button" className="gamecell" id="button-8" onClick={handleClick}>{gamecell}</button>
<button type="button" className="gamecell" id="button-9" onClick={handleClick}>{gamecell}</button>
        </div>

        </div>
  )
}

export default TicTacToe

