//Task -- pick data from usersJson request data by id and generate a url to create a new user.
const fs = require('fs')
const express = require('express')

const app = express()
const port = 5001

const userData = JSON.parse(fs.readFileSync('./dev-data/data/users.json'))

app.get('/tours/v1/user',(req,res)=>{
  res.header("Access-Control-Allow-Origin","*")
  res.status(200).json({
    status:"Success",
    results:userData.length,
    data:{
      userData
    }
  })
})

app.get('/tours/v1/user/:id',(req,res)=>{
  const ids = req.params.id;
  const foundUser = userData.find((id)=>id._id === ids)
  res.status(200).json({
    status:"Success",
    data:{
      foundUser
    }
  })
})

app.listen(port,()=>{
  console.log("App running on http://127.0.0.1:5001/tours/v1/user")
})


// const fs = require('fs')
// const express = require('express')
// const port = 5000

// const app = express()

// app.use(express.json())

// const tourData = JSON.parse(fs.readFileSync('./dev-data/data/tours-simple.json'))

// //this is how you send a customized response through an API
// app.get('/',(req,res)=>{
//   res.status(200).json({message:'Sending Data',api:'home api'})
// })


// app.get('/api/v1/tours',(req,res)=>{
//   res.header("Access-Control-Allow-Origin","*")
//   res.status(200).json({
//     status:'Success',
//     results:tourData.length,
//     data:{
//       tourData
//     }
//   })
// })

// app.post('/api/v1/tours',(req,res)=>{
  
//   const newId = tourData[tourData.length-1].id + 1
//   const newTour = Object.assign({id:newId},req.body);
//   tourData.push(newTour);
//   fs.writeFile('./dev-data/data/tours-simple.json',JSON.stringify(tourData),err =>{
//     res.status(201).json({
//       status:"Success",
//       data:{
//         newTour
//       }
//     })
//   })


// })



// app.listen(port,()=>{
//   console.log(`App is listening to http://127.0.0.1:5000/api/v2/tours`)
// })


























