import React from 'react'

import { useData } from '../Context/DataContext';
import {Link} from "react-router-dom"

function Paragraph() {

    const { textareaData, setTextareaData } = useData();

    const handleClick = () =>{
        console.log(`Data,+${textareaData}`)
    }

  return (
    <div>
    Paragraph
    <textarea placeholder='Enter from your heart' onChange={(e)=>setTextareaData(e.target.value)}></textarea>
    <Link to = "/display"><button>Test</button></Link>

    </div>
  )
}

export default Paragraph