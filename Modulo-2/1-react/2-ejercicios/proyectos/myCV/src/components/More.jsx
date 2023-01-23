import React from 'react'
import './More.css'

const More = ({languages, habilities}) => {
  return (
    <div className="more">
           <h3>Languages</h3>
      <div className="card">
    <p className="language">
      <span className="language-name">{languages.language}</span>
    <span>{languages.title}</span>
    <span>{languages.date}</span>
    </p>
    </div>
    <h3>Skills</h3>
    <div className="card">
    <p className="skills">
      {habilities.map((hability) => (
      <span>✅ {hability}</span>))
    }
    </p>
    </div>
    </div>
  )
}

export default More 