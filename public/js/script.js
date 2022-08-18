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
const modalTitle = $("#modal-title");
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
    modalTitle.text("Check your Date");
    modal.toggle();
  }
  //   if time is empty or not string
  else if (earthquakeTime === "" || typeof earthquakeTime !== "string") {
    modal.toggle();
    modalTitle.text("Check your Time");
  } else if (earthquakeLatitude === "" || isNaN(parseInt(earthquakeLatitude))) {
    modal.toggle();
    modalTitle.text("Check your Latitude");
  } else if (
    earthquakeLongitude === "" ||
    isNaN(parseInt(earthquakeLongitude))
  ) {
    modal.toggle();
    modalTitle.text("Check your Longitude");
  } else if (earthquakeDepth === "" || isNaN(parseInt(earthquakeDepth))) {
    modal.toggle();
    modalTitle.text("Check your Depth");
  } else if (
    earthquakeMagnitude === "" ||
    isNaN(parseInt(earthquakeMagnitude))
  ) {
    modal.toggle();
    modalTitle.text("Check your Magnitude");
  } else if (earthquakeRegion === "" || isNaN(parseInt(earthquakeRegion))) {
    modal.toggle();
    modalTitle.text("Check your Region");
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
