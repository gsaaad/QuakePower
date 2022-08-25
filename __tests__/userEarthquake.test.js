// testing for these functions
const createNewEarthquake = require("../lib/createNewEarthquake");
const filterByQuery = require("../lib/filterByQuery");
const filterUserDataById = require("../lib/filterUserDataById");
const findById = require("../lib/findById");
const validateEarthquake = require("../lib/validateEarthquake");

const { userData } = require("../data/userArray.json");

// mock fs. so that we are not actively adding earthquakes
jest.mock("fs");
// !does it create earthquake Object
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
      id: userData.length,
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
  expect(earthquake.id).toBe(userData.length - 1);
});
// !does it validateEarthquake when created
test("validates user input when creating new earthquake", () => {
  const validEarthquake = {
    Date: "2022-06-15",
    Time: "7:00:00 AM",
    Depth: 50,
    Latitude: 56,
    Longitude: 23,
    Magnitude: 8,
    Region: "Chile",
  };
  const invalidEarthquake = {
    Date: "2022-06-15",
    Time: "7:00:00 AM",
    Latitude: 56,
    Longitude: 23,
    Depth: 20,
  };
  const trueResult = validateEarthquake(validEarthquake);
  const falseResult = validateEarthquake(invalidEarthquake);

  expect(trueResult).toBe(true);
  expect(falseResult).toBe(false);
});
// !does it filter query for userData
test("filters by query", () => {
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
  const results = filterByQuery(
    { Latitude: "69", Longitude: "23" },
    setOfEarthquakes
  );

  expect(results.length).toEqual(1);
});
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

  expect(result[0].Time).toBe("5am");
});

// !todo does it filter query for Deadliest Earthquakes
// ! does it filter for EMSC Data
test("Filters query for EMSC Data", () => {
  const setOfEarthquakes = [
    {
      Date: "2022-07-28",
      "Time UTC": "04:15:03",
      Latitude: -21.99,
      Longitude: -70.26,
      Depth: 45,
      "Depth Type": " ",
      "Magnitude Type": "Mw",
      Magnitude: 6.1,
      Region: "OFFSHORE ANTOFAGASTA CHILE",
      "Last Update": "2022-07-28 06:11",
      Eqid: 1153568,
      FIELD12: "",
    },
    {
      Date: "2022-07-27",
      "Time UTC": "18:58:58",
      Latitude: -22.27,
      Longitude: -68.55,
      Depth: 108,
      "Depth Type": " ",
      "Magnitude Type": "Mw",
      Magnitude: 6.2,
      Region: "ANTOFAGASTA CHILE",
      "Last Update": "2022-07-28 06:17",
      Eqid: 1153404,
      FIELD12: "",
    },
    {
      Date: "2022-07-27",
      "Time UTC": "00:43:23",
      Latitude: 17.48,
      Longitude: 120.83,
      Depth: 10,
      "Depth Type": " ",
      "Magnitude Type": "Mw",
      Magnitude: 7,
      Region: "LUZON PHILIPPINES",
      "Last Update": "2022-07-27 06:41",
      Eqid: 1153080,
      FIELD12: "",
    },
    {
      Date: "2022-07-15",
      "Time UTC": "19:37:20",
      Latitude: -44.62,
      Longitude: -79.63,
      Depth: 10,
      "Depth Type": " ",
      "Magnitude Type": "Mw",
      Magnitude: 6.4,
      Region: "OFF COAST OF AISEN CHILE",
      "Last Update": "2022-07-16 07:48",
      Eqid: 1149012,
      FIELD12: "",
    },
    {
      Date: "2022-07-12",
      "Time UTC": "19:16:59",
      Latitude: -22.57,
      Longitude: -114.27,
      Depth: 10,
      "Depth Type": " ",
      "Magnitude Type": "Mw",
      Magnitude: 6.8,
      Region: "EASTER ISLAND REGION",
      "Last Update": "2022-07-13 07:06",
      Eqid: 1147877,
      FIELD12: "",
    },
    {
      Date: "2022-07-11",
      "Time UTC": "21:10:48",
      Latitude: -18.14,
      Longitude: 169.03,
      Depth: 10,
      "Depth Type": " ",
      "Magnitude Type": "Mw",
      Magnitude: 6,
      Region: "VANUATU",
      "Last Update": "2022-07-12 06:18",
      Eqid: 1147587,
      FIELD12: "",
    },
    {
      Date: "2022-07-01",
      "Time UTC": "23:25:13",
      Latitude: 26.86,
      Longitude: 55.36,
      Depth: 10,
      "Depth Type": "f",
      "Magnitude Type": "Mw",
      Magnitude: 6,
      Region: "SOUTHERN IRAN",
      "Last Update": "2022-07-04 07:49",
      Eqid: 1144244,
      FIELD12: "",
    },
    {
      Date: "2022-07-01",
      "Time UTC": "21:32:07",
      Latitude: 26.89,
      Longitude: 55.29,
      Depth: 10,
      "Depth Type": " ",
      "Magnitude Type": "Mw",
      Magnitude: 6,
      Region: "SOUTHERN IRAN",
      "Last Update": "2022-07-04 06:29",
      Eqid: 1144208,
      FIELD12: "",
    },
    {
      Date: "2022-06-30",
      "Time UTC": "18:40:38",
      Latitude: 19.03,
      Longitude: 121.34,
      Depth: 47,
      "Depth Type": " ",
      "Magnitude Type": "Mw",
      Magnitude: 6,
      Region: "BABUYAN ISL REGION PHILIPPINES",
      "Last Update": "2022-07-01 06:16",
      Eqid: 1143847,
      FIELD12: "",
    },
    {
      Date: "2022-06-08",
      "Time UTC": "00:55:46",
      Latitude: -9.08,
      Longitude: -71.26,
      Depth: 621,
      "Depth Type": " ",
      "Magnitude Type": "Mw",
      Magnitude: 6.5,
      Region: "PERU-BRAZIL BORDER REGION",
      "Last Update": "2022-06-08 06:35",
      Eqid: 1136218,
      FIELD12: "",
    },
    {
      Date: "2022-06-04",
      "Time UTC": "23:38:11",
      Latitude: 52.08,
      Longitude: 178.26,
      Depth: 105,
      "Depth Type": " ",
      "Magnitude Type": "Mw",
      Magnitude: 6.3,
      Region: "RAT ISLANDS ALEUTIAN ISLANDS",
      "Last Update": "2022-06-05 07:48",
      Eqid: 1135182,
      FIELD12: "",
    },
  ];

  const result = filterByQuery({ Depth: 105 }, setOfEarthquakes);
  expect(result[0].Latitude).toEqual(52.08);
  expect(result.length).toEqual(1);
});
// !does it filter for EMSC Data ID = EQID
test("filter query for EMSC earthquake by EQid", () => {
  const setOfEarthquakes = [
    {
      Date: "2022-07-28",
      "Time UTC": "04:15:03",
      Latitude: -21.99,
      Longitude: -70.26,
      Depth: 45,
      "Depth Type": " ",
      "Magnitude Type": "Mw",
      Magnitude: 6.1,
      Region: "OFFSHORE ANTOFAGASTA CHILE",
      "Last Update": "2022-07-28 06:11",
      Eqid: 1153568,
      FIELD12: "",
    },
    {
      Date: "2022-07-27",
      "Time UTC": "18:58:58",
      Latitude: -22.27,
      Longitude: -68.55,
      Depth: 108,
      "Depth Type": " ",
      "Magnitude Type": "Mw",
      Magnitude: 6.2,
      Region: "ANTOFAGASTA CHILE",
      "Last Update": "2022-07-28 06:17",
      Eqid: 1153404,
      FIELD12: "",
    },
    {
      Date: "2022-07-27",
      "Time UTC": "00:43:23",
      Latitude: 17.48,
      Longitude: 120.83,
      Depth: 10,
      "Depth Type": " ",
      "Magnitude Type": "Mw",
      Magnitude: 7,
      Region: "LUZON PHILIPPINES",
      "Last Update": "2022-07-27 06:41",
      Eqid: 1153080,
      FIELD12: "",
    },
    {
      Date: "2022-07-15",
      "Time UTC": "19:37:20",
      Latitude: -44.62,
      Longitude: -79.63,
      Depth: 10,
      "Depth Type": " ",
      "Magnitude Type": "Mw",
      Magnitude: 6.4,
      Region: "OFF COAST OF AISEN CHILE",
      "Last Update": "2022-07-16 07:48",
      Eqid: 1149012,
      FIELD12: "",
    },
    {
      Date: "2022-07-12",
      "Time UTC": "19:16:59",
      Latitude: -22.57,
      Longitude: -114.27,
      Depth: 10,
      "Depth Type": " ",
      "Magnitude Type": "Mw",
      Magnitude: 6.8,
      Region: "EASTER ISLAND REGION",
      "Last Update": "2022-07-13 07:06",
      Eqid: 1147877,
      FIELD12: "",
    },
    {
      Date: "2022-07-11",
      "Time UTC": "21:10:48",
      Latitude: -18.14,
      Longitude: 169.03,
      Depth: 10,
      "Depth Type": " ",
      "Magnitude Type": "Mw",
      Magnitude: 6,
      Region: "VANUATU",
      "Last Update": "2022-07-12 06:18",
      Eqid: 1147587,
      FIELD12: "",
    },
    {
      Date: "2022-07-01",
      "Time UTC": "23:25:13",
      Latitude: 26.86,
      Longitude: 55.36,
      Depth: 10,
      "Depth Type": "f",
      "Magnitude Type": "Mw",
      Magnitude: 6,
      Region: "SOUTHERN IRAN",
      "Last Update": "2022-07-04 07:49",
      Eqid: 1144244,
      FIELD12: "",
    },
    {
      Date: "2022-07-01",
      "Time UTC": "21:32:07",
      Latitude: 26.89,
      Longitude: 55.29,
      Depth: 10,
      "Depth Type": " ",
      "Magnitude Type": "Mw",
      Magnitude: 6,
      Region: "SOUTHERN IRAN",
      "Last Update": "2022-07-04 06:29",
      Eqid: 1144208,
      FIELD12: "",
    },
    {
      Date: "2022-06-30",
      "Time UTC": "18:40:38",
      Latitude: 19.03,
      Longitude: 121.34,
      Depth: 47,
      "Depth Type": " ",
      "Magnitude Type": "Mw",
      Magnitude: 6,
      Region: "BABUYAN ISL REGION PHILIPPINES",
      "Last Update": "2022-07-01 06:16",
      Eqid: 1143847,
      FIELD12: "",
    },
    {
      Date: "2022-06-08",
      "Time UTC": "00:55:46",
      Latitude: -9.08,
      Longitude: -71.26,
      Depth: 621,
      "Depth Type": " ",
      "Magnitude Type": "Mw",
      Magnitude: 6.5,
      Region: "PERU-BRAZIL BORDER REGION",
      "Last Update": "2022-06-08 06:35",
      Eqid: 1136218,
      FIELD12: "",
    },
    {
      Date: "2022-06-04",
      "Time UTC": "23:38:11",
      Latitude: 52.08,
      Longitude: 178.26,
      Depth: 105,
      "Depth Type": " ",
      "Magnitude Type": "Mw",
      Magnitude: 6.3,
      Region: "RAT ISLANDS ALEUTIAN ISLANDS",
      "Last Update": "2022-06-05 07:48",
      Eqid: 1135182,
      FIELD12: "",
    },
  ];
  const result = findById("1153568", setOfEarthquakes);
  expect(result.length).toBe(1);
  expect(result[0].Eqid).toEqual(1153568);
});
