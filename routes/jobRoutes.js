const express = require('express');
const { createJob, applyForJob, getAllJobs } = require('../controllers/jobController');
const router = express.Router();

router.post('/create', createJob);
router.post('/apply/:jobId', applyForJob);
router.get('/all' , getAllJobs);

module.exports = router;
