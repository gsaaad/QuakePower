const express = require("express");
const path = require("path");
const { earthquakes } = require("./EMSC.json");
const filterByQuery = require("./filterByQuery");
//  app
const app = express();
// static public
// const staticFilesPath = path.join(__dirname, "public");
// middle ware
// const staticFilesMiddleWare = express.static(staticFilesPath);
// app.use("/", staticFilesMiddleWare);

function findById(id, earthquakeArray) {
  const result = earthquakeArray.filter((earthquake) => earthquake.Eqid == id);
  return result;
}

// ! get api route earthquakes
app.get("/api/earthquakes", (req, res) => {
  // res.send("am i the only one shaking?");
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

app.listen(3001, () => {
  console.log("Web server listening on port 3001!");
});
