const mongoose = require('mongoose');

const URL = process.env.DB_URL

const connectDB = async () => {
    try {
        await mongoose.connect(URL);
        console.log("MongoDB Connected");
    } catch (e) {
        console.log(e);
    }
}

module.exports = connectDB;