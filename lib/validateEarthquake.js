// function to validate user input
function validateEarthquake(earthquake) {
  // we need user to input Date, Time, Latitude, Longitude, Depth, Magnitude, Region

  if (!earthquake.Date || typeof earthquake.Date !== "string") {
    return false;
  }
  if (!earthquake["Time UTC"] || typeof earthquake["Time UTC"] !== "string") {
    return false;
  }
  if (
    (!earthquake.Latitude && !earthquake.Longitude) ||
    typeof earthquake.Latitude !== "number" ||
    typeof earthquake.Longitude !== "number"
  ) {
    return false;
  }
  if (!earthquake.Depth || typeof earthquake.Depth !== "number") {
    return false;
  }
  if (!earthquake.Magnitude || typeof earthquake.Magnitude !== "number") {
    return false;
  }
  if (!earthquake.Region || typeof earthquake.Region !== "string") {
    return false;
  } else {
    return true;
  }
}
module.exports = validateEarthquake;
