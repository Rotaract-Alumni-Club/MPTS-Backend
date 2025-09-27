const express = require('express');

const projectControllers = require("../Controllers/project.controller");

const router = express.Router();

router.post('/add', projectControllers.createProject);
router.get('/get', projectControllers.getAllProjects);
router.get('/:id', projectControllers.getProjectById);
router.get('/name/:PName', projectControllers.getProjectByName);
router.get('/status/:status', projectControllers.getProjectsByStatus);
router.get('/StartDate/:StartDate', projectControllers.getProjectsByStartDate);
router.get('/EndDate/:EndDate', projectControllers.getProjectsByEndDate);
router.get('/chairPerson/:chairPerson', projectControllers.getProjectsByChairPerson);


module.exports = router;
