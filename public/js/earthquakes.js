// JQUERY SELECTORS
const earthquakeForm = $("#EMSC-Earthquake-form");
const dateInput = $("#date-input");

const LatitudeInput = $("#Latitude-input");
const LongitudeInput = $("#Longitude-input");
const idInput = $("#id-input");
const depthInput = $("#depth-input");
const magnitudeInput = $("#magnitude-input");
const regionInput = $("#region-input");
const displayArea = $("#display-area");

// todo utilize google map API for a small map representation of the area!

// printResults on Diplay Area
const printResults = (resultArr) => {
  console.log(resultArr);

  const earthquakeDisplay = resultArr.map(
    ({ Eqid, Date, Latitude, Longitude, Depth, Magnitude, Region }) => {
      return ` <div class="col-12 col-md-5 mb-3">
    <div class="card p-3" data-id=${Eqid}>
    <h4 class="text-dark">${Region}</h4>
    <p>${Eqid}</p>
    <p>Date: ${Date}<br/>
       Latitude: ${Latitude}<br/>
       Longitude: ${Longitude}<br/>
       Depth: ${Depth}<br/>
       Magnitude: ${Magnitude}<br/>
      </p>
    </div>
  </div>`;
    }
  );
  displayArea.html(earthquakeDisplay);
};

// FETCH      get earthquakes function
const getEarthquakes = (earthquakeSearch) => {
  //
  let queryURL = `/api/earthquakes?`;

  // for each property in object, add to query
  if (earthquakeSearch) {
    Object.entries(earthquakeSearch).forEach(([key, value]) => {
      if (value.length !== 0) {
        queryURL += `${key}=${value}&`;
      }
    });
  } else {
    queryURL = queryURL;
  }
  console.log(queryURL);

  // if the query Looking for ID, replace query to match API Route
  if (queryURL.includes("Id")) {
    console.log("contains id!");
    console.log(queryURL);
    queryURL = queryURL.replace("?Id=", "/");
  }

  fetch(queryURL)
    .then((response) => {
      if (!response.ok) {
        return alert(`Error: ${response.statusText}`);
      }
      return response.json();
    })
    .then((earthquakeArray) => {
      console.log(earthquakeArray);
      printResults(earthquakeArray);
    });
};

// handle submit form to query by search parameter
const handleSubmitForm = (e) => {
  e.preventDefault();
  const Date = dateInput.val();

  const Latitude = LatitudeInput.val();
  const Longitude = LongitudeInput.val();
  const Id = idInput.val();
  const Depth = depthInput.val();
  const Magnitude = magnitudeInput.val();
  const Region = regionInput.val();

  //   get data
  console.log(Id, Date, Latitude, Longitude, Depth, Magnitude, Region);
  const earthquakeObject = {
    Id,
    Date,
    Latitude,
    Longitude,
    Depth,
    Magnitude,
    Region,
  };
  getEarthquakes(earthquakeObject);
};
getEarthquakes();

earthquakeForm.on("submit", handleSubmitForm);
