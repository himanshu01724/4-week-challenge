import './App.css'
import { useState } from 'react';
import Alert from '@mui/material/Alert';



function App(){

const [step,setStep] = useState(1)
const [hide,setHide] = useState(false)

const messages = [
    "Learn React ⚛️",
    "Apply for jobs 💼",
    "Invest your new income 🤑",
    ];

const handlePrevious = () =>{
    try{
        if(step<=1){
            alert(`Foundational Step`)
        }
        else{
            setHide(false)
        setStep(step-1)
        }
    }
    catch{
        console.error(`Error Going back`)
    }
}
const handleNext = () =>{
    if(step>=3){
        setHide(true)
    }else{
    setStep(step+1)
    }
}


    return(
    <div className = "steps">
        <div className = "numbers">
            <div className = {`${step >=1?'active':''}`}>1</div>
            <div className = {`${step >=2 ? 'active':''}`}>2</div>
            <div className = {`${step >=3 ? 'active':''}`}>3</div>
        </div>
        <p className = "message">Step:{step} {messages[step-1]}</p>

        <div className = "buttons">
            <button style = {{backgroundColor:'#7950f2',color:'white'}} onClick={handlePrevious}>Previos </button>
            <button style = {{backgroundColor:'#7950f2',color:'white'}} onClick = {handleNext}>Next</button>
            
        </div>
      {hide && (<Alert severity="warning">Follow these steps daily</Alert>)}
    </div>
    
    )
}
export default App;