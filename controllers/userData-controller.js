const { userData } = require("../models");

const catchError = (error) => {
  console.log(error);
  res.status(400).json(error);
};

const userDataController = {
  // get all userData entered earthquakes
  getAllEarthquakes(req, res) {
    userData
      .find({})
      .then((dbEarthquakeData) => res.json(dbEarthquakeData))
      .catch(catchError(err));
  },

  //   get all userData by ID
  getEarthquakeById({ params }, res) {
    userData
      .findById({ _id: params.id })
      .then((dbEarthquakeData) => {
        // if no earthquake Data found
        if (!dbEarthquakeData) {
          res.status(404).json({
            message:
              "No Earthquake found with this ID.. Please try a valid ID!",
          });
          return;
        }
        res.json(dbEarthquakeData);
      })
      .catch(catchError(err));
  },
};
module.exports = userDataController;
