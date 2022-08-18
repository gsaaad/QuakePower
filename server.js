const express = require("express");
const path = require("path");
const { earthquakes } = require("./EMSC.json");
const { userData } = require("./data/userArray.json");
const filterByQuery = require("./lib/filterByQuery");
const createNewEarthquake = require("./lib/createNewEarthquake");
const validateEarthquake = require("./lib/validateEarthquake");
const findById = require("./lib/findById");
//  app
const app = express();
// parse incoming data for POSTING data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON
app.use(express.json());
// use middleware static
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

// todo this is EMSC DATA
// ! get api route earthquakes
app.get("/api/earthquakes", (req, res) => {
  let earthquakeData = earthquakes;
  if (req.query) {
    earthquakeData = filterByQuery(req.query, earthquakeData);
  }

  res.json(earthquakeData);
});
// todo EMSC DATA
app.get("/api/earthquakes/:id", (req, res) => {
  let earthquakeData = earthquakes;
  const result = findById(req.params.id, earthquakeData);
  if (result) {
    res.json(result);
  } else {
    res.send(404);
  }
});

app.get("/api/userearthquakes", (req, res) => {
  let earthquakeData = userData;
  console.log("hello user data");
  if (req.query) {
    earthquakeData = filterByQuery(req.query, earthquakeData);
  }
  res.json(earthquakeData);
});
app.post("/api/userearthquakes", (req, res) => {
  console.log("posting data!");
  // set id based on what the next index of the array will be
  req.body.id = userData.length.toString();
  console.log("triggered here, going to validate earthquake");

  if (!validateEarthquake(req.body)) {
    res
      .status(400)
      .send(
        "The earthquake was not properly formatted.. Please check your entries and try again.."
      );
  } else {
    // add animal to json file and animals array in this function
    const earthquake = createNewEarthquake(req.body, userData);
    res.json(earthquake);
  }
});
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.listen(3001, () => {
  console.log("Web server listening on port 3001!");
});
