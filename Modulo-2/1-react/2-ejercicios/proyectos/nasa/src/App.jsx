import { useState, useEffect } from 'react'
import Figure from './components/Figure'
import './App.css'
import axios from 'axios'

function App() {
  
  const today = new Date(Date.now()).toISOString().slice(0,10)
  const [apod, setApod] = useState({})
  const [date, setDate] = useState(today)
  const NASA_URL = 'https://api.nasa.gov/'
  const NASA_API_KEY = 'yjawi9EPzPsmknl45Ng3yoWI8wpLpPNzKSa03kyG'

  // useEffect(() => {
  //   const getApod = async () => {
  //   const data = await axios.get(`${NASA_URL}planetary/apod?date=${date}&api_key=${NASA_API_KEY}`);
  //   setApod(data.data)};
  //   getApod();
  // }, [date])


  useEffect(() => {
    const getApod = async () => {
            const res = await fetch(`${NASA_URL}planetary/apod?date=${date}&api_key=${NASA_API_KEY}`);
            const data = await res.json();
            setApod(data)};
    getApod();
  }, [date])
    
    


const handleInput = (event) => {
setDate(event.target.value.toLocaleString())
}

  return (
    <div>
      <h2>NASA API</h2>
      <h1>Astronomy Picture of the Day</h1>
      {/* <img src={logo} alt="logo NASA" /> */}
      <input type="date" onChange={handleInput}/>
      {date > today? (<p>Please choose a previous date</p>) : (<Figure data={apod} />)}
      </div>
  )
}

export default App
