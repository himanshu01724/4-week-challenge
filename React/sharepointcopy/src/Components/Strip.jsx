import "./Styles/Strip.css"
import { useEffect,useState } from "react";

function Strip(){

    const [data,setData] = useState([])

    async function imageData(){
        try{
            const response = await fetch(`http://127.0.0.1:5001/animal`);
            if(!response.ok){
                throw new Error(`Error fetching data`)
            }
            const data = await response.json()
            console.log(data)
            setData(data)
        }
        catch(error){
            console.error(`Network Error While Fetching data ${error}`)
        }
    }

    useEffect(()=>{
        imageData()
    },[])

    return(
        <>
        <h1>Creating Diffrent Strips</h1>
        <div className = "strip1">
            <div className = "substrip1">
                
                {data.map((value)=>(
                    <div className = "slide1" key = "title">
                        <img src = {value?.url} alt = "abc"/>
                    </div>
                
                ))}
            </div>
            <h2>Basic Left to Right Animation Strip</h2>
        </div>
        </>
    )
}
export default Strip;