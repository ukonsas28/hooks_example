import { useEffect, useState } from "react";

export const Modal = () => {
  const [visible, setVisible] = useState(false);

  const hideModalHandler = () => {
    setVisible(false);
  };

  useEffect(() => {
    window.addEventListener("toggleModal", (event) =>
      setVisible(event.detail.visibleModal)
    );
  }, []);

  return visible ? (
    <div className="modal">
      <p>MODAL CONTENT</p>
      <button onClick={hideModalHandler}>close modal</button>
    </div>
  ) : null;
};
