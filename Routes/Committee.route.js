const express = require('express');
const committeeController = require("../Controllers/Committee.controller");

const router = express.Router();

router.post('/committee',committeeController.addCommittee);
router.get('/committee',committeeController.getCommittees);
router.get('/committee/:id',committeeController.getCommitteesByID);
router.get('/committee/N/:name',committeeController.getCommitteesByName);
router.get('/committee/Co/:Coname',committeeController.getCommitteesByCoordinator);
router.get('/committee/Mem/:Count',committeeController.getCommitteesByMemCount);

module.exports = router;