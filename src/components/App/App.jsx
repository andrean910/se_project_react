import { useEffect, useState } from "react";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import { defaultClothingItems } from "../../utils/defaultClothing";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import ItemCardModal from "../ItemCardModal/ItemCardModal";
import { getWeatherData } from "../../utils/weatherAPI";
import CurrentTempUnitContext from "../../contexts/CurrentTempUnitContext.js";

function App() {
  const [clothingItems, setClothingItems] = useState([]);
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState("");
  const [weatherData, setWeatherData] = useState({ city: "", temp: "0" });
  const [currentTempUnit, setCurrentTempUnit] = useState("F");

  function handleOpenAddClothingModal() {
    setActiveModal("add-clothing-modal");
  }
  function handleOpenItemCardModal(card) {
    setActiveModal("itemCard-modal");
    setSelectedCard(card);
  }
  function handleCloseModal() {
    setActiveModal("");
  }
  function handleToggleSwitchChange() {
    setCurrentTempUnit("C");
    if (currentTempUnit == "F") {
      setCurrentTempUnit("C");
    } else {
      setCurrentTempUnit("F");
    }
  }
  useEffect(() => {
    getWeatherData()
      .then((data) => {
        console.log(data);
        setWeatherData(data);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    setClothingItems(defaultClothingItems);
  }, []);

  return (
    <div className="page">
      <CurrentTempUnitContext.Provider
        value={{ currentTempUnit, handleToggleSwitchChange }}
      >
        <div className="app">
          <Header
            handleOpenAddClothingModal={handleOpenAddClothingModal}
            weatherData={weatherData}
          />
          <Main
            clothingItems={clothingItems}
            handleOpenItemCardModal={handleOpenItemCardModal}
            weatherData={weatherData}
          />
          <Footer />

          <ItemCardModal
            isOpen={activeModal === "itemCard-modal"}
            onClose={handleCloseModal}
            card={selectedCard}
          />
          <ModalWithForm
            isOpen={activeModal === "add-clothing-modal"}
            onClose={handleCloseModal}
            title="New Garment"
            buttonText="Add garment"
            name="add-garment-form"
          >
            <fieldset className="modal__fieldset">
              <label className="modal__label" htmlFor="add-garment-name">
                Name
                <input
                  className="modal__input"
                  id="add-garment-name"
                  type="text"
                  placeholder="Name"
                />
              </label>

              <label className="modal__label" htmlFor="add-garment-url">
                Image
                <input
                  className="modal__input"
                  id="add-garment-url"
                  type="url"
                  placeholder="Image URL"
                />
              </label>
            </fieldset>
            <fieldset className="modal__fieldset">
              <legend>Select the weather type:</legend>
              <div>
                <input
                  className="modal__radio-input"
                  type="radio"
                  id="Hot"
                  name="temp"
                  value="Hot"
                  defaultChecked
                />
                <label className="modal__label" htmlFor="Hot">
                  Hot
                </label>
              </div>
              <div>
                <input
                  className="modal__radio-input"
                  type="radio"
                  id="Warm"
                  name="temp"
                  value="Warm"
                />
                <label className="modal__label" htmlFor="Warm">
                  Warm
                </label>
              </div>
              <div>
                <input
                  className="modal__radio-input"
                  type="radio"
                  id="Cold"
                  name="temp"
                  value="Cold"
                />
                <label className="modal__label" htmlFor="Cold">
                  Cold
                </label>
              </div>
            </fieldset>
          </ModalWithForm>
        </div>
      </CurrentTempUnitContext.Provider>
    </div>
  );
}

export default App;
