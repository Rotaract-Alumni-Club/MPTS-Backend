const mongoose = require('mongoose');
const db = mongoose.connection.useDb('MPTS');

const taskSchema = new mongoose.Schema({
    Status:{type:String

    },
    StartDate:{type:Date},
    EndDate:{type:Date}

});

const Task = db.model('Task', taskSchema);
module.exports = Task;
