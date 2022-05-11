const express =require('express');
const app = express();
const https =require('http');
const fs = require('fs');
const path = require('path');
 const connected = require('./db/branchnameSchema');
require('dotenv').config();
const port = 7000
app.use(express.json()); 
app.use(express.static(path.join(__dirname ,"public")));
app.use(express.urlencoded({ extended: true }))
const postRoutes = require("./routes/post");
const connect_db = require('./db/branchnameSchema');
app.use('/post',postRoutes)
const server = async()=>{
    try {
        await connect_db(process.env.MONGOOSE);
        app.listen(port,()=>{
            console.log(`listening on port http://localhost:${port}`);
        });
    } catch (error) {
        console.log(error);
    }
}
server();