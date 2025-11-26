import { useState } from "react";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import { defaultClothingItems } from "../../utils/defaultClothing";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import ItemCardModal from "../ItemCardModal/ItemCardModal";

function App() {
  const [clothingItems, setClothingItems] = useState(defaultClothingItems);
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState("");

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

  return (
    <div className="app">
      <Header handleOpenAddClothingModal={handleOpenAddClothingModal} />
      <Main
        clothingItems={clothingItems}
        handleOpenItemCardModal={handleOpenItemCardModal}
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
              checked
            />
            <label className="modal__label" for="Hot">
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
            <label className="modal__label" for="Warm">
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
            <label className="modal__label" for="Cold">
              Cold
            </label>
          </div>
        </fieldset>
      </ModalWithForm>
    </div>
  );
}

export default App;
