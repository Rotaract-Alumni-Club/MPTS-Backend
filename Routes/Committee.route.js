const express = require('express');
const router = express.Router();
const committeeController = require('../Controllers/committee.controller');



router.post('/add', committeeController.addCommittee);
router.get('/all', committeeController.getCommittees);
router.get('/:id', committeeController.getCommitteeById);


router.get('/project/:projectId', committeeController.getCommitteesByProject);

router.get('/user/my-committees', committeeController.getUserCommittees);

router.post('/:id/members', committeeController.addMember);
router.delete('/:id/members', committeeController.removeMember);

router.get('/name/:name', committeeController.getCommitteesByName);
router.get('/coordinator/:Coname', committeeController.getCommitteesByCoordinator);
router.get('/count/:Count', committeeController.getCommitteesByMemCount);

module.exports = router;