import React from 'react'
import "./Styles/Animal.css"
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