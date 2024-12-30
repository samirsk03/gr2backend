import { Schema, model } from "mongoose";

const FormSchema = new Schema({
  name: String,
  email: String,
  message: String,
});

export default model("Form", FormSchema, "Form");
