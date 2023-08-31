import { createPortal } from "react-dom";
import { useRef } from "react";
import PropTypes from "prop-types";
import useOutsideClick from "../../hooks/useOutsideClick";

export default function Modal({ children, showModal, setShowModal }) {
  const modalRef = useRef(null);

  useOutsideClick(modalRef, function () {
    setShowModal(false);
  });

  if (!showModal) {
    return null;
  }
  return createPortal(
    <main className={`modal__overlay ${showModal && "show-modal"}`}>
      <div className="modal__container" ref={modalRef}>
        <div className="modal__close" onClick={() => setShowModal(false)}>
          <img
            src="/images/icons/close-btn.svg"
            alt="close modal btn"
            className="modal__close-btn"
            width={35}
            height={35}
          />
        </div>
        {children}
      </div>
    </main>,
    document.getElementById("modal")
  );
}

Modal.propTypes = {
  children: PropTypes.object,
  showModal: PropTypes.bool,
  setShowModal: PropTypes.func,
};
