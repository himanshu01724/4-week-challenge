// const fs = require(`fs`);
// const express = require(`express`);


// const app = express()

// // app.get(`/`,(req,res)=>{
   
// //     //res.status(200).send(`Trying to work with Node`) //Sends html through the send method
// //     res.writeHead(200,{
// //         'Content-type':'application/json'              //This is sending a json object.
// //     })
// //     res.end(`Json object`)
   
// // });


// // app.get(`/api`,(req,res)=>{

// //     res.status(200).json({message:"Sending data through express",status:"ok"})  //Without giving the headers I am able to send json to the application
    
// // })

// // app.post(`/`,(req,res)=>{
// //     res.status(200).send(`POST method`)
// // })

// const tourData = JSON.parse(fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`))

// app.get(`/api/v2/tours`,(req,res)=>{
//     res.header("Access-Control-Allow-Origin","*");
//     res.send(tourData)
// })


// const port = 3030;
// app.listen(port,()=>{
//     console.log(`App running on port ${port}`)
// })

//npm install express multer cors
const express = require('express');
const multer = require('multer');
const cors = require('cors');
const app = express();
const port = 3001;

// Configure CORS to allow requests from your React app
app.use(cors());

// Configure Multer to handle file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'E:/Files Getting from uploads/'); // Specify the directory where files will be saved
    },
    filename: (req, file, cb) => {
      // Use the original file name for the uploaded file
      cb(null, file.originalname);
    },
  });
const upload = multer({ storage });
  
// Define the upload route
app.post('/api/upload', upload.single('excelFile'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file provided.' });
  }

  const fileName = req.file.originalname;
  console.log(`File ${fileName} saved to uploads directory.`);

  // Process the uploaded file (e.g., save to disk, parse Excel data, etc.)

  res.json({ message: 'File uploaded and Saved successfully.' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


