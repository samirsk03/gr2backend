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
    console.log("Request body:", req.body); // Log the request body

    const { title, description, requirements, postedAt } = req.body;

    // Validate the required fields
    if (!title || !description || !postedAt) {
      return res.status(400).json({
        error: "Please provide all required fields: title, description, postedAt.",
      });
    }

    const newCareer = new Career({
      title,
      description,
      requirements,
      postedAt,
    });

    await newCareer.save();
    res.status(201).json(newCareer);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error", message: error.message });
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
