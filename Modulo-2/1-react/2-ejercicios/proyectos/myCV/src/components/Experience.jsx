import React from 'react'
import './Experience.css'

const Experience = ({experience}) => {
    return (
        <div className="experience">
            
            <h3>Experience</h3>
            
            <div className="card">
            {experience.map((exp) => (
            <div key={exp.name}>
            <p className="expname">💼 {exp.name}</p>
            <p>{exp.where}</p>
            <p>{exp.date}</p>
            <p>{exp.description}</p>
            </div>
            ))
            }
            </div>
            
            </div>
    
    )
    }

export default Experience