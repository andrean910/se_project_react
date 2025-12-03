import "./WeatherCard.css";
import cloudy from "../../assets/cloudy.svg";
import { useContext } from "react";
import CurrentTempUnitContext from "../../contexts/CurrentTempUnitContext.js";

function WeatherCard({ weatherData }) {
  const contextValue = useContext(CurrentTempUnitContext);
  //destructure the current temp unit

  return (
    <section className="weather-card">
      <img className="weather-card__image" src={cloudy} alt="cloudy sky" />
      <p className="weather-card__temp">
        {contextValue.CurrentTempUnit}&deg; F
      </p>
    </section>
  );
}

export default WeatherCard;
