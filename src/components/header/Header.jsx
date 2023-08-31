import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useModal } from "../../StateManager/ModalContext";
import { useDispatch, useSelector } from "react-redux";
import { getTotalsAction } from "../../actions/cartAction";
import { toast } from "react-toastify";
import axios from "axios";
import PropTypes from "prop-types";
import NavMenu from "./NavMenu";
import SearchForm from "../search/SearchForm";
import SearchList from "../search/SearchList";

const searchId = "searchId";

export default function Header() {
  const [showMobMenu, setShowMobMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const { setShowModal1 } = useModal();

  const cartState = useSelector((state) => state.cart);
  const { cartItems, itemsTotal } = cartState;

  const dispatch = useDispatch();

  useEffect(
    function () {
      dispatch(getTotalsAction());
    },
    [cartItems, dispatch]
  );

  function toggleMobMenu() {
    setShowMobMenu(!showMobMenu);
    if (showSearch) setShowSearch(false);
  }

  function openSearchBar() {
    setShowSearch(true);
  }

  function closeSearchBar() {
    setShowSearch(false);
    setSearchResults([]);
  }

  async function handleSearch(e) {
    e.preventDefault();
    if (!searchTerm) {
      toast.error("Search term is mandatory!", { toastId: searchId });
      return;
    }
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.get(
        `https://drmartensns-api.onrender.com/api/v1/footwear/search-footwear?search=${searchTerm}`,
        config
      );
      setSearchResults(data);
      setSearchTerm("");
    } catch (err) {
      toast.error(err.response?.data.message);
    }
  }

  return (
    <header className="header">
      <nav className="nav grid">
        <div className="nav__toggle" onClick={toggleMobMenu}>
          <img
            src="/images/icons/menu-btn.svg"
            alt="mob menu btn"
            width={30}
            height={30}
          />
        </div>
        <Link to="/" className="nav__logo">
          <img
            src="/images/icons/boot-logo.svg"
            alt="logo icon"
            width={30}
            height={30}
          />
          <span>martens</span>
        </Link>
        <NavMenu
          showMobMenu={showMobMenu}
          setShowMobMenu={setShowMobMenu}
          closeSearchBar={closeSearchBar}
        />
        <div className="nav__icons">
          <div className="nav__shop" onClick={() => setShowModal1(true)}>
            <img
              src="/images/icons/shopping-cart.svg"
              alt="shopping cart icon"
              width={30}
              height={30}
            />
            {cartItems.length > 0 && (
              <span className="cart__items-quant">{itemsTotal}</span>
            )}
          </div>
          <div className="nav__search" onClick={openSearchBar}>
            <img
              src="/images/icons/search-icon.svg"
              alt="search icon"
              style={{ cursor: "pointer" }}
              width={25}
              height={25}
            />
          </div>
        </div>
        <div className="nav__search-wrapper">
          <SearchForm
            showSearch={showSearch}
            closeSearchBar={closeSearchBar}
            handleSearch={handleSearch}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />
          {searchResults && searchResults.length > 0 && (
            <SearchList
              searchResults={searchResults}
              closeSearchBar={closeSearchBar}
            />
          )}
        </div>
      </nav>
    </header>
  );
}

Header.propTypes = {
  setShowModal1: PropTypes.func,
};
