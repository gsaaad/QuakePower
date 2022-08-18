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
  const toggleModal = (modalText) => {
    modalTitle.text(`Check your ${modalText}`);
    modal.toggle();
    console.log("triggered");
    setTimeout(function () {
      modal.toggle();
    }, 5000);
  };
  //   if date is empty or not string
  if (earthquakeDate === "" || typeof earthquakeDate !== "string") {
    toggleModal("Date");
  }
  //   if time is empty or not string
  else if (earthquakeTime === "" || typeof earthquakeTime !== "string") {
    toggleModal("Time");
  } else if (earthquakeLatitude === "" || isNaN(parseInt(earthquakeLatitude))) {
    toggleModal("Latitude");
  } else if (
    earthquakeLongitude === "" ||
    isNaN(parseInt(earthquakeLongitude))
  ) {
    toggleModal("Longitude");
  } else if (earthquakeDepth === "" || isNaN(parseInt(earthquakeDepth))) {
    toggleModal("Depth");
  } else if (
    earthquakeMagnitude === "" ||
    isNaN(parseInt(earthquakeMagnitude))
  ) {
    toggleModal("Magnitude");
  } else if (earthquakeRegion.trim() === "") {
    toggleModal("Region");
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
    // collect form data
    console.log(earthquakeObject);
    // todo create a Modal to let user know that their submition has been completed
    // todo clear form
  }
};
const handleModal = (event) => {
  // close the modal
  event.preventDefault();
  modal.toggle();
};

earthquakeForm.on("submit", handleSubmit);
modalClose.on("click", handleModal);
