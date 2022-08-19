// allow user to creat their own earthquake and push to userArray JSON file

const fs = require("fs");
const path = require("path");

function createNewEarthquake(body, EQArray) {
  const earthquake = body;

  EQArray.push(earthquake);

  // after we push to array, add to file
  fs.writeFileSync(
    path.join(__dirname, "../data/userArray.json"),
    JSON.stringify({ userData: EQArray }, null, 2)
  );
  return earthquake;
}
module.exports = createNewEarthquake;
