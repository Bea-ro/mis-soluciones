import React from 'react'
import './Education.css'

const Education = ({education}) => {
  return (
    <div className="education">
        
        <h3>Education</h3>
        
        <div className="card">
        {education.map((edu) => (
        <div key={edu.name}>
        <p className="eduname">📕 {edu.name}</p>
        <p>{edu.where}</p>
        <p>{edu.date}</p>
        </div>
        ))
        }
        </div>
        
        </div>

)
}

export default Education

    