// JQUERY SELECTORS
const earthquakeForm = $("#EMSC-Earthquake-form");
const dateInput = $("#date-input");
const timeInput = $("#time-input");
const LatitudeInput = $("#Latitude-input");
const LongitudeInput = $("#Longitude-input");
const idInput = $("#id-input");
const depthInput = $("#depth-input");
const magnitudeInput = $("#magnitude-input");
const regionInput = $("#region-input");

const getEarthquakes = (earthquakeSearch) => {
  //
  let queryURL = `/api/earthquakes?`;
  console.log(queryURL);

  // for each property in object, add to query
  Object.entries(earthquakeSearch).forEach(([key, value]) => {
    if (value.length !== 0) {
      queryURL += `${key}=${value}`;
    }
  });
  console.log(queryURL);

  fetch(queryURL)
    .then((response) => {
      if (!response.ok) {
        return alert(`Error: ${response.statusText}`);
      }
      return response.json();
    })
    .then((earthquakeArray) => {
      console.log(earthquakeArray);
    });
};

const handleSubmitForm = (e) => {
  e.preventDefault();
  const Date = dateInput.val();
  const Time = timeInput.val();
  const Latitude = LatitudeInput.val();
  const Longitude = LongitudeInput.val();
  const Id = idInput.val();
  const Depth = depthInput.val();
  const Magnitude = magnitudeInput.val();
  const Region = regionInput.val();

  //   get data
  console.log(Id, Date, Time, Latitude, Longitude, Depth, Magnitude, Region);
  const earthquakeObject = {
    Id,
    Date,
    Time,
    Latitude,
    Longitude,
    Depth,
    Magnitude,
    Region,
  };
  getEarthquakes(earthquakeObject);
};

earthquakeForm.on("submit", handleSubmitForm);
