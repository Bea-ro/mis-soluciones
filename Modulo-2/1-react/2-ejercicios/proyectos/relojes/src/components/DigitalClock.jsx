import React from 'react'
import { useState, useEffect } from 'react'

const DigitalClock = () => {
    const [clockState, setClockState] = useState()
    
    useEffect(()=> {
        setInterval(() => {
        setClockState(new Date().toLocaleTimeString())
        }, 1000);  
        }, [])
   
  return (
    <div className="digital-clock">
        <h2>{clockState}</h2>
        </div>
  )
}

export default DigitalClock