const path = require("path");
const router = require("express").Router();

// main page with earthquake Form
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/index.html"));
});

router.get("/userearthquakes", (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/userearthquakes.html"));
});
router.get("/deadliest", (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/deadliestearthquakes.html"));
});
router.get("/largest", (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/largestearthquakes.html"));
});
router.get("/earthquakes", (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/earthquakes.html"));
});
router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/index.html"));
});
module.exports = router;
