const { Schema, model } = require("mongoose");
const { DateTime } = require("luxon");
const UserDataSchema = new Schema({
  Date: {
    type: Date,
    default: DateTime.now().toLocaleString(DateTime.DATE_MED),
  },
  Time: {
    type: String,
    default: DateTime.now().toLocaleString(DATETIME_SHORT_WITH_SECONDS),
  },
  //   prefferably numbers for latitude/longitude/depth/magnitude
  Latitude: {
    type: String,
  },
  Longitude: {
    type: String,
  },
  Depth: {
    type: String,
  },
  Magnitude: {
    type: String,
  },
  Region: {
    type: String,
  },
});

const userData = model("userData", UserDataSchema);
module.exports = userData;
