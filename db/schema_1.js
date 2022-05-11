const mongoose = require('mongoose');

const newSchema1 = new mongoose.Schema({
    CourseName:[{}]
});
module.exports = mongoose.model("coursename",newSchema1);