import React from 'react'

const Figure = ({data}) => {

  return (
    <figure>
            
     <img src={data.url} alt={data.title} />
     
    <div> 
     <div>
  <button></button>
<h1>{data.title}</h1>
  <button></button>
  </div>
  
  <div>
  <span>{data.date}</span>
    </div>
  
  <div>{data.explanation}</div>
  </div>

  </figure>
  )
}

export default Figure
        