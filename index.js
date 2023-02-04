const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
require("./db/config");
const Data = require("./db/Data");
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cors());
app.use(express.json());
app.use(express.static("public"));
app.get("/", async (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.get("/login", async (req, res) => {
  res.sendFile(__dirname + "/login.html");
});
app.get("/course", async (req, res) => {
  res.sendFile(__dirname + "/course.html");
});
app.post("/login", async (req, res) => {
  if (req.body.username === "admin" && req.body.password === "password") {
    res.sendFile(__dirname + "/course.html");
  } else {
    res.send({ result: "No user found" });
  }
});
app.post("/course", async (req, res) => {
  var courseData = {
    course: req.body.course,
    link: req.body.link,
  };
  new Data(courseData).save();
});

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3001;
}
app.listen(port, function () {
  console.log(`Server started successfully ${port}`);
});
