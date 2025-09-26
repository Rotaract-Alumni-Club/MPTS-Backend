const mongoose = require('mongoose');
const db = mongoose.connection.useDb("MPTS");


const committeeSchema = new mongoose.Schema({
    CName : { type: String, required: true, unique: true },
    Description : { type: String, required: true },
    Coordinator : { type: String, required: true },
    MemberCount: {type:Number, required:true}
}, { timestamps: true });

const Committee = db.model('Committee', committeeSchema);
module.exports = Committee;