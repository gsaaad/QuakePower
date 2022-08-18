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
const modalDescp = $("#modal-descp");
const modalTitle = $("#modal-title");
const modalBody = $("#modal-body");

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
    modalDescp.text(`Check your ${modalText}`);
    modal.toggle();

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
    // reset form
    earthquakeForm.trigger("reset");
    // change classes to success
    modal.removeClass("bg-danger");
    modal.addClass("bg-success");
    // add text to let user know its successful!
    modalTitle.text("Thanks for entering your data!");
    modalBody.text(
      "You can enter a new earthquake or check out your existing earthquake in the user inputed data!"
    );
    // toggle modal and remove it after 5 seconds
    modal.toggle();
    setTimeout(() => {
      modal.toggle();
    }, 5000);
  }
};

earthquakeForm.on("submit", handleSubmit);
