const earthquakeData = require("../data/deadliest.json");

let data = earthquakeData.deadliest;
console.log(data.length);

for (let i = 0; i < data.length; i++) {
  data[i].id = i + 1;
}
console.log(data);
