require('dotenv').config();
const express = require('express');
const connect = require('./Config/db');

const app = express();
app.use(express.json());

const router = require('./Routes/sample.route');
const routers =require('./Routes/Committee.route');

app.use('/sample',router);

connect();

app.use('/api/new',routers);



app.listen(process.env.PORT,()=>{
    console.log(`Server Listen on Port ${process.env.PORT}`);
});


