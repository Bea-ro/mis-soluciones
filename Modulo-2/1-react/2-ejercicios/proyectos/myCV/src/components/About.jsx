import React from 'react'
import './About.css'

const About = ({hero}) => {

  return (
    <div  className="about">
    <h3>About me</h3>
    <div className="card">
    
      <>
    {hero.aboutMe.map((i) => (
    <p key={i.info}>{i.info}</p>
    )
    )}   
      </>       

        </div>
        </div>
  )
}

export default About