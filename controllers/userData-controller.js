const { userData } = require("../models");

const catchError = (error) => {
  console.log(error);
  res.status(400).json(error);
};

const userDataController = {
  // !get all userData entered earthquakes
  getAllEarthquakes(req, res) {
    userData
      .find({})
      .then((dbEarthquakeData) => res.json(dbEarthquakeData))
      .catch(catchError(err));
  },

  //   !get all userData by ID
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
  //   !create earthquake, userEntered
  createEarthquake({ body }, res) {
    userData
      .create(body)
      .then((dbEarthquakeData) => res.json(dbEarthquakeData))
      .catch(catchError(err));
  },
  //   !updateEarthquakeByID
  updateEarthquake({ params, body }, res) {
    // find by id, here's the body we change, new: true, send back newer/newest version of that document
    userData
      .findByIdAndUpdate({ _id: params.id }, body, { new: true })
      .then((dbEarthquakeData) => {
        // if no earthquake data found
        if (!dbEarthquakeData) {
          res.status(404).json({
            message:
              "No Earthquake found with this ID.. Please try a valid ID!",
          });
        }
        res.json(dbEarthquakeData);
      })
      .catch(catchError(err));
  },
  //   !delete earthquakeById
  deleteEarthquake({ params }, res) {
    userData
      .findByIdAndDelete({ _id: params.id })
      .then((dbEarthquakeData) => {
        // if no earthquake data found
        if (!dbEarthquakeData) {
          res.status(404).json({
            message:
              "No Earthquake found with this ID.. Please try a valid ID!",
          });
        }
        res.json(dbEarthquakeData);
      })
      .catch(catchError(err));
  },
};
module.exports = userDataController;
