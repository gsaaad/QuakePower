const fs = require("fs");

// const data = [
//   ["rahul", "delhi", "accounts dept"],
//   ["rajeev", "UP", "sales dept"],
// ];
var csv = wikiTable
  .map(function (d) {
    return JSON.stringify(d);
  })
  .join("\n")
  .replace(/(^\[)|(\]$)/gm, "");
console.log(csv);
fs.writeFileSync("sample.csv", csv);
// !faster
// const data = [
//     ["rahul", "delhi", "accounts dept"],
//     ["rajeev", "UP", "sales dept"]
// ];
// let csvContent = "data:text/csv;charset=utf-8,"
//     + data.map(e => e.join(",")).join("\n");
