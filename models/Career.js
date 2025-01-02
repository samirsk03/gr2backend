import mongoose from "mongoose";

const CareerSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  requirements: {
    type: [String], // Array of strings
    default: [],    // Empty array if not provided
  },
  postedAt: {
    type: Date,
    required: true,
  },
});

export default mongoose.model("Careers", CareerSchema);
