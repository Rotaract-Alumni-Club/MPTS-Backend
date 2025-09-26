require('dotenv').config();
const express = require('express');
const connect = require('./Config/db');
const router = require('./Routes/sample.route');

const app = express();

app.use('/sample',router);

connect();

const routers =require('./Routes/Committee.route');
app.use('/add/new',routers);

app.use(express.json());

app.listen(process.env.PORT,()=>{
    console.log(`Server Listen on Port ${process.env.PORT}`);
});


