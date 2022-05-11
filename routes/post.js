const express = require("express");
const route = express.Router();
const controller = require('../controllers/routecontrollers')
const fs = require('fs');
const path = require('path');
route.use(express.static(path.join(__dirname,'..','public')))
route.use(express.json()); 
route.post("/BranchNames",controller.Branchname);
route.post("/courses",controller.CourseName);
route.post("/faculty",controller.FacultyName);
module.exports= route