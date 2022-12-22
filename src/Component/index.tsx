import { useState } from "react";
import { Modal } from "./Modal";

export const Component = () => {
  const [visible, setVisible] = useState(false);

  const toggleHandler = () => {
    setVisible((prev) => !prev);
  };

  return (
    <div className="container">
      <Modal visible={visible} toggleHandler={toggleHandler} />

      <button type="button" onClick={toggleHandler}>
        open modal
      </button>
      <p>Component default behavior</p>
    </div>
  );
};
