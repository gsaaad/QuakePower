const request = require("request-promise");
const file = require("./fileUse");
const url =
  "https://earthquake.usgs.gov" +
  "/earthquakes/feed/v1.0/summary/significant_month.geojson";

//   handle errors
const errorHandler = (error) => {
  console.error("There was an error", +error);
};

file
  .read("./earthquakes.csv")
  .then((textData) => {
    console.log(textData.slice(0, 526));
  })
  .catch(errorHandler);

//   request data
// request
//   .get(url)
//     console.table(response);
//   })
//   .catch(errorHandler);
