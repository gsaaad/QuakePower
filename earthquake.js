// const request = require("request-promise");
const cheerio = require("cheerio");
const fetch = require("node-fetch");
const fs = require("fs");
// const url =
//   "https://earthquake.usgs.gov/earthquakes/map/?extent=-20.30342,-140.80078&extent=71.46912,-49.04297&sort=largest";
// const url = "https://en.wikipedia.org/wiki/Lists_of_earthquakes";
const url =
  "https://www.usgs.gov/programs/earthquake-hazards/science/20-largest-earthquakes-world";
const fetchData = async (URL) => {
  await fetch(URL)
    .then((response) => response.text())
    .then((data) => {
      // fs.writeFileSync("earthquakesGOV.text", data);
      const $ = cheerio.load(data);
      // console.log($("table").html());
      const table = $("table").text();

      console.log(table.split("\n"));
      const tablearray = table.split("\n");
      const filteredArray = [];
      tablearray.forEach((word) => {
        if (word.length >= 1) {
          filteredArray.push(word);
        }
      });
      console.log(filteredArray);
      // fs.writeFileSync("tableData.txt", table);
    });
};
fetchData(url);
