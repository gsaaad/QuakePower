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

// ! get api route earthquakes
app.get("/api/earthquakes", (req, res) => {
  let earthquakeData = earthquakes;
  if (req.query) {
    earthquakeData = filterByQuery(req.query, earthquakeData);
  }

  res.json(earthquakeData);
});
app.get("/api/earthquakes/:id", (req, res) => {
  let earthquakeData = earthquakes;
  const result = findById(req.params.id, earthquakeData);
  if (result) {
    res.json(result);
  } else {
    res.send(404);
  }
});
// todo fix this GET method for users to see their  data inputed!y
// app.get("/api/userEarthquakes", (req,res)=>{
//   let userEarthquakes = userData;
//   if(req.query){

//   }
// })
app.post("/api/userEarthquakes", (req, res) => {
  // set id based on what the next index of the array will be
  req.body.id = userData.length.toString();

  // add animal to json file and animals array in this function
  const earthquake = createNewEarthquake(req.body, userData);

  res.json(earthquake);
});

app.listen(3001, () => {
  console.log("Web server listening on port 3001!");
});
