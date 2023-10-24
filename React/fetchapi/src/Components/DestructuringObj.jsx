import { useState,useEffect } from "react";

function DestructuringObj(){

    const [tours,setTours] = useState([]);

    useEffect(()=>{
        fetch(`http://127.0.0.1:3030/api/v2/tours`)
        .then(response  => {return response.json()})
        .then(data =>{
            const obj = data?.[0]
            console.log(obj)
            setTours(obj)
        }    
        )
        .catch(err =>console.log(err))
        
    },[])


    return(<>
        <div>Himanshu</div>
        <h1>{tours?.description}</h1>
        <h2>{tours.startDates?.[`0`]}</h2>
        <h3>{tours?.summary}</h3>
        </>
    )
}
export default DestructuringObj;