import { Router } from "express";
import mongoose from "mongoose";
import Form from '../models/Form.js';

const router = Router();

router.get("/", async (req, res) => {
  try {
   
    // Get the actual documents
    const forms = await Form.find();

    res.status(200).json(forms);
  } catch (err) {
    console.error('Error:', err);
    res.status(500).json({ error: err.message });
  }
});

// Your existing POST route
router.post("/", async (req, res) => {
  try {
    const newForm = new Form(req.body);
    await newForm.save();
    res.status(201).json({ message: "Form submitted successfully!" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;