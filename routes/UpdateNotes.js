const { mongoose, Student } = require('../db/mongodb.js');
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.json());

// Function to add a note to all students with a specific class
async function addNoteToClassStudents(subject, studentClass, note) {
  // Update all students with the matching class and push the new note
  await Student.updateMany({ studentClass: studentClass }, { $push: { [`notes.${subject}`]: note } });

  // Fetch all students with the updated values after the update
  const updatedStudents = await Student.find({ studentClass: studentClass });

  return updatedStudents;
}

// Route to add physics note to all students of a specific class
router.post("/physics", async (req, res) => {
  try {
    const studentClass = req.body.studentClass;
    const newPhysicsNote = {
      note_name: req.body.note_name,
      note_link: req.body.note_link,
    };

    const updatedStudents = await addNoteToClassStudents('phsyics', studentClass, newPhysicsNote);

    // Sending a success response with the updated students array
    res.status(200).json({ message: "Physics note added to all students of class successfully", data: updatedStudents });
  } catch (error) {
    // Handling errors if any occurred during the process
    console.error("Error adding physics note:", error);
    res.status(500).json({ message: "Failed to add physics note" });
  }
});

// Route to add chemistry note to all students of a specific class
router.post("/chemistry", async (req, res) => {
  try {
    const studentClass = req.body.studentClass;
    const newChemistryNote = {
      note_name: req.body.note_name,
      note_link: req.body.note_link,
    };

    const updatedStudents = await addNoteToClassStudents('chemistry', studentClass, newChemistryNote);

    // Sending a success response with the updated students array
    res.status(200).json({ message: "Chemistry note added to all students of class successfully", data: updatedStudents });
  } catch (error) {
    // Handling errors if any occurred during the process
    console.error("Error adding chemistry note:", error);
    res.status(500).json({ message: "Failed to add chemistry note" });
  }
});

// Route to add biology note to all students of a specific class
router.post("/biology", async (req, res) => {
  try {
    const studentClass = req.body.studentClass;
    const newBiologyNote = {
      note_name: req.body.note_name,
      note_link: req.body.note_link,
    };

    const updatedStudents = await addNoteToClassStudents('biology', studentClass, newBiologyNote);

    // Sending a success response with the updated students array
    res.status(200).json({ message: "Biology note added to all students of class successfully", data: updatedStudents });
  } catch (error) {
    // Handling errors if any occurred during the process
    console.error("Error adding biology note:", error);
    res.status(500).json({ message: "Failed to add biology note" });
  }
});

// Route to add geography note to all students of a specific class
router.post("/geography", async (req, res) => {
  try {
    const studentClass = req.body.studentClass;
    const newGeographyNote = {
      note_name: req.body.note_name,
      note_link: req.body.note_link,
    };

    const updatedStudents = await addNoteToClassStudents('geography', studentClass, newGeographyNote);

    // Sending a success response with the updated students array
    res.status(200).json({ message: "Geography note added to all students of class successfully", data: updatedStudents });
  } catch (error) {
    // Handling errors if any occurred during the process
    console.error("Error adding geography note:", error);
    res.status(500).json({ message: "Failed to add geography note" });
  }
});

// Route to add economics note to all students of a specific class
router.post("/economics", async (req, res) => {
  try {
    const studentClass = req.body.studentClass;
    const newEconomicsNote = {
      note_name: req.body.note_name,
      note_link: req.body.note_link,
    };

    const updatedStudents = await addNoteToClassStudents('economics', studentClass, newEconomicsNote);

    // Sending a success response with the updated students array
    res.status(200).json({ message: "Economics note added to all students of class successfully", data: updatedStudents });
  } catch (error) {
    // Handling errors if any occurred during the process
    console.error("Error adding economics note:", error);
    res.status(500).json({ message: "Failed to add economics note" });
  }
});

// Route to add civics note to all students of a specific class
router.post("/civics", async (req, res) => {
  try {
    const studentClass = req.body.studentClass;
    const newCivicsNote = {
      note_name: req.body.note_name,
      note_link: req.body.note_link,
    };

    const updatedStudents = await addNoteToClassStudents('civics', studentClass, newCivicsNote);

    // Sending a success response with the updated students array
    res.status(200).json({ message: "Civics note added to all students of class successfully", data: updatedStudents });
  } catch (error) {
    // Handling errors if any occurred during the process
    console.error("Error adding civics note:", error);
    res.status(500).json({ message: "Failed to add civics note" });
  }
});

// Route to add history note to all students of a specific class
router.post("/history", async (req, res) => {
  try {
    const studentClass = req.body.studentClass;
    const newHistoryNote = {
      note_name: req.body.note_name,
      note_link: req.body.note_link,
    };

    const updatedStudents = await addNoteToClassStudents('history', studentClass, newHistoryNote);

    // Sending a success response with the updated students array
    res.status(200).json({ message: "History note added to all students of class successfully", data: updatedStudents });
  } catch (error) {
    // Handling errors if any occurred during the process
    console.error("Error adding history note:", error);
    res.status(500).json({ message: "Failed to add history note" });
  }
});

module.exports = router;
