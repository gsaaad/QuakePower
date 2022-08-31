const express = require("express");
const mongoose = require("mongoose");
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");
require("dotenv").config();
//  app
const app = express();

// parse incoming data for POSTING data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON
app.use(express.json());
// use middleware static
app.use(express.static("public"));

// api routes
app.use("/api", apiRoutes);
// frontend routes
app.use("/", htmlRoutes);

// mongoose/mongoDB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost:27017/earthquakes",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
mongoose.set("debug", true);

app.listen(3001, () => {
  console.log("Web server listening on port 3001!");
});
