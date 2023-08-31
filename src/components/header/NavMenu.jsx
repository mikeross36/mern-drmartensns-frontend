import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import DropdownMenu from "./DropdownMenu";

export default function NavMenu({
  showMobMenu,
  setShowMobMenu,
  closeSearchBar,
}) {
  const authState = useSelector((state) => state.loginUser);
  const { currentUser } = authState;

  function closeMobMenu() {
    setShowMobMenu(false);
    closeSearchBar();
  }

  return (
    <div
      className={`nav__menu ${showMobMenu && "show-menu"}`}
      onClick={closeMobMenu}
    >
      <ul className="nav__list">
        <li className="nav__item">
          <NavLink to="/" className="nav__link">
            home
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink to="/shop" className="nav__link">
            shop
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink to="/categories" className="nav__link">
            categories
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink to="/testimonials" className="nav__link">
            testoimonials
          </NavLink>
        </li>
        {!currentUser ? (
          <li className="nav__item">
            <NavLink to="/login" className="nav__link">
              login
            </NavLink>
          </li>
        ) : (
          <li className="nav__item" onClick={(e) => e.stopPropagation()}>
            <DropdownMenu closeMobMenu={closeMobMenu} />
          </li>
        )}
      </ul>
    </div>
  );
}

NavMenu.propTypes = {
  showMobMenu: PropTypes.bool,
  setShowMobMenu: PropTypes.func,
  closeSearchBar: PropTypes.func,
};
