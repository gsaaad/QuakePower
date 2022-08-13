const fs = require("fs");

const readData = () => {
  fs.readFile("./data/export_EMSC (2).csv", "utf8", (err, data) => {
    if (!err) {
      var rawData = data;
      // console.log(rawData);
      rawData = rawData.replaceAll(",", "");
      rawData = rawData.replaceAll(";", ",");

      fs.writeFileSync("EMSC.csv", rawData);
    } else {
      console.error(err);
    }
  });
};
module.exports = readData();
