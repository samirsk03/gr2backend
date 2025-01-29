const Job = require('../models/jobModel');

// Create a new job posting
exports.createJob = async (req, res) => {
  try {
    const job = new Job(req.body);
    await job.save();
    res.status(201).json({ message: 'Job posted successfully!' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Apply for a job
exports.applyForJob = async (req, res) => {
  try {
    const { jobId } = req.params;
    const { name, email, linkedInProfile, coverLetter, resume } = req.body; // Remove roleAppliedFor from input

    if (!name || !email || !linkedInProfile || !coverLetter || !resume) {
      return res.status(400).json({ message: 'All fields are required except roleAppliedFor!' });
    }

    const job = await Job.findById(jobId);
    if (!job) return res.status(404).json({ message: 'Job not found!' });

    // Automatically set roleAppliedFor as job title
    const roleAppliedFor = job.title;

    job.applicants.push({ name, email, linkedInProfile, coverLetter, roleAppliedFor, resume });
    await job.save();

    res.status(200).json({ message: 'Application submitted successfully!' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
