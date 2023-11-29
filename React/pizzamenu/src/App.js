import { useState, useEffect } from "react";
import Header from "./Components/Header";
import MenuCard from "./Components/MenuCard";
import "./Components/MenuCard.css"
import Funghi from "./Shared/funghi.jpg"
import Avatar from "./Components/Avatar";

function App() {

  const [data,setData] = useState([]);

  async function fetchData(){
    try{
      const response = await fetch(`http://127.0.0.1:5000/pizza`)
      if(!response.ok){
        throw new Error(`Network response was not Ok`)
      }
      const data = await response.json();
      console.log(data)
      setData(data)
    }
    catch(error){
      console.error(`Error Fetching data`)
    }
  }

  useEffect(()=>{
    fetchData()
  },[])
{/*
  useEffect(()=>{
    try{
      fetch(`http://127.0.0.1:5000/pizza`)
      .then(response=>{
        return response.json()
      })
      .then(data => {
        console.log(data)
      })
      .catch((error)=>{
        console.log(error)
      })
    }
    catch(error){
      console.error(error)
    }
  },[])
*/}
  return (
    <>
    <Header heading={` FAST REACT PIZZA CO . `}/>
    <div style={{ display: 'flex',height: '1000px',gap:'4rem',justifyContent: 'center', alignItems: 'center',}}>
    {data.reduce((columns, value) => {
      if (columns.length === 0 || columns[columns.length - 1].length >= 3) {
        columns.push([]); // Start a new columnƒ
    }
    columns[columns.length - 1].push(value);
    return columns;
    }, []).map((column, columnIndex) => (
       
    <div key={columnIndex} style={{ display: 'flex', flexDirection: 'column', alignItems:'center'}}>
      {column.map((value) => (
        
        <div key={`${value.id}-${value.name}`}>
          <MenuCard title={value.name} content={value.ingredients} image={Funghi} id={value.price} />
        </div>
      ))}
    </div>
  ))}
</div>  <br/>
        <button style = {{position:'absolute',left:'630px',height:'20px',width:'90px',backgroundColor:'#edc84b',border:'0.5px solid'}} >Order Now</button>
 
        <Avatar/>
    </>
  );
}

export default App;
