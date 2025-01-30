const express = require('express');
const { createJob, applyForJob, getAllJobs, getAllApplicants ,deleteJob , deleteApplicant} = require('../controllers/jobController');
const router = express.Router();

router.post('/create', createJob); //create a single job
router.post('/apply/:jobId', applyForJob); //apply for a job
router.get('/alljobs' , getAllJobs); //fetch all job
router.post('/deleteJob/:jobId' , deleteJob); //delete all job


// fetch all applicants
router.get('/allApplicants', getAllApplicants);

router.post('/deleteApplicant/:applicantId' , deleteApplicant); //delete all job



module.exports = router;
