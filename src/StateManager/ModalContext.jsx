import { useState, createContext, useContext } from "react";
import PropTypes from "prop-types";

const ModalContext = createContext();

function ModalProvider({ children }) {
  const [showModal1, setShowModal1] = useState(false); // cart
  const [showModal2, setShowModal2] = useState(false); // forgot password

  return (
    <ModalContext.Provider
      value={{ showModal1, setShowModal1, showModal2, setShowModal2 }}
    >
      {children}
    </ModalContext.Provider>
  );
}

function useModal() {
  const context = useContext(ModalContext);
  return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export { ModalProvider, useModal };

ModalProvider.propTypes = {
  children: PropTypes.object,
};
