const mongoose = require('mongoose');

const newSchema = new mongoose.Schema({
       BranchName:[{}]
});
module.exports = mongoose.model("branchname",newSchema);