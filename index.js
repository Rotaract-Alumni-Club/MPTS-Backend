require('dotenv').config();
const express = require('express');
const connect = require('./Config/db');

const app = express();
app.use(express.json());

const router = require('./Routes/sample.route');
const routers =require('./Routes/Committee.route');
const baseUserRoute = require('./Routes/baseUser.route');
const taskRoute = require('./Routes/task.route');
const projectRoute = require('./Routes/project.route');

app.use('/api/task',taskRoute);
app.use('/sample',router);
app.use('/api/user', baseUserRoute);
app.use('/api/committee',routers);
app.use('/api/project', projectRoute);

connect();

app.listen(5000,()=>{
    console.log(`Server Listen on Port ${process.env.PORT}`);
});


