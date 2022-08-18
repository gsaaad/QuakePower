// using JQUERY

const earthquakeForm = $("#earthquake-form");
const earthquakeDate = $("#date-input");
const earthquakeTime = $("#time-input");
const earthquakeLatitude = $("#latitude-input");
const earthquakeLongitude = $("#longitude-input");
const earthquakeDepth = $("#depth-input");
const earthquakeMagnitude = $("#magnitude-input");
const earthquakeRegion = $("#region-input");
const modal = $("#modal");
const modalClose = $("#btn-close");
modal.toggle();

const handleSubmit = (event) => {
  event.preventDefault();
  const earthquakeDate = $("#date-input").val();
  const earthquakeTime = $("#time-input").val();
  const earthquakeLatitude = $("#latitude-input").val();
  const earthquakeLongitude = $("#longitude-input").val();
  const earthquakeDepth = $("#depth-input").val();
  const earthquakeMagnitude = $("#magnitude-input").val();
  const earthquakeRegion = $("#region-input").val();

  //   if date is empty or not string
  if (earthquakeDate === "" || typeof earthquakeDate !== "string") {
    modal.toggle();
    console.log("Check your Date");
  }
  //   if time is empty or not string
  else if (earthquakeTime === "" || typeof earthquakeTime !== "string") {
    modal.toggle();
    console.log("Check your Time");
  } else if (earthquakeLatitude === "" || isNaN(parseInt(earthquakeLatitude))) {
    modal.toggle();
    console.log("Check your Latitude");
  } else if (
    earthquakeLongitude === "" ||
    isNaN(parseInt(earthquakeLongitude))
  ) {
    modal.toggle();
    console.log("Check your Longitude");
  } else if (earthquakeDepth === "" || isNaN(parseInt(earthquakeDepth))) {
    modal.toggle();
    console.log("Check your Depth");
  } else if (
    earthquakeMagnitude === "" ||
    isNaN(parseInt(earthquakeMagnitude))
  ) {
    modal.toggle();
    console.log("Check your Magnitude");
  } else if (earthquakeRegion === "" || isNaN(parseInt(earthquakeRegion))) {
    modal.toggle();
    console.log("Check your Region");
  } else {
    const earthquakeObject = {
      earthquakeDate,
      earthquakeTime,
      earthquakeLatitude,
      earthquakeLongitude,
      earthquakeDepth,
      earthquakeMagnitude,
      earthquakeRegion,
    };

    console.log(earthquakeObject);
  }
};
const handleModal = (event) => {
  // close the modal
  event.preventDefault();
  modal.toggle();
};

earthquakeForm.on("submit", handleSubmit);
modalClose.on("click", handleModal);
