// JQUERY SELECTORS

const earthquakeForm = $("#userEarthquake-form");
const idInput = $("#id-input");
const depthInput = $("#depth-input");
const magnitudeInput = $("#magnitude-input");

const displayArea = $("#display-area");

// printResults on Diplay Area
const printResults = (resultArr) => {
  console.log(resultArr);

  const earthquakeDisplay = resultArr.map(
    ({ id, Year, Date, Depth, Magnitude, Location, Notes }) => {
      return ` <div class="col-12 col-md-5 mb-3">
      <div class="card p-3" data-id=${id}>
      <h4 class="text-dark">${Location}</h4>
      <p>ID:${id}</p>
      <p>Date: ${Date} ${Year}<br/>
         Depth: ${Depth}<br/>
         Magnitude: ${Magnitude}<br/>
         Notes: ${Notes}
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
  let queryURL = `/api/deadliest?`;

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

  // if the query Looking for ID, replace query to match API Route
  if (queryURL.includes("Id")) {
    queryURL = queryURL.replace("?Id=", "/");
    queryURL = queryURL.replace("&", "");
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

  const Id = idInput.val();
  const Depth = depthInput.val();
  const Magnitude = magnitudeInput.val();

  //   get data
  console.log(Id, Depth, Magnitude);
  const earthquakeObject = {
    Id,
    Depth,
    Magnitude,
  };
  getEarthquakes(earthquakeObject);
};
getEarthquakes();

earthquakeForm.on("submit", handleSubmitForm);
