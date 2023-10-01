import * as React from 'react'
import {useState, useEffect} from 'react';




function GridLayout(){

    const [cat,setCat] = useState([]); //country one if we can props to
    const [isLoading,setIsLoading] = useState(false);

    const key = '970c7fd3';


    useEffect( ()=>{
        setIsLoading(true)
        fetch(`http://www.omdbapi.com/?apikey=${key}&s=rambo&type=movie`)
        .then(respose => {return respose.json()})
        .then(data =>{
            console.log(data);
            setCat(data.Search);

        })
        
        .catch(err => console.log(err))
        setIsLoading(false)
    },[])

    return(
    <>
    <h1>Himanshu</h1>
    <h4>Card Components  Fetching data dynamically</h4>
    { isLoading ? <loader/> : <div className = "container">
     {cat.map((data,index)=>{
     return <div key = {index}>
      <b>{data.Title}</b> <br/>
      {data.Year} <br/>
     {data.imdbID}
     </div>
    })}
    </div>
    }   
     
    </>
    )
    function loader(){
        return <h1>Loading</h1>
    }
}
export default GridLayout;


//loading state is easy