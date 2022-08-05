// const request = require("request-promise");
const cheerio = require("cheerio");
import fetch from "node-fetch";
// const url =
//   "https://earthquake.usgs.gov/earthquakes/map/?extent=-20.30342,-140.80078&extent=71.46912,-49.04297&sort=largest";
const url = "https://en.wikipedia.org/wiki/Lists_of_earthquakes";

// async function scrapeWebPage(url) {
//   const response = await request.get(url);
//   const $ = cheerio.load(response);
//   console.log($);
// }
// scrapeWebPage(url);

const getRawData = (URL) => {
  return fetch(URL)
    .then((response) => {
      response.text();
    })
    .then((data) => {
      return data;
    });
};

const getEarthquakes = async () => {
  const earthquakesData = await getRawData(url);
  console.log(earthquakesData);
};
getEarthquakes();
