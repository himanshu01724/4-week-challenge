const fs = require('fs')
const express = require('express')
const port = 5000
const app = express()

const pizzaData = JSON.parse(fs.readFileSync(`./data.json`))

app.get('/pizza',(req,res)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.send(pizzaData)
})

app.listen(port,()=>{
    console.log(`Server Running on ${port}`)
})