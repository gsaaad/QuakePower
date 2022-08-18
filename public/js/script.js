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
  if (earthquakeDate === "" || typeof earthquakeDate !== "string") {
    modal.toggle();
  }
  if (earthquakeTime === "" || typeof earthquakeTime !== "string") {
    modal.toggle();
  }

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
};
const handleModal = (event) => {
  // close the modal
  event.preventDefault();
  modal.toggle();
};

earthquakeForm.on("submit", handleSubmit);
modalClose.on("click", handleModal);
