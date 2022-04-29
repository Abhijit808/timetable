const express =require('express');
const app = express();
const https =require('http');
const fs = require('fs');
const path = require('path');
const port = 8080
app.use(express.json()); 
app.use(express.static(path.join(__dirname ,"public")));
app.use(express.urlencoded({ extended: true }))
const postRoutes = require("./routes/post");
app.use('/post',postRoutes)
app.listen(port,()=>{
    console.log(`listening on port http://localhost:${port}`);
});