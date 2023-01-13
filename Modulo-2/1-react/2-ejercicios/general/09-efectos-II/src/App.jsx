import { useState, useEffect } from 'react'
import './App.css'


function App() {

const [time, setTime] = useState('')
console.log('Me renderizo fuera del useEffect')  
//estilos reloj digital

useEffect(() => {

console.log('Me renderizo dentro del useEffect sin delay (me monto) 1 vez')
let interval = setInterval(() => {
console.log('Me renderizo cada s')
setTime(new Date().toLocaleString().slice(11))
}, 1000);  
return () => {
clearInterval(interval); console.log('Me desmonto y quito el intervalo 1 vez')}
}, [])

  return (
    <div className="App">
      <p>{time}</p>
    </div>
  )
}

export default App
