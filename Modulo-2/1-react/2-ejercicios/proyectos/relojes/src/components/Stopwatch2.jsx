import React, {useState, useEffect} from 'react'
import './Stopwatch2.css'

const Stopwatch2 = () => {

const [time, setTime] = useState(0);
const [timerOn, setTimerOn] = useState(false)

useEffect(() => {
let interval = null;

if (timerOn) {
interval = setInterval(() => {
console.log('hay intervalo?')
setTime((prevTime) => prevTime + 1)
}, 1000)
} else {clearInterval(interval)}
return ()=> clearInterval(interval)
}, [timerOn])

  return (
    <div>
<h2>{time}</h2>
      
      <div className="buttons">
      <button type="button" onClick={()=>setTimerOn(true)}>Iniciar</button>   
      <button type="button" onClick={()=>setTimerOn(false)}>Pausar</button> 
      <button type="button" onClick={()=>setTimerOn(true)}>Reanudar</button> 
      <button type="button" onClick={()=>setTime(0)}>Reiniciar</button>
      </div>

    </div>
  )
}

export default Stopwatch2