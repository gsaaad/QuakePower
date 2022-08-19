// using JQUERY

const earthquakeForm = $("#earthquake-form");
const Date = $("#date-input");
const Time = $("#time-input");
const Latitude = $("#latitude-input");
const Longitude = $("#longitude-input");
const Depth = $("#depth-input");
const Magnitude = $("#magnitude-input");
const Region = $("#region-input");
const modal = $("#modal");
const modalDescp = $("#modal-descp");
const modalTitle = $("#modal-title");
const modalBody = $("#modal-body");

modal.toggle();

const handleSubmit = (event) => {
  event.preventDefault();
  const Date = $("#date-input").val();
  const Time = $("#time-input").val();
  const Latitude = $("#latitude-input").val();
  const Longitude = $("#longitude-input").val();
  const Depth = $("#depth-input").val();
  const Magnitude = $("#magnitude-input").val();
  const Region = $("#region-input").val();
  const toggleModal = (modalText) => {
    modalDescp.text(`Check your ${modalText}`);
    modal.toggle();

    setTimeout(function () {
      modal.toggle();
    }, 5000);
  };

  //   if date is empty or not string
  if (Date === "" || typeof Date !== "string") {
    toggleModal("Date");
  }
  //   if time is empty or not string
  else if (Time === "" || typeof Time !== "string") {
    toggleModal("Time");
  } else if (Latitude === "" || isNaN(parseInt(Latitude))) {
    toggleModal("Latitude");
  } else if (Longitude === "" || isNaN(parseInt(Longitude))) {
    toggleModal("Longitude");
  } else if (Depth === "" || isNaN(parseInt(Depth))) {
    toggleModal("Depth");
  } else if (Magnitude === "" || isNaN(parseInt(Magnitude))) {
    toggleModal("Magnitude");
  } else if (Region.trim() === "") {
    toggleModal("Region");
  } else {
    const earthquakeObject = {
      Date,
      Time,
      Latitude,
      Longitude,
      Depth,
      Magnitude,
      Region,
    };
    // collect form data

    fetch("/api/userearthquakes", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(earthquakeObject),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          console.log("posting error");
          return false;
        }
      })
      .then((postResponse) => {
        console.log(postResponse);
      });

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
