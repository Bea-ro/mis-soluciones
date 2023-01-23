import React from 'react'
import { useState, useEffect } from 'react'


const Countdown = () => {

const[time, setTime] = useState("")

useEffect(() => {

let interval = setInterval(()=> {
let countDownDate = new Date("Jan 19, 2023 12:00:00").getTime(); //valor en milisegundos
let now = new Date().getTime();

let distance = countDownDate - now
let days = Math.floor(distance / (1000 * 60 * 60 * 24));
let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
let seconds = Math.floor((distance % (1000*60)) / 1000); 
setTime(days + "d " + hours + "h " + minutes + "m " + seconds + "s");

if (distance < 0) {
  clearInterval(interval);
  setTime("COUNTDOWN FINISHED");
}

}, 1000);
}, [])

  return (
    <div className="countdown">
      <h2>{time}</h2>
      </div>
  )
}


export default Countdown