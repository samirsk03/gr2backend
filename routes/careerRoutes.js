import { Router } from "express";
const router = Router();
import Career from "../models/Career.js";

// , { find, findByIdAndUpdate, findByIdAndDelete } 

// CRUD Operations
// GET: All Careers
router.get("/", async (req, res) => {
  try {
    const careers = await Career.find();
    res.status(200).json(careers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST: Add a Career
router.post("/", async (req, res) => {
  try {
    const newCareer = new Career(req.body);
    await newCareer.save();
    res.status(201).json({ message: "Career added successfully!" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// PUT: Update a Career
router.put("/:id", async (req, res) => {
  try {
    const updatedCareer = await Career.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedCareer);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE: Remove a Career
router.delete("/:id", async (req, res) => {
  try {
    await Career.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Career deleted successfully!" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
