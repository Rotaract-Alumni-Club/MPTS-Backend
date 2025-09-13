require('dotenv').config();
const express = require('express');

const router = require('./Routes/sample.route');

const app = express();

app.use('/sample',router);

app.listen(process.env.PORT,()=>{
    console.log(`Server Listen on Port ${process.env.PORT}`);
});

