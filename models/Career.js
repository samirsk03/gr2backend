import { Schema, model } from "mongoose";

const CareerSchema = new Schema({
  title: String,
  description: String,
  requirements: [String],
  postedAt: { type: Date, default: Date.now },
});

export default model("Careers", CareerSchema);
