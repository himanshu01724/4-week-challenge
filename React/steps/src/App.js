import './App.css'
import { useState } from 'react';
import Alert from '@mui/material/Alert';
import { IoIosClose } from "react-icons/io";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Date_Counter from './Date_Counter';


function App(){

const [step,setStep] = useState(1)
const [hide,setHide] = useState(false)
const [hideStep,sethideStep] = useState(true)

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
        setStep((s)=>s-1)
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
    setStep((s)=>s+1)
    }
}

const handleClose = ()=>{
    sethideStep(!hideStep)
    
}


    return(
    <>
        <div className = "close">
        <IoIosClose onClick={handleClose}/>
        </div>
        {
            hideStep && (
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
    </div>)
}


<BrowserRouter>
<Routes>
<Route exact path = "/dateCounter" element = {
<Date_Counter/>
}
/>
</Routes>
</BrowserRouter>

    </>
    )
}
export default App;

// It's a good practice to always update the state using a callback function
