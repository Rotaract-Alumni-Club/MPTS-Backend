const experss = require("express");
const taskController = require("../Controllers/task.controller");

const taskrouter = experss.Router();

taskrouter.post('/create', taskController.createTask);
taskrouter.get('/get', taskController.getAllTasks);
