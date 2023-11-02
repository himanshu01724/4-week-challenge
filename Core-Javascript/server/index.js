const express = require('express')
const fs = require('fs')

const port = 5000
const app = express()


const data = JSON.parse(fs.readFileSync('../static/data.json'))

app.get('/d3-chart',(req,res)=>{
    res.header("Access-Control-Allow-Origin","http://127.0.0.1:5500")
    res.send(data)
})

app.listen(port,()=>{
    console.log(`Listening on port ${port}`)
})