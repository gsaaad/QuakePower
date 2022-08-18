// allow users to enter their own earthquake (will not be added to official data, user data is seperated)
function createNewEarthquake(body, EQArray) {
  const earthquake = body;

  EQArray.push(earthquake);

  // after we push to array, add to file
  fs.writeFileSync(
    path.join(__dirname, "./data/userArray.json"),
    JSON.stringify({ userData: userData }, null, 2)
  );
  return earthquake;
}
module.exports = createNewEarthquake;
