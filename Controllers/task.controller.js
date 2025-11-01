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

exports.getTaskById = async (req, res) => {
    const id = req.params.id;
    try{
        const task = await TaskCollection.findById(id);
        res.status(200).send({
            message: "Task received successfully",
            data: task
        });
    } catch (error) {
        res.status(500).send({
            message: 'Error retrieving task',
            error: error.message
        }); 
    }
};

exports.getTaskByName =async (req, res) => {
    const name = req.params.name;
    try{
        const task = await TaskCollection.find({TName:name});
        res.status(200).send({
            message: "Task received successfully",
            data: task
        });
    } catch (error) {
        res.status(500).send({
            message: 'Error retrieving task',
            error: error.message
        });
    }
};

exports.getTaskByAssignedMember = async (req, res) => {
    const member = req.params.assignedMember;
    try{
        const task = await TaskCollection.find({AssignedTo:member});
        res.status(200).send({
            message: "Task received successfully",
            data: task
        });
    } catch (error) {
        res.status(500).send({
            message: 'Error retrieving task',
            error: error.message
        });
    }
};

exports.getTaskByProject = async (req, res) => {
    const project = req.params.project;
    try{
        const task = await TaskCollection.find({Project:project});
        res.status(200).send({
            message: "Task received successfully",
            data: task
        });
    } catch (error) {
        res.status(500).send({
            message: 'Error retrieving task',
            error: error.message
        });
    }
};

exports.getTaskByCommittee = async (req, res) => {
    const committee = req.params.committee;
    try{
        const task = await TaskCollection.find({Committee:committee});
        res.status(200).send({
            message: "Task received successfully",
            data: task
        });
    } catch (error) {
        res.status(500).send({
            message: 'Error retrieving task',
            error: error.message
        });
    }
};

exports.getTaskByStatus = async (req, res) => {
    const status = req.params.status;
    try{
        const task = await TaskCollection.find({Status:status});
        res.status(200).send({
            message: "Task received successfully",
            data: task
        });
    } catch (error) {
        res.status(500).send({
            message: 'Error retrieving task',
            error: error.message
        });
    }
};

exports.getTaskByStartDate = async (req, res) => {
    const startDate = req.params.startDate;
    try{
        const task = await TaskCollection.find({StartDate:startDate});
        res.status(200).send({
            message: "Task received successfully",
            data: task
        });
    } catch (error) {
        res.status(500).send({
            message: 'Error retrieving task',
            error: error.message
        });
    }
};

exports.getTaskByEndDate = async (req, res) => {
    const endDate = req.params.endDate;
    try{
        const task = await TaskCollection.find({EndDate:endDate});
        res.status(200).send({
            message: "Task received successfully",
            data: task
        });
    } catch (error) {
        res.status(500).send({
            message: 'Error retrieving task',
            error: error.message
        });
    }
};

exports.updateAssignedMembers = async (req, res) => {
    const { id } = req.params;
    const { AssignedTo } = req.body; // Expecting an array of member names
    try {
        const task = await TaskCollection.findByIdAndUpdate(
            id,
            { AssignedTo },
            { new: true }
        );
        res.status(200).send({
            message: "Assigned members updated successfully",
            data: task
        });
    } catch (error) {
        res.status(500).send({
            message: "Error updating assigned members",
            error: error.message
        });
    }
};