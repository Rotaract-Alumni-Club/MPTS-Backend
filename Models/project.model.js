const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    PName : { type: String, required: true, unique: true },
    StartDate : { type: Date, required: true },
    EndDate : { type: Date, required: true },
    Description : { type: String, required: true },
    Status : { type: String, required: true },
}, { timestamps: true });

const Project = mongoose.model('Project', projectSchema);
module.exports = Project;