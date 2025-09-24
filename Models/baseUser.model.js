const mongoose = require('mongoose');

const baseUserSchema = new mongoose.Schema({
    indexNo:{type:String, required:true, unique:true},
    email:{type:String, required:true, unique:true},
    password:{type:String, required:true},
    name:{type:String, required:true},
    faculy:{type:String, required:true},
    batch:{type:String, required:true},
    contactNO:{type:String, required:true},
    experience:{type:String}
});

const BaseUser = mongoose.model('BaseUser', baseUserSchema);

module.exports = BaseUser;