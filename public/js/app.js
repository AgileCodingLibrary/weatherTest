console.log("Client side javascript file is loaded!");

const getWeather = (address = "London UK") => {
  fetch("http://localhost:3000/weather?address=" + address).then((response) => {
    response.json().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        console.log(data);
      }
    });
  });
};

const weatherForm = document.querySelector("form");
const weatherLocation = document.querySelector("input");

const message01 = document.querySelector("#message-01");
const message02 = document.querySelector("#message-02");

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();

  message01.textContent = "Loading...";
  message02.textContent = "";

  fetch("http://localhost:3000/weather?address=" + weatherLocation.value).then(
    (response) => {
      response.json().then((data) => {
        if (data.error) {
          message01.textContent = data.error;
        } else {
          message01.textContent = data.location;
          message02.textContent = data.forecast;

          // "forecast": "Today at Silva Paes, we have a temperature of 57, Partly cloudy, wind speed of 1 towards the direction of 136. Temperature feels like 57.",
          // "location": "Rua London Gordon, Centro, Guaporé - Rio Grande do Sul, Brazil",
          // "address": "london"
        }
      });
    }
  );
});
