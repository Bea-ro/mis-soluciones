import React, {useState, useEffect} from 'react'
import './Stopwatch.css'


const Stopwatch = () => {

  const [hoursState, setHoursState] = useState(0)
  const [minutesState, setMinutesState] = useState(0)
  const [secondsState, setSecondsState] = useState(0)
  const [intervalID, setIntervalID] = useState(null)
  const [secondsCounter, setSecondsCounter] = useState(0)

  
const init = () => {

setIntervalID(
setInterval(() => {
  
setSecondsCounter((prevSecondsCounter)=> prevSecondsCounter + 1);

if (secondsCounter>=0 && secondsCounter <=58) {
setSecondsState((prevSecondsCounter)=> prevSecondsCounter + 1)
} else if (secondsCounter>=59 && secondsCounter <=3598) {
setSecondsState(59);
setMinutesState(Math.floor(secondsCounter/60))
} else if (secondsCounter>=3599) {
setSecondsState(59);
setMinutesState(59);     
setHoursState(Math.floor(secondsCounter/3600))}
}, 1000))

}



  
  const pause = () => {clearInterval(intervalID); setIntervalID(null)}

  const reinit = () => {clearInterval(intervalID); setIntervalID(null);init()}


return (
  <div className="digital-clock">
    <p>{secondsCounter}</p>
          <h2>{hoursState}:{minutesState}:{secondsState}</h2>
      
      <div className="buttons">

      <button type="button" onClick={init}>Iniciar</button>
      <button type="button" onClick={pause}>Pausar</button>
      <button type="button" onClick={init}>Reanudar</button>  
      <button type="button" onClick={()=> {
      setSecondsCounter(0);
      setSecondsState(0);
      setMinutesState(0);
      setHoursState(0);
      }
      }>Reiniciar</button>
      
      </div>

      </div>
)
}

export default Stopwatch

  
