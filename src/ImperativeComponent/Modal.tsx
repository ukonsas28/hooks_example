import { forwardRef, useImperativeHandle, useState } from "react";

export const Modal = forwardRef<{ showModal: () => void }>((_, ref) => {
  const [visible, setVisible] = useState(false);

  useImperativeHandle(ref, () => ({
    showModal: () => {
      setVisible(true);
    },
  }));

  const hideModalHandler = () => {
    setVisible(false);
  };

  return visible ? (
    <div className="modal">
      <p>MODAL CONTENT</p>
      <button onClick={hideModalHandler}>close modal</button>
    </div>
  ) : null;
});
