const Job = require('../models/jobModel');
const Applicant = require('../models/applicantsModel')

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
// ****need to upload pdf 
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

    const applicants = Applicant({ name, email, linkedInProfile, coverLetter, roleAppliedFor: job.title , resume });
    await applicants.save();

    res.status(200).json({ message: 'Application submitted successfully!' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// delete single job 
exports.deleteJob = async (req, res) => {
  try {
    const {jobId} = req.params ;

    const job = await Job.findByIdAndDelete(jobId);
    if(!job) {
      return res.status(404).json({message: "job did not found"});
    } else res.status(200).json({message: 'job deleted successfully'})
  } catch (error) {
    res.status(500).json({error : error.message});
  }
}


// Fetch all jobs
exports.getAllJobs = async (req, res) => {
  try {
    const job = await Job.find().sort({ createdAt: -1 }); // Fetch job sorted by newest first
    res.status(200).json(job);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// fetch all applicants
exports.getAllApplicants = async (req, res) => {
  try {
    const allApplicants = await Applicant.find().sort({appliedAt: -1})
    res.status(200).json(allApplicants);
  } catch (error){
    res.status(500).json({ error: error.message });
  }
}

// delete applicant by id 
exports.deleteApplicant = async (req, res) => {
  try {
    const {applicantId} = req.params;

    const applicant = await Applicant.findByIdAndDelete(applicantId);
    if(!applicant) {
      return res.status(404).json({message: "applicant did not found"});
    } else res.status(200).json({message: 'applicant deleted successfully'})
  } catch (error) {
    res.status(500).json({error : error.message});
  
  }
}