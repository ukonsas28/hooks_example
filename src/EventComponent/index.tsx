import { Modal } from "./Modal";

export const EventComponent = () => {
  const showModalHandler = () => {
    const toggleModalEvent = new CustomEvent("toggleModal", {
      detail: { visibleModal: true },
    });
    window.dispatchEvent(toggleModalEvent);
  };

  return (
    <div className="container">
      <Modal />
      <button type="button" onClick={showModalHandler}>
        open modal
      </button>
      <p>CustomEvent behavior</p>
    </div>
  );
};
