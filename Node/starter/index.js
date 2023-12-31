const fs = require('fs')
const express = require('express')
const port = 5000

const app = express()

const tourData = JSON.parse(fs.readFileSync('./dev-data/data/tours-simple.json'))


app.get('/api/v2/tours',(req,res)=>{
  res.header("Access-Control-Allow-Origin","*")
  res.send(tourData)
})

app.listen(port,()=>{
  console.log(`App is listening to http://127.0.0.1:5000/api/v2/tours`)
})


























