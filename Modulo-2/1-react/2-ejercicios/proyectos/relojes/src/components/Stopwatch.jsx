import React, {useState, useEffect} from 'react'
import './Stopwatch.css'


const Stopwatch = () => {

  const [hoursState, setHoursState] = useState(0)
  const [minutesState, setMinutesState] = useState(0)
  const [secondsState, setSecondsState] = useState(0)
  const [intervalID, setIntervalID] = useState(null)

  
const init = () => {
setIntervalID(
setInterval(() => {
    if (secondsState>=0 && secondsState <=58) {
      setSecondsState((prevSecondsState)=> prevSecondsState + 1)
    } else if (secondsState>=60 && secondsState <=3600) {
      setSecondsState(59);
      setMinutesState(((prevMinutesState) => prevMinutesState + 1))
    } else if (secondsState>3600) {
      setSecondsState(59);
      setMinutesState(59);
      setHoursState(((prevHoursState)=> prevHoursState + 1))
    }}, 1000))
  }

  const pause = () => {clearInterval(intervalID); setIntervalID(null)}

  const reinit = () => {clearInterval(intervalID); setIntervalID(null);init()}


return (
  <div className="digital-clock">
      <h2>{hoursState}:{minutesState}:{secondsState}</h2>
      
      <div className="buttons">

      <button type="button" onClick={init}>Iniciar</button>
      <button type="button" onClick={pause}>Pausar</button>
      <button type="button" onClick={init}>Reanudar</button>  
      <button type="button" onClick={()=> {
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

  
