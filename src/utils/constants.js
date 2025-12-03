const apiKey = "a085622643fff45c9b9bad0340c7fae5";
const coordinates = { lat: "44.533459749570326", long: "-73.24546830890532" };

const weatherConditionImages = {
  day: {
    clear: {
      name: "clear",
      image: new URL("../assets/day/clear.svg", import.meta.url).href,
    },
    cloudy: {
      name: "cloudy",
      image: new URL("../assets/day/cloudy.svg", import.meta.url).href,
    },
    fog: {
      name: "fog",
      image: new URL("../assets/day/fog.svg", import.meta.url).href,
    },
    rain: {
      name: "rain",
      image: new URL("../assets/day/rain.svg", import.meta.url).href,
    },
    snow: {
      name: "snow",
      image: new URL("../assets/day/snow.svg", import.meta.url).href,
    },
    storm: {
      name: "storm",
      image: new URL("../assets/day/storm.svg", import.meta.url).href,
    },
    default: {
      name: "default",
      image: new URL("../assets/day/default.svg", import.meta.url).href,
    },
  },
  night: {
    clear: {
      name: "clear",
      image: new URL("../assets/night/clear.svg", import.meta.url).href,
    },
    cloudy: {
      name: "cloudy",
      image: new URL("../assets/night/cloudy.svg", import.meta.url).href,
    },
    fog: {
      name: "fog",
      image: new URL("../assets/night/fog.svg", import.meta.url).href,
    },
    rain: {
      name: "rain",
      image: new URL("../assets/night/rain.svg", import.meta.url).href,
    },
    snow: {
      name: "snow",
      image: new URL("../assets/night/snow.svg", import.meta.url).href,
    },
    storm: {
      name: "storm",
      image: new URL("../assets/night/storm.svg", import.meta.url).href,
    },
    default: {
      name: "default",
      image: new URL("../assets/night/default.svg", import.meta.url).href,
    },
  },
};

export { apiKey, coordinates, weatherConditionImages };
