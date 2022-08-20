const fs = require("fs");

// testing for these functions
const createNewEarthquake = require("../lib/createNewEarthquake");
const filterByQuery = require("../lib/filterByQuery");
const filterUserDataById = require("../lib/filterUserDataById");
const findById = require("../lib/findById");
const validateEarthquake = require("../lib/validateEarthquake");

const { userData } = require("../data/userArray.json");

// !does it create earthquake Object
// test("creates a new earthquake Object", () => {
//   // create earthquake with these values
//   const earthquake = createNewEarthquake(
//     {
//       Date: "2022-05-29",
//       Time: "05:13:03",
//       Latitude: "-22.99",
//       Longitude: "-75.26",
//       Depth: "25",
//       Magnitude: "7.1",
//       Region: "OFFSHORE ANTOFAGASTA CHILE",
//       id: userData.length,
//     },
//     userData
//   );
//   //   expect the newly created earthquake to have the same values
//   expect(earthquake.Date).toBe("2022-05-29");
//   expect(earthquake.Time).toBe("05:13:03");
//   expect(earthquake.Latitude).toBe("-22.99");
//   expect(earthquake.Longitude).toBe("-75.26");
//   expect(earthquake.Depth).toBe("25");
//   expect(earthquake.Magnitude).toBe("7.1");
//   expect(earthquake.Region).toBe("OFFSHORE ANTOFAGASTA CHILE");
//   expect(earthquake.id).toBe(userData.length - 1);
// });
// !does it filter query
// test("filters by query", () => {
//   const setOfEarthquakes = [
//     {
//       id: "1",
//       Date: "2022-08-19",
//       Time: "6am",
//       Latitude: "33",
//       Longitude: "54",
//       Depth: "59",
//       Magnitude: "8",
//       Region: "Chile",
//     },
//     {
//       id: "2",
//       Date: "2022-07-19",
//       Time: "4am",
//       Latitude: "54",
//       Longitude: "33",
//       Depth: "50",
//       Magnitude: "6",
//       Region: "Hawaii",
//     },
//     {
//       id: "3",
//       Date: "2022-06-19",
//       Time: "5am",
//       Latitude: "69",
//       Longitude: "23",
//       Depth: "20",
//       Magnitude: "9",
//       Region: "Philippines",
//     },
//   ];
//   const results = filterByQuery(
//     { Latitude: "69", Longitude: "23" },
//     setOfEarthquakes
//   );

//   expect(results.length).toEqual(1);
// });
// !does it filter by ID
test("Finds by ID", () => {
  const setOfEarthquakes = [
    {
      id: "1",
      Date: "2022-08-19",
      Time: "6am",
      Latitude: "33",
      Longitude: "54",
      Depth: "59",
      Magnitude: "8",
      Region: "Chile",
    },
    {
      id: "2",
      Date: "2022-07-19",
      Time: "4am",
      Latitude: "54",
      Longitude: "33",
      Depth: "50",
      Magnitude: "6",
      Region: "Hawaii",
    },
    {
      id: "3",
      Date: "2022-06-19",
      Time: "5am",
      Latitude: "69",
      Longitude: "23",
      Depth: "20",
      Magnitude: "9",
      Region: "Philippines",
    },
  ];
  const result = filterUserDataById("3", setOfEarthquakes);
  console.log(result[0].Time, "This is the time!");
  expect(result[0].Time).toBe("5am");
});
