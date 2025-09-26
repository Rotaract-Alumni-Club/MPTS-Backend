require('dotenv').config();
console.log('PORT:', process.env.PORT);
console.log('DB_URL:', process.env.DB_URL);
const express = require('express');
const connect = require('./Config/db');
const router = require('./Routes/sample.route');

const app = express();

app.use('/sample',router);

connect();

app.listen(process.env.PORT,()=>{
    console.log(`Server Listen on Port ${process.env.PORT}`);
});

