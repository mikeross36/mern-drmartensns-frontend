import PropTypes from "prop-types";

export default function SearchForm({
  showSearch,
  closeSearchBar,
  handleSearch,
  searchTerm,
  setSearchTerm,
}) {
  return (
    <form
      className={`nav__search-form ${showSearch && "active-form"}`}
      onSubmit={handleSearch}
    >
      <label htmlFor="search-input" onClick={closeSearchBar}>
        <img
          src="/images/icons/close-btn.svg"
          alt="search close icon"
          width={20}
          height={20}
        />
      </label>
      <input
        type="search"
        className="search__input"
        id="search-input"
        placeholder="search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        autoComplete="off"
      />
    </form>
  );
}

SearchForm.propTypes = {
  showSearch: PropTypes.bool,
  closeSearchBar: PropTypes.func,
  handleSearch: PropTypes.func,
  searchTerm: PropTypes.string,
  setSearchTerm: PropTypes.func,
};
