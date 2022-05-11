const mongoose = require('mongoose');
const connect_db = (connection_string)=>{
    return mongoose.connect(connection_string).then(()=>console.log("connected")).catch((err)=>{console.log(err);})
}
module.exports = connect_db