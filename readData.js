const fs = require("fs");

const readData = () => {
  fs.readFile("./data/EMSC_2004_2022_6MAG.csv", "utf8", (err, data) => {
    if (!err) {
      var rawData = data;
      // console.log(rawData);
      rawData = rawData.replaceAll(",", "");
      rawData = rawData.replaceAll(";", ",");

      fs.writeFileSync("EMSC_2004_2022_6MAG.csv", rawData);
    } else {
      console.error(err);
    }
  });
};
module.exports = readData();
