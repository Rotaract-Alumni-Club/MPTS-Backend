const express = require('express');

const baseUserControllers = require("../Controllers/baseUser.controller");

const router = express.Router();

// Route to register a new user
router.post('/register', baseUserControllers.registerUser);

module.exports = router;