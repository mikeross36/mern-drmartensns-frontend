import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import ShopItem from "./ShopItem";
import Spinner from "./Spinner";

export default function Category({ itemsPerPage = 3, pagesPerPagination = 4 }) {
  const [currentPage, setCurrentPage] = useState(1);

  const footwearState = useSelector((state) => state.getAllFootwear);
  const { footwear, loading } = footwearState;
  const totalPages = Math.round(footwear?.length / itemsPerPage);

  const categoryState = useSelector((state) => state.getCategory);
  const { category } = categoryState;

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

  return (
    <section className="category section">
      <h3 className="section__title">footwear by category {category.name}</h3>
      {loading ? (
        <Spinner />
      ) : (
        <ul className="category__container grid">
          {category?.name === "boots"
            ? setItemsToPage().map(function (item) {
                return <ShopItem key={item.id} item={item} />;
              })
            : category?.footwears?.map((item) => {
                return <ShopItem key={item.id} item={item} />;
              })}
        </ul>
      )}
      {category?.name === "boots" ? (
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
      ) : null}
    </section>
  );
}

Category.propTypes = {
  itemsPerPage: PropTypes.number,
  pagesPerPagination: PropTypes.number,
  setShowModal1: PropTypes.func,
};
