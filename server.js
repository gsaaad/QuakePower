const express = require("express");
const path = require("path");
const { earthquakes } = require("./earthquakes");
const filterByQuery = require("./filterByQuery");
//  app
const app = express();
// static public
// const staticFilesPath = path.join(__dirname, "public");
// middle ware
// const staticFilesMiddleWare = express.static(staticFilesPath);
// app.use("/", staticFilesMiddleWare);

// ! get api route earthquakes
app.get("/api/earthquakes", (req, res) => {
  // res.send("am i the only one shaking?");
  let earthquakeData = earthquakes;
  if (req.query) {
    earthquakeData = filterByQuery(req.query, earthquakeData);
  }
  console.log(req.query);

  res.json(earthquakeData);
});

app.listen(3001, () => {
  console.log("Web server listening on port 3001!");
});
