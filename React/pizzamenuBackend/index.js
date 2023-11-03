const fs = require('fs')
const express = require('express')
const port = 5000
const app = express()
const path = require('path')

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


const animals = JSON.parse(fs.readFileSync('./animaldata.json'))


app.get('/image/:imageName',(req,res)=>{
    const imageName = req.params.imageName;
    const imagePath = path.join(__dirname,'images',imageName);
    res.sendFile(imagePath)
})

app.get('/animal',(req,res)=>{
    res.header("Access-Control-Allow-Origin","*")
    res.send(animals)
})


app.listen(port,()=>{
    console.log(`Server Running on ${port}`)
})