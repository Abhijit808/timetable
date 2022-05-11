const schema = require('../db/schema');
const courseschema =require('../db/schema_1')
const facultyschema =require('../db/schema_2')
const path = require('path');
async function Branchname(req,res) {
    const b = req.body;
        try{
            const newcourse = await schema.create(b)
            console.log(newcourse);
            res.status(200).sendFile(path.join(__dirname,'..','public','courses.html'));
        }
        catch(err){
            res.status(500).send("server error!!");
            console.log(err);
        }
}
async function CourseName(req,res){
        const b = req.body;
        try {
        const newSchema1 = await courseschema.create(b)
        console.log(newSchema1);
        res.status(200).sendFile(path.join(__dirname,'..','public','timetabledetails.html'));
        
    } catch (error) {
        res.status(500).send("server error!!");
        console.log(error);
    }
}
async function FacultyName(req,res){
        const b = req.body;
        try {
        const newSchema2 = await  facultyschema.create(b)
        console.log(newSchema2);
        console.log(b);
        res.status(200).json(newSchema2);
        
    } catch (error) {
        res.status(500).send("server error!!");
        console.log(error);
    }
}

module.exports={
    Branchname,
    CourseName,
    FacultyName
}