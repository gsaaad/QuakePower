const filterByQuery = require("../../lib/filterByQuery");
const findById = require("../../lib/findById");
const filterUserDataById = require("../../lib/filterUserDataById");
const validateEarthquake = require("../../lib/validateEarthquake");
const createNewEarthquake = require("../../lib/createNewEarthquake");

const router = require("express").Router();
// userData
const uData = require("../../data/userArray.json");
// EMSC Data
const eData = require("../../data/EMSC.json");
const userData = uData.userData;
const emscData = eData.emscData;

// user can get EMSC Data
router.get("/earthquakes", (req, res) => {
  let earthquakeData = emscData;

  if (req.query) {
    earthquakeData = filterByQuery(req.query, earthquakeData);
  }
  res.json(earthquakeData);
});
router.get("/earthquakes/:id", (req, res) => {
  let earthquakeData = emscData;
  const result = findById(req.params.id, earthquakeData);
  if (result) {
    res.json(result);
  } else {
    res.send(404);
  }
});

// user can get userData, earthquake by ID, Posting Data
router.get("/userearthquakes", (req, res) => {
  let earthquakeData = userData;
  if (req.query) {
    earthquakeData = filterByQuery(req.query, earthquakeData);
  }
  res.json(earthquakeData);
});
router.get("/userearthquakes/:id", (req, res) => {
  let earthquakeData = userData;
  const result = filterUserDataById(req.params.id, earthquakeData);
  if (result) {
    res.json(result);
  } else {
    res.send(404);
  }
});
router.post("/userearthquakes", (req, res) => {
  console.log("posting Data");

  console.log("validating data");
  let earthquakeData = userData;
  console.log(req.body);
  if (!validateEarthquake(req.body)) {
    console.log("not validated!, check entries");
    res
      .status(400)
      .send(
        "The earthquake was not properly formatted.. Please check your entries and try again"
      );
  } else {
    console.log("validated!");
    const earthquake = createNewEarthquake(req.body, earthquakeData);
    res.json(earthquake);
  }
});

module.exports = router;
