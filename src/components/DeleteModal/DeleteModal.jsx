function DeleteModal({ onClose, handleDeleteItem, isOpen, card }) {
  return (
    <div className={`modal ${isOpen ? "modal_is-opened" : ""}`}>
      <div className="modal__container">
        <p className="modal__text">
          Are you sure you want to delete this item?
        </p>
        <p className="modal__text">This action is irreversible</p>
        <button
          type="button"
          className="modal__delete-btn"
          onClick={handleDeleteItem(card._id)}
        >
          Yes, delete item
        </button>
        <button
          type="button"
          className="modal__close-btn modal__close-btn_delete"
          onClick={onClose}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
export default DeleteModal;
