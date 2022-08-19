const express = require("express");
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");
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

app.listen(3001, () => {
  console.log("Web server listening on port 3001!");
});
