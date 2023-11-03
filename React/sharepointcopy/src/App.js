import {useState,useEffect} from 'react'
import AnimalCard from './Components/AnimalCard'
import op from './18226361280.jpeg'
import "./App.css"

function App(){

  const [data,setData] = useState([])
  const [displayCount,setDisplayCount] = useState(6);

  async function fetchData(){
    try{
      const response = await fetch(`http://127.0.0.1:5000/animal`);
      if(!response.ok){
        throw new Error(`Network Error while fetching data`)
      }
      const data = await response.json()
      console.log(data)
      setData(data)
    }
    catch(error){
      console.error(`Error while fetching data ${error}`)
    }
  }

useEffect(()=>{
  fetchData();
},[])

const loadMore = () =>{
  setDisplayCount(displayCount+3)
}

  return(
    <>
    <h1>DOGS BREEDER</h1>
    <div className = "app">
     {data.slice(0,displayCount).map((value)=>(
      <div className = "below" key = {value.url}>
      <AnimalCard className="animal-card" img = {value?.url} name = {value?.title} desc = {value?.description}/>
      {console.log(value?.url)}
      </div>
    ))}
    {displayCount < data.length && (
    <div className = "load-more-container">
        <button onClick={loadMore} style = {{color:'white',background:'#55c2da',width:'100px',height:'30px',border:'0px '}}>Load More</button>
    </div>
    )}
    </div>
    

    </> 
  )
}
export default App