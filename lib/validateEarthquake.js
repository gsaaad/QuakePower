// function to validate user input
function validateEarthquake(earthquake) {
  // we need user to input Date, Time, Latitude, Longitude, Depth, Magnitude, Region

  if (!earthquake.Date) {
    console.log("There's no date provided");
    return false;
  }
  if (!earthquake.Time) {
    console.log("There's no time provided");
    return false;
  }
  if (!earthquake.Latitude && !earthquake.Longitude) {
    console.log("There's no lat and long provided");
    return false;
  }
  if (!earthquake.Depth) {
    console.log("There's no depth provided");
    return false;
  }
  if (!earthquake.Magnitude) {
    console.log("There's no magnitude provided");
    return false;
  }
  if (!earthquake.Region) {
    console.log("There's no region provided");
    return false;
  } else {
    return true;
  }
}
module.exports = validateEarthquake;
