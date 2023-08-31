import { useEffect, useState } from "react";
import { getAllFootwearAction } from "../actions/footwearActions";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import ShopItem from "../components/ShopItem";

export default function Shop({ itemsPerPage = 4, pagesPerPagination = 4 }) {
  const [currentPage, setCurrentPage] = useState(1);
  const footwearState = useSelector((state) => state.getAllFootwear);
  const { footwear } = footwearState;

  const totalPages = Math.round(footwear?.length / itemsPerPage);

  const dispatch = useDispatch();

  useEffect(
    function () {
      dispatch(getAllFootwearAction());
    },
    [dispatch]
  );

  useEffect(function () {
    window.scrollTo({ behavior: "smooth", top: "0px" });
  });

  function setItemsToPage() {
    const startIdx = currentPage * itemsPerPage - itemsPerPage;
    const endIdx = startIdx + itemsPerPage;
    return footwear?.slice(startIdx, endIdx);
  }

  function setPageButtons() {
    const startIdx = Math.floor(
      ((currentPage - 1) / pagesPerPagination) * pagesPerPagination
    );
    return [...Array(pagesPerPagination).keys()].map(function (_, idx) {
      return startIdx + idx + 1;
    });
  }

  function changeCurrentPage(e) {
    const pageNumber = Number(e.target.textContent);
    setCurrentPage(pageNumber);
  }

  function previousPage() {
    if (currentPage !== 1) {
      setCurrentPage((page) => page - 1);
    }
  }

  function nextPage() {
    if (currentPage !== totalPages) {
      setCurrentPage((page) => page + 1);
    }
  }

  const itemsNum = footwear?.length;

  return (
    <section className="shop section">
      <h2 className="section__title">dr martensns</h2>
      <ul className="shop__container grid">
        {itemsNum > 0 &&
          setItemsToPage().map(function (item) {
            return <ShopItem key={item.id} item={item} />;
          })}
      </ul>
      <div className="shop__pagination">
        <button className="page__nav-btn" onClick={previousPage}>
          prev
        </button>
        {setPageButtons().map(function (pageNumber, idx) {
          return (
            <button
              onClick={changeCurrentPage}
              key={idx}
              className={`page__number ${
                currentPage === pageNumber
                  ? "active-btn"
                  : currentPage >= totalPages && "disabled-btn"
              }`}
            >
              {pageNumber}
            </button>
          );
        })}
        <button className="page__nav-btn" onClick={nextPage}>
          next
        </button>
      </div>
    </section>
  );
}

Shop.propTypes = {
  itemsPerPage: PropTypes.number,
  pagesPerPagination: PropTypes.number,
  setShowModal1: PropTypes.func,
};
