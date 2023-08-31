import { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaAngleDoubleDown, FaTimes } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { logoutUserAction } from "../../actions/authActions";
import { getUserOrdersAction } from "../../actions/orderActions";
import PropTypes from "prop-types";
import useOutsideClick from "../../hooks/useOutsideClick";

const apiUrl = import.meta.env.VITE_API_URL;

export default function DropdownMenu({ closeMobMenu }) {
  const [showDropdown, setShowDropdown] = useState(false);
  const authState = useSelector((state) => state.loginUser);
  const { currentUser } = authState;

  function handleToggleDropdown() {
    setShowDropdown(!showDropdown);
  }

  const dropRef = useRef(null);
  useOutsideClick(dropRef, function () {
    setShowDropdown(false);
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleLogoutUser() {
    dispatch(logoutUserAction());
    navigate("/");
  }

  return (
    <main className="dropdown__menu" ref={dropRef}>
      <div
        className={`dropdown__menu-content ${
          showDropdown ? "show-dropdown" : ""
        }`}
      >
        <button
          className="dropdown__menu-button"
          onClick={handleToggleDropdown}
        >
          <img
            src={
              `${apiUrl}/images/users/default.jpg` ||
              `${apiUrl}/images/users/${currentUser?.user.photo}`
            }
            alt="logged in user pic"
            className="dropdown__menu-user-img"
          />
          <span className="dropdown__menu-user">
            <p>{currentUser?.user.name.split(" ")[0]}</p>
          </span>
          <div className="dropdown__menu-icons">
            <FaAngleDoubleDown className="dropdown__arrow" />
            <FaTimes className="dropdown__close" />
          </div>
        </button>
        <ul
          className="dropdown__list"
          onClick={() => {
            closeMobMenu();
            setShowDropdown(false);
          }}
        >
          <li className="dropdown__item">
            <Link to="/user-account">
              <span className="dropdown__name">my account</span>
            </Link>
          </li>
          <li
            className="dropdown__item"
            onClick={() => dispatch(getUserOrdersAction())}
          >
            <Link to="/user-orders">
              <span className="dropdown__name">my orders</span>
            </Link>
          </li>
          <li className="dropdown__item" onClick={handleLogoutUser}>
            <span className="dropdown__name">logout</span>
          </li>
        </ul>
      </div>
    </main>
  );
}

DropdownMenu.propTypes = {
  closeMobMenu: PropTypes.func,
};
