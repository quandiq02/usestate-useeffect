import { useState } from "react";
import "./modal.css";
const Modal = () => {
  const [modalActive, setModalActive] = useState(false);
  return (
    <div className="modal">
      <div className="modal__wrapper">
        <button
          className="modal__btn-open"
          onClick={() => setModalActive(true)}
        >
          Show Dialog
        </button>
        <div
          className={modalActive ? "modal__content-active" : "modal__content"}
        >
          <div className="modal__block">
            <ul className="modal__list">
              <li className="modal__item">Dialog Title</li>
              <li className="modal__item">Body</li>
            </ul>
            <div
              className="modal__btn-exit"
              onClick={() => setModalActive(false)}
            >
              Discard
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Modal;
