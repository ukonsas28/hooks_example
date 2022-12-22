import { FC } from "react";

type ModalProps = {
  visible: boolean;
  toggleHandler: () => void;
};

export const Modal: FC<ModalProps> = ({ visible, toggleHandler }) => {
  return visible ? (
    <div className="modal">
      <p>MODAL CONTENT</p>
      <button onClick={toggleHandler}>close modal</button>
    </div>
  ) : null;
};
