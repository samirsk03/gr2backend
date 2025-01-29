const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  applicants: [
    {
      name: { type: String, required: true },
      email: { type: String, required: true },
      number: {type: Number},
      linkedInProfile: { type: String, required: true },
      coverLetter: { type: String, required: true },
      roleAppliedFor: { type: String},
      resume: { type: String } // Link to the uploaded resume
    }
  ],
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Job', jobSchema);
    