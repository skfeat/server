const express = require('express');
const app = express();
const cors = require('cors'); // Import the cors middleware

const signup = require('./routes/Signup');
const login = require('./routes/Login');
const allstudents = require('./routes/allstudents');
const profile = require('./routes/profile');
const updateresult = require('./routes/UpdateResult');
const getresult = require('./routes/getresult');
const previousresult = require('./routes/PreviousResult');
const notes = require('./routes/Notes');
const updatenotes = require('./routes/UpdateNotes');

app.use(cors()); // Enable CORS for all routes

app.use("/signup", signup);
app.use("/login", login);
app.use("/allstudents", allstudents);
app.use("/profile", profile);
app.use("/updateresult", updateresult);
app.use("/getresult", getresult);
app.use("/previousresult", previousresult);
app.use("/notes", notes);
app.use("/updatenotes", updatenotes);

app.listen(3006, () => {
  console.log("Server is running on port 3000");
});
