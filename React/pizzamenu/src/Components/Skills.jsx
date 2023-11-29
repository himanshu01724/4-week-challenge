import React from 'react'


function Skills(props) {
  return (
    <li style = {{height:'50px',width:'100px',borderRadius:'2rem',backgroundColor:`${props?.color}`,listStyle:'none'}}>
        <p style = {{color:'white'}}>{props?.skill}</p>
       
    </li>
  )
}

export default Skills