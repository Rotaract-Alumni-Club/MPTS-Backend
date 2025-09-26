require('dotenv').config();
const express = require('express');
const connect = require('./Config/db');

const app = express();

const router = require('./Routes/sample.route');
const baseUserRoute = require('./Routes/baseUser.route');



app.use('/sample',router);
app.use('/api/user', baseUserRoute);


connect();

app.listen(process.env.PORT,()=>{
    console.log(`Server Listen on Port ${process.env.PORT}`);
});

