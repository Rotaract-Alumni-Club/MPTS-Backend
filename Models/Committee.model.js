const mongoose = require('mongoose');

const committeeSchema = new mongoose.Schema({
    CName : { type: String, required: true, unique: true },
    Description : { type: String, required: true },
    Coordinator : { type: String, required: true },
    MemberCount: {type:Number, required:true}
}, { timestamps: true });

module.exports = committeeSchema;