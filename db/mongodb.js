// app.js
const { default: mongoose } = require("mongoose");
const Student = require('./schema.js');

// Connect to MongoDB
mongoose.connect("mongodb+srv://bravebrowser1775:1775@cluster0.diayrzp.mongodb.net/", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Export the `mongoose` object and the `Student` model
module.exports = {
  mongoose,
  Student,
};
