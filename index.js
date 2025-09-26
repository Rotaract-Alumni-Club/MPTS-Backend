require('dotenv').config();
const express = require('express');
const connect = require('./Config/db');

const app = express();
app.use(express.json());

const router = require('./Routes/sample.route');
const routers =require('./Routes/Committee.route');
const baseUserRoute = require('./Routes/baseUser.route');

app.use('/sample',router);
app.use('/api/add', baseUserRoute);
app.use('/api/get', baseUserRoute);

app.use('/api/new',routers);

connect();

app.listen(process.env.PORT,()=>{
    console.log(`Server Listen on Port ${process.env.PORT}`);
});


