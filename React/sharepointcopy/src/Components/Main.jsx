import { useEffect,useState } from "react";
import AnimalCard from "./AnimalCard"
import "./Styles/Main.css"
function Main(){

const [data,setData] = useState([])
const [loadMore,setLoadMore] = useState(6)
const itemPerPage = 6
const loadLess = 0

async function fetchDogData(){
    try{
        const response = await fetch(`http://127.0.0.1:5001/animal`);
        if(!response.ok){
            throw new Error(`Error Fetching Dogs Data`)
        }
        const data = await response.json()
        console.log(data)
        setData(data)
    }
    catch(error){
        console.error(`Network Response Error ${error}`)
    }
}

useEffect(()=>{
    fetchDogData()
},[])

const increseCounter = ()=>{
    setLoadMore((s)=>s+3)
}

const decreaseCounter = ()=>{
    setLoadMore((s)=>s-3)
}

    return(

        <div className = "main">
            <span id = "heading">
             <h1>DIFFERENT DOG BREEDS</h1>
             </span>
            <div className = "app">
                {data.slice(0,loadMore,loadLess).map((value)=>(
                    <div className = "below" key = {value.url}>
                    <AnimalCard className="animal-card" img = {value?.url} name = {value?.title} desc = {value?.description}/>
                    {console.log(value?.url)}
                    </div>
                ))}
                {loadMore<data.length && 
                <div className = "load-more-container">
                <button onClick={increseCounter} style = {{color:'white',background:'#55c2da',width:'100px',height:'30px',border:'0px '}}>Show More</button>
                </div>}
                {loadLess<data.length && loadMore > itemPerPage && (
                     <div className = "load-more-container">
                     <button onClick={decreaseCounter} style = {{color:'white',background:'#55c2da',width:'100px',height:'30px',border:'0px '}}>Show Less</button>
                     </div>
                )}
            </div>
        </div>
    )
}
export default Main;