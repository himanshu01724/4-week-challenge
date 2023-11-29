import React from 'react'
import testing from '../Shared/tesing.jpg'
import './MenuCard.css'
import Skills from './Skills'
import { useState,useEffect } from 'react'

function Avatar() {

    const [skill,setSkill] = useState([])

async function fetchData(){
    try{
        const response = await fetch(`http://127.0.0.1:5000/skills`);
        if(!response.ok){
           throw new Error(`Network Error`)
        }
        const data = await response.json()
        console.log(data)
        setSkill(data)
    }
    catch(error){
        console.error(error)
    }
}

useEffect(()=>{
    fetchData()
},[])

  return (
    <div className = "menu">
        <img src={testing} alt = "noimage"/>
        <h1>Himanshu Joshi</h1>
        <p>My Name is Himanshu Joshi, I am 23 years old working as a Frontend Developer with Genpact, My hobbies are COOKING,MUSIC, I have a beautiful Girl, I am in love with her </p>
        <ul style={{display:'flex',gap:'1rem'}}>
            {skill.reduce((colums,value)=>{
                if(colums.length === 0 || colums[colums.length-1].length>=2){
                    colums.push([]);
                }
                colums[colums.length-1].push(value)
                return colums
            },[]).map((column, columnIndex)=>(
                <div key={columnIndex} style={{ display: 'flex', flexDirection: 'column', alignItems:'center'}}>
                {column.map((val)=>(
                    <Skills  skill = {val.skill} color = {val.color}/> 
                ))} 
                </div>
            ))}
            
           
            
        </ul>
   
     


    </div>
  )
}

export default Avatar