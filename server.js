const express = require("express");
const fs = require("fs");
const path = require("path");
const { earthquakes } = require("./EMSC.json");
const { userData } = require("./data/userArray.json");
const filterByQuery = require("./filterByQuery");

//  app
const app = express();
// parse incoming data for POSTING data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON
app.use(express.json());

function findById(id, earthquakeArray) {
  const result = earthquakeArray.filter((earthquake) => earthquake.Eqid == id);
  return result;
}
// allow users to enter their own earthquake (will not be added to official data, user data is seperated)
function createNewEarthquake(body, EQArray) {
  const earthquake = body;

  EQArray.push(earthquake);

  // after we push to array, add to file
  fs.writeFileSync(
    path.join(__dirname, "./data/userArray.json"),
    JSON.stringify({ userData: userData }, null, 2)
  );
  return earthquake;
}
// function to validate user input
function validateEarthquake(earthquake) {
  // we need user to input Date, Time, Latitude, Longitude, Depth, Magnitude, Region

  if (!earthquake.Date || typeof earthquake.Date !== "string") {
    return false;
  }
  if (!earthquake["Time UTC"] || typeof earthquake["Time UTC"] !== "string") {
    return false;
  }
  if (
    (!earthquake.Latitude && !earthquake.Longitude) ||
    typeof earthquake.Latitude !== "number" ||
    typeof earthquake.Longitude !== "number"
  ) {
    return false;
  }
  if (!earthquake.Depth || typeof earthquake.Depth !== "number") {
    return false;
  }
  if (!earthquake.Magnitude || typeof earthquake.Magnitude !== "number") {
    return false;
  }
  if (!earthquake.Region || typeof earthquake.Region !== "string") {
    return false;
  } else {
    return true;
  }
}

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
// todo fix this GET method for users to see their  data inputed!
// TODO user based data (not necessarily important but allows users to get data)
// app.get("/api/userEarthquakes", (req,res)=>{
//   let userEarthquakes = userData;
//   if(req.query){

//   }
// })
app.post("/api/userEarthquakes", (req, res) => {
  // set id based on what the next index of the array will be
  req.body.id = userData.length.toString();

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

app.listen(3001, () => {
  console.log("Web server listening on port 3001!");
});
