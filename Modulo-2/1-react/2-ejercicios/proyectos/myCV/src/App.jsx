import { useState } from 'react'
import './App.css';
import { CV } from './CV/Cv';
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Experience from './components/Experience'
import More from './components/More'

const { hero, education, experience, languages, habilities } = CV;


function App() {

const [showEducation, setShowEducation] = useState(true)
 
  return (
    <div className="App">
      <Hero hero={hero}/>
        <About hero={hero}/>
        <div className="buttons">
        <button onClick={(e) => {setShowEducation(true)}}>
          Education</button>
          <button onClick={(e) => {setShowEducation(false)}}>Experience</button>
          </div>
          <div>
       {showEducation? (<Education education={education}/>) : (<Experience experience={experience}/>)}
                </div>  
        <More languages={languages} habilities={habilities}/>
    </div>
  )
}

export default App