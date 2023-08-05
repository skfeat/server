const { mongoose, Student } = require('../db/mongodb.js');
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.json());

router.get("/", async (req, res) => {
  try {
    const roll = req.body.roll;

    const student = await Student.findOne({ roll: roll });

    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }
    const notes = student.notes;
    res.status(200).json(notes);
  } catch (error) {
    console.error("Error fetching notes:", error);
    res.status(500).json({ message: "Failed to get notes" });
  }
});

module.exports = router;
