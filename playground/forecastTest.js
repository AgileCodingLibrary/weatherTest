const request = require("postman-request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=cd09c4c14e1e388fff8a49b0693ec066&query=" +
    latitude +
    "," +
    longitude +
    "&units=f";

  console.log(url);

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service!", undefined);
    } else if (body.error) {
      callback("Unable to find location", undefined);
    } else {
      callback(
        undefined,
        "Today at " +
          body.location.name +
          ", we have a temperature of " +
          body.current.temperature +
          ", " +
          body.current.weather_descriptions[0] +
          ", wind speed of " +
          body.current.wind_speed +
          " towards the direction of " +
          body.current.wind_degree +
          ". Temperature feels like " +
          body.current.feelslike +
          "."
      );
    }
  });
};

module.exports = forecast;

// forecast(51.5074, 0.1278, (req, res) => {
//   console.log(res);
// });
