import express from "express";
const router = express.Router();

import Applicant from "../models/applicants.js";

// get request to get all the applicants
router.get("/", async (req, res) => {
  try {
    const applicants = await Applicant.find();
    res.status(200).json(applicants);
  } catch (error) {
    res.status(500).json({ message: "Error getting applicants" });
  }
});

// post request to submit the application
router.post("/", async (req, res) => {
  try {
    const { fullName, experience, skills, education, email } = req.body;
    const applicant = new Applicant({
      fullName,
      experience,
      skills,
      education,
      email,
    });
    await applicant.save();
    res.status(201).json({ message: "Application submitted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error submitting application" });
  }
});

export default router;
