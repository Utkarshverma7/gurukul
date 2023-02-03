const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  course: String,
  link: String,
});

module.exports = mongoose.model("datas", dataSchema);