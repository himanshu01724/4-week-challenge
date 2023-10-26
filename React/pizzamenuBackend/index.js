const fs = require('fs')
const express = require('express')
const port = 5000
const app = express()

const pizzaData = JSON.parse(fs.readFileSync(`./data.json`))

const skills = JSON.parse(fs.readFileSync(`./skills.json`))

app.get('/pizza',(req,res)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.send(pizzaData)
})

app.get('/skills',(req,res)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.send(skills)
})

app.listen(port,()=>{
    console.log(`Server Running on ${port}`)
})