const express = require("express");
const route = express.Router();
const fs = require('fs');
const path = require('path');
route.use(express.static(path.join(__dirname,'..','public')))
route.post("/BranchNames",(req,res)=>{
    const b = req.body;
    const a =fs.writeFileSync('abc.txt',JSON.stringify(b));
    // res.send("done!!!")
    res.status(200).sendFile(path.join(__dirname,'..','public','courses.html'));
});
route.post("/courses",(req,res)=>{
    const b = req.body;
    const a =fs.writeFileSync('abcd.txt',JSON.stringify(b));
    // res.send("done!!!")
    res.status(200).sendFile(path.join(__dirname,'..','public','facultynames.html'));
});
route.post("/faculty",(req,res)=>{
    const b = req.body;
    const a =fs.writeFileSync('abcde.txt',JSON.stringify(b));
    res.send("creating timetable")
});

module.exports= route