const userCollection = require('../Models/baseUser.model');

exports.registerUser = async (req, res) => {
    try {
        const userData = req.body;
        const user = new userCollection(userData);
        await user.save();
        res.status(200).send({ 
            message: 'User registered successfully', 
            data: user });
    } catch (error) {
        res.status(500).send({ 
            message: 'Error registering user', 
            error: error.message });
    }
};

exports.getAllUsers = async (req, res) => {
    try {
        const users = await userCollection.find();
        res.status(200).send({
            message: 'Users retrieved successfully',
            data: users
        });
    } catch (error) {
        res.status(500).send({
            message: 'Error retrieving users',
            error: error.message
        });
    }
};
