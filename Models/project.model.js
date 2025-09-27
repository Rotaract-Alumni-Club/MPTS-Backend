const mongoose = require('mongoose');
const db = mongoose.connection.useDb("MPTS");

const projectSchema = new mongoose.Schema({
    PName : { type: String, required: true, unique: true },
    StartDate : { type: Date, required: true },
    EndDate : { type: Date, required: true },
    Description : { type: String, required: true },
    Status : { type: String, required: true },
}, { timestamps: true });

const Project = db.model('Project', projectSchema);
module.exports = Project;
