import React from 'react'
import "./Animal.css"
import op from '../18226361280.jpeg'
function AnimalCard(props) {
  return (
    <div className = "Card">
        <img src = {props.img} alt = "this is an image alt"/>
       <h2>{props.name}</h2>
       <p>{props.desc}</p>
    </div>

  )
}

export default AnimalCard