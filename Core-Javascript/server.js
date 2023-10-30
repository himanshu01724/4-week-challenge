const fs = require('fs')
const express = require('express')
const port = 5000
const app = express()

const data = JSON.parse(fs.readFileSync('./static/data.json'))

app.get('/chart',(req,res)=>{
    req.header("Access-Control-Allow-Origin","*");
    res.send(data)
})

app.listen(port,()=>{
    console.log(`App running on port ${port}`)
})
