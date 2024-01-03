//Endgoal is to connect a sql database with the nodeJS server so it will be ready for handling requests with the frontend..

const fs = require('fs')
const express = require('express')
const morgan = require('morgan')
const port = 5000

const app = express()


//Middleware

app.use(express.json())
app.use(morgan('dev'))

app.use((req,res,next)=>{
  req.requestTime = new Date().toISOString()
  next();
})

const tourData = JSON.parse(fs.readFileSync('./dev-data/data/tours-simple.json'))
const userData = JSON.parse(fs.readFileSync('./dev-data/data/users.json'))


//this is how you send a customized response through an API
app.get('/',(req,res)=>{
  res.status(200).json({message:'Sending Data',api:'home api'})
})


//Route Functions

const allTours = (req,res)=>{
  res.header("Access-Control-Allow-Origin","*")
  res.status(200).json({
    status:'Success',
    timeStamp:req.requestTime,
    results:tourData.length,
    data:{
      tourData
    }
  })
}

const createTours = (req,res)=>{
  const newId = tourData[tourData.length-1].id + 1
  const newTour = Object.assign({id:newId},req.body);
  tourData.push(newTour);
  fs.writeFile('./dev-data/data/tours-simple.json',JSON.stringify(tourData),err =>{
    res.status(201).json({
      status:"Success",
      data:{
        newTour
      }
    })
  })
}

const specificTour = (req,res)=>{
  const reqId = parseInt(req.params.id);
  const found = tourData.find((d)=>d.id === reqId)
  if(found){
  res.status(200).json({
    status:"Success",
    data:{
      found
    }
  })
  }
  else{
    res.status(404).json({
      status:"failed",
      message:"No Tour found"
    })
  }
}

const allUsers = (req,res)=>{
  res.header("Access-Control-Allow-Origin","*")
  res.status(200).json({
    status:"Success",
    results:userData.length,
    data:{
      userData
    }
  })
}

const createUser = (req,res)=>{
  
  const id = Math.random(10)*10000
  const newUser = Object.assign({id:parseInt(id)},req.body)
  userData.push(newUser)

  fs.writeFile('./dev-data/data/users.json',JSON.stringify(userData),err=>{
    res.status(201).json({
      status:'success',
      results:userData.length,
      data:{
        newUser
      }
    })  
  })
}

const specificUser = (req,res)=>{
  const ids = req.params.id;
  
  const foundUser = userData.find((id)=>id._id === ids)
  
  if(foundUser){
  res.status(200).json({
    status:"Success",
    data:{
      foundUser
    }
  })
}else{
  res.status(404).json({
    status:"failed",
    message:"No user found"
  })
}
}

//Route Handlers
const tourRoute = express.Router()

tourRoute
.route('/')
.get(allTours)
.post(createTours)


tourRoute
.route('/:id')
.get(specificTour)


app.use('/api/v1/tours',tourRoute)

const userRoute = express.Router();

userRoute
.route('/')
.get(allUsers)
.post(createUser)

userRoute
.route('/:id')
.get(specificUser)

app.use('/api/v1/user',userRoute)

//App routing

app.listen(port,()=>{
  console.log(`App is listening to http://127.0.0.1:5000/api/v2/tours`)
})


























