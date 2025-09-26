const mongoose = require('mongoose');
const db = mongoose.connection.useDb("MPTS");

const taskSchema = new mongoose.Schema({
    TName:{type:String, required:true},
    Description:{type:String, required:true},
    AssignedTo:{type:String, required:true},
    Project:{type:String, required:true},
    Committee:{type:String, required:true},
    Status:{type:String },
    StartDate:{type:Date},
    EndDate:{type:Date}

});

const Task = db.model('Task', taskSchema);
module.exports = Task;
