import "./challenge1.css"
import {useState} from 'react'

function Date_Counter(){

    const [step,setStep] = useState(1)
    const [counter,setCounter] = useState(0)


    const handleStepAddition = () =>{
        setStep((s)=>s+1)
    }
    const handleStepSubtraction = () =>{
        setStep((s)=>s-1)
    }

    const handleCounterAddition = ()=>{
        setCounter(s=>s+step)
    }
    const handleCounterSubtraction = () =>{
        
        setCounter((s)=>s-step)
    }

    const date = new Date()
    date.setDate(date.getDate()+counter)

    return(<>
        <h1>Date Counter</h1>

        <div className = "container">
        <button onClick={handleStepSubtraction}>-</button>
        <p>Step:{step}</p>
        <button onClick={handleStepAddition}>+</button>
        </div>
        <br/>
        <div className="container">
        <button onClick={handleCounterSubtraction}>-</button>
        <p>Count:{counter}</p>
        <button onClick={handleCounterAddition}>+</button>
        </div>

        <h2>
            <span>{counter === 0?"Today is":counter >0?`${counter} day from today is`:`${Math.abs(counter)} days ago from today`}</span>
            <span> {date.toDateString()}</span>
        </h2>
        </>
    )
}
export default Date_Counter