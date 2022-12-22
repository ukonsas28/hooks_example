import { useRef } from "react";
import { Modal } from "./Modal";

export const ImperativeComponent = () => {
  const ref = useRef<{ showModal: () => void }>(null);

  const showModalHandler = () => {
    ref.current?.showModal();
  };

  return (
    <div className="container">
      <Modal ref={ref} />

      <button type="button" onClick={showModalHandler}>
        open modal
      </button>
      <p>Imperative behavior</p>
    </div>
  );
};
