const { mongoose, Student } = require('../db/mongodb.js');
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.json());

router.post("/", async (req, res) => {
  try {
    const roll = req.body.roll;
    const newResult = {
      Exam_Type: req.body.examtype,
      Exam_Date: req.body.examdate,
      Full_Marks: req.body.fullmarks,
      Obtained_Marks: req.body.marks,
    };
    await Student.updateOne({ roll: roll }, { $push: { results: newResult } });
    res.status(200).json({ message: "Result added successfully" });
  } catch (error) {
    console.error("Error adding result:", error);
    res.status(500).json({ message: "Failed to add result" });
  }
});

module.exports = router;
