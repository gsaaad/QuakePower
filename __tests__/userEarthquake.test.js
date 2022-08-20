const fs = require("fs");

// testing for these functions
const createNewEarthquake = require("../lib/createNewEarthquake");
const filterByQuery = require("../lib/filterByQuery");
const filterUserDataById = require("../lib/filterUserDataById");
const findById = require("../lib/findById");
const validateEarthquake = require("../lib/validateEarthquake");

const { userData } = require("../data/userArray.json");

test("creates a new earthquake Object", () => {
  // create earthquake with these values
  const earthquake = createNewEarthquake(
    {
      Date: "2022-05-29",
      Time: "05:13:03",
      Latitude: "-22.99",
      Longitude: "-75.26",
      Depth: "25",
      Magnitude: "7.1",
      Region: "OFFSHORE ANTOFAGASTA CHILE",
      id: "30",
    },
    userData
  );
  //   expect the newly created earthquake to have the same values
  expect(earthquake.Date).toBe("2022-05-29");
  expect(earthquake.Time).toBe("05:13:03");
  expect(earthquake.Latitude).toBe("-22.99");
  expect(earthquake.Longitude).toBe("-75.26");
  expect(earthquake.Depth).toBe("25");
  expect(earthquake.Magnitude).toBe("7.1");
  expect(earthquake.Region).toBe("OFFSHORE ANTOFAGASTA CHILE");
  expect(earthquake.id).toBe("30");
});
