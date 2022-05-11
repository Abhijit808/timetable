const mongoose = require('mongoose');
const facultyNames = new mongoose.Schema({

    facutyname:{
           type:[]
        },
        subject1:{
            type:[]
        },
        subject2:{
            type:[]
        }
})
module.exports=mongoose.model("FacultyName",facultyNames);