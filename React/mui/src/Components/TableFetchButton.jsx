import { useState,useEffect } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import * as React from 'react';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  

function TableFetchButton(){

   const [data,setData] = useState([])
   const [loading, setLoading] = useState(false);
   const [selectedRow, setSelectedRow] = useState(null);
   const [showButton, setShowButton] = useState(false);


   //Modal Window
   const [open, setOpen] = React.useState(false);
   const handleOpen = () => setOpen(true);
   const handleClose = () => setOpen(false);


   const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://127.0.0.1:3001/api/v2/tours');
      const jsonData = await response.json();
      console.log(jsonData)
      console.log(jsonData.filter((item)=>item.maxGroupSize === 8))
      setData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };





  const handleRowSelection = (index) => {
    setSelectedRow(index);
    console.log(index.id)
    if (index.id === 0){
        setShowButton(true); 
        <Button variant="contained" style = {{position:'absolute',top:'0px',left:'100px' }}>Contained</Button>
        
        console.log(`Initial Index is Selected`)
    }
    else{
        setShowButton(false)
    console.log(`Rest of the index is selected`)
    }

  };

  const handleButtonClick = () => {
    alert(selectedRow.id)
    console.log('Button clicked for row:', selectedRow);
  };

  const searching = (e) =>{
    console.log(e.target.value)
    const newData = data.filter((item)=>item.Name === e.target.value)
    console.log(newData)
  }
    return(
        <div>
            <input placeholder="searching" onChange={searching}></input>
            <Button color="secondary" onClick={fetchData}>click me</Button>
            {loading ? (<p>Loading...</p>) : (<>
                 <Table sx={{ minWidth: 650 }} aria-label="simple table">
                 <TableHead>
                   <TableRow>
                    <TableCell></TableCell>
                     <TableCell >Name</TableCell>
                     <TableCell >Duration</TableCell>
                     <TableCell >Difficulty</TableCell>
                     <TableCell >Price</TableCell>
                   </TableRow>
                 </TableHead>
                 <TableBody>
                    {data.map((index)=>(
                        <TableRow key = {index.id}>
                            <TableCell>
                            <input
                                type="radio"
                                name="selectRow"
                                checked={index === selectedRow}
                                onChange={() => handleRowSelection(index)}
                            />
                            </TableCell>
                            <TableCell>{index.name}</TableCell>
                            <TableCell>{index.duration}</TableCell>
                            <TableCell>{index.difficulty}</TableCell>
                            <TableCell>{index.price}</TableCell>
                        </TableRow>
                    ))}
                   {/* {rows.map((row) => (
                     <TableRow
                       key={row.name}
                       sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                     >
                       <TableCell component="th" scope="row">
                         {row.name}
                       </TableCell>
                       <TableCell align="right">{row.calories}</TableCell>
                       <TableCell align="right">{row.fat}</TableCell>
                       <TableCell align="right">{row.carbs}</TableCell>
                       <TableCell align="right">{row.protein}</TableCell>
                     </TableRow>
                   ))} */}
                 </TableBody>
               </Table>
           
          {/*   
        <table>
          <thead>
            <tr>
              <th>Header 1</th>
              <th>Header 2</th>
               Add more headers as needed 
            </tr>
          </thead>
          <tbody>
            {data.map((index)=>(
                <tr key = {index.id}>
                    <td>
                    <input
                        type="radio"
                        name="selectRow"
                        checked={index === selectedRow}
                        onChange={() => handleRowSelection(index)}
                    />
                    </td>
                    <td>{index.id}</td>
                    <td>{index.name}</td>
                </tr>
            ))}
          </tbody>
        </table> */}
        </>
      )}
      {/* {showButton && (
        <Button variant = "contained" onClick = {handleOpen}>Click Me</Button>
      )} */}
      {showButton ?
        <Button variant = "contained" onClick = {handleOpen}>Click Me</Button> :''
      }
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>

    </div>
    )
}

export default TableFetchButton;    