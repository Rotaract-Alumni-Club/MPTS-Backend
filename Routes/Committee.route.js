const express = require('express');
const committeeController = require("../Controllers/Committee.controller");

const router = express.Router();

router.post('/add',committeeController.addCommittee);
router.get('/get',committeeController.getCommittees);
router.get('/id/:id',committeeController.getCommitteesByID);
router.get('/name/:name',committeeController.getCommitteesByName);
router.get('/coordinator/:Coname',committeeController.getCommitteesByCoordinator);
router.get('/mem/:Count',committeeController.getCommitteesByMemCount);

module.exports = router;