const express = require('express');
const committeeController = require("../Controllers/Committee.controller");

const router = express.Router();

router.post('/committee',committeeController.addCommittee);

module.exports = router;