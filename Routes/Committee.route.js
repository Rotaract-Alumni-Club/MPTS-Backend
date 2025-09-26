const committeeController = require('../Controllers/Committee.controller');
const express = require('express');
const router = express.Router();

router.post('/add-Committee',committeeController.addCommittee);

module.exports = router;