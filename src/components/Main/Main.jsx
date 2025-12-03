import "./Main.css";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";

function Main({ clothingItems, handleOpenItemCardModal, weatherData }) {
  return (
    <main className="main">
      <WeatherCard weatherData={weatherData} />
      <p className="main__text">
        Today is {weatherData.temp}° F / You may want to wear:
      </p>
      <ul className="main__itemcard-list">
        {clothingItems.map((item) => {
          return (
            <ItemCard
              key={item._id}
              data={item}
              onCardClick={handleOpenItemCardModal}
            />
          );
        })}
      </ul>
    </main>
  );
}

export default Main;
