const express = require("express");

const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");
require("dotenv").config();
//  app
const app = express();
const PORT = process.env.PORT || 3001;

// parse incoming data for POSTING data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON
app.use(express.json());
// use middleware static
app.use(express.static("public"));

// !api routes and html NODE ONLY APPLICATION
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

app.listen(PORT, () => {
  console.log(`Web server listening on port ${PORT}!`);
});
