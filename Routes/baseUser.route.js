const express = require('express');

const baseUserControllers = require("../Controllers/baseUser.controller");

const router = express.Router();

// Route to register a new user
router.post('/user', baseUserControllers.registerUser);
router.get('/user', baseUserControllers.getAllUsers);

module.exports = router;