const filterByQuery = require("../../lib/filterByQuery");
const findById = require("../../lib/findById");
const filterUserDataById = require("../../lib/filterUserDataById");
const validateEarthquake = require("../../lib/validateEarthquake");
const createNewEarthquake = require("../../lib/createNewEarthquake");
const filterDeadliest = require("../../lib/filterDeadliest");

const router = require("express").Router();
// userData
const uData = require("../../data/userArray.json");
// EMSC Data
const eData = require("../../data/EMSC.json");
// deadliest Data
const dData = require("../../data/deadliest.json");
// largest data
const lData = require("../../data/largest.json");
const userData = uData.userData;
const emscData = eData.emscData;
const deadliestData = dData.deadliest;
const largestData = lData.largest;

// !user can get EMSC Earthquake Data
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
    console.log("this is result", result);
    res.json(result);
  } else {
    res.send(404);
  }
});

// !user can get Largest earthquake Data
router.get("/largest", (req, res) => {
  let earthquakeData = largestData;

  // if there's a query, search by query
  res.json(earthquakeData);
});
// !user can get deadliest Earthquake Data
router.get("/deadliest", (req, res) => {
  let earthquakeData = deadliestData;
  // if there's a query, search by query
  if (req.query) {
    earthquakeData = filterDeadliest(req.query, earthquakeData);
  }

  res.json(earthquakeData);
});
router.get("/deadliest/:id", (req, res) => {
  let earthquakeData = deadliestData;

  const result = filterUserDataById(req.params.id, earthquakeData);

  if (result) {
    res.json(result);
  } else {
    res.send(404);
  }
});

// !user can get userData, earthquake by ID, Posting Data
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
