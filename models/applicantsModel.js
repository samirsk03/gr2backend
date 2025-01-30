const mongoose = require('mongoose');

const applicantSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    number: {type: Number},
    linkedInProfile: { type: String, required: true },
    coverLetter: { type: String, required: true },
    roleAppliedFor: { type: String},
    resume: { type: String } ,// Link to the uploaded resume
    appliedAt: {type: Date, default: Date.now }
})

module.exports = mongoose.model('Applicant', applicantSchema);