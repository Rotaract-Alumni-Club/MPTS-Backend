require('dotenv').config();
console.log('PORT:', process.env.PORT);
console.log('DB_URL:', process.env.DB_URL);
const express = require('express');
const connect = require('./Config/db');

const app = express();
app.use(express.json());

const router = require('./Routes/sample.route');
const routers =require('./Routes/Committee.route');
const baseUserRoute = require('./Routes/baseUser.route');
const projectRoute = require('./Routes/project.route');

app.use('/sample',router);
app.use('/api/user', baseUserRoute);
app.use('/api/committee',routers);
app.use('/api/project', projectRoute);

connect();

app.listen(process.env.PORT,()=>{
    console.log(`Server connected to Port ${process.env.PORT}`);
});


