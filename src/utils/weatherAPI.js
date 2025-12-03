import { apiKey, coordinates } from "./constants";

function _handleServerResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
}

export function getWeatherData() {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.lat}&lon=${coordinates.long}&units=imperial&appid=${apiKey}`
  )
    .then(_handleServerResponse)
    .then((data) => {
      return parseWeatherData(data);
    });
  // .then((data) => {
  //   return getWeatherCondition(data.temp);
  // })
}

function parseWeatherData(data) {
  const parsedData = {};
  parsedData.city = data.name;
  parsedData.temp = Math.round(data.main.temp);
  return parsedData;
}

function getWeatherCondition(temp) {
  if (temp >= 86) {
    return "hot";
  } else if (temp >= 66) {
    return "warm";
  } else {
    return "cold";
  }
}
