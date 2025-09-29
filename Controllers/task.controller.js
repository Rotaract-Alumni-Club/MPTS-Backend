const TaskCollection = require('../Models/task.model');

exports.createTask = async (req, res) => {
    try {
        const taskData = req.body;
        const task = new TaskCollection(taskData);
        await task.save();
        res.status(200).send({ 
            message: 'Task created successfully', 
            data: task });
    } catch (error) {
        res.status(500).send({ 
            message: 'Error creating task', 
            error: error.message });
    }
};

exports.getAllTasks = async (req, res) => {
    try {
        const tasks = await TaskCollection.find();  
        res.status(200).send({
            message: 'Tasks retrieved successfully',
            data: tasks
        });
    }   catch (error) { 
        res.status(500).send({
            message: 'Error retrieving tasks',
            error: error.message
        });
    }   
};