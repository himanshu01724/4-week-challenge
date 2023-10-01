import { useEffect,useState } from "react";
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


function generateRandomArray(length, min, max) {
    const randomArray = [];
  
    for (let i = 0; i < length; i++) {
      const randomValue = Math.floor(Math.random() * (max - min + 1) + min);
      randomArray.push(randomValue);
    }
  
    return randomArray;
  }



function Mapping(){

const datatag = ['Tag1','Tag2']

const links = [
    { id: 1, text: 'Home', url: '/' },
    { id: 2, text: 'About', url: '/about' },
    { id: 3, text: 'Services', url: '/services' },
    // Add more sidebar links as needed
  ];

const [isExpanded, setIsExpanded] = useState(true);

const toggleSidebar = () => {
  setIsExpanded(!isExpanded);
};

const obj = [ {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
]


const [test,setTest] = useState([10,9,1,41,56])
const [textState,setTextState] = useState('')
const randValues = generateRandomArray(4,7,90);
const [dropdown,setDropDown] = useState('')

const handleUpdateClick = () =>{
    setTest(randValues)
}
const handleInputChange = (e) =>{
    setTextState(e.target.value);
}



    return(
    <>

        <InputLabel id="demo-simple-select-autowidth-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={dropdown}
          autoWidth
          label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Twenty</MenuItem>
          <MenuItem value={21}>Twenty one</MenuItem>
          <MenuItem value={22}>Twenty one and a half</MenuItem>
        </Select>
      
        <div className = 'tbl'>
        <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {datatag.map((item) => (
            <tr key={item.id}>
              <td>{item}</td>
              <td>{item}</td>
              <td>{item}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      {test.map((index)=>(
        <h1 key = {index.id}>{index}</h1>
      ))}
      <button  onClick={handleUpdateClick} >update</button>

      <textarea value = {textState} onChange={handleInputChange}>{textState}</textarea>
      <h1>Text coming from Above {textState}</h1>




    </>
  );
    
}
export default Mapping;