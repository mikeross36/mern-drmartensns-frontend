import PropTypes from "prop-types";
import SearchListItem from "./SearchListItem";

export default function SearchList({ searchResults, closeSearchBar }) {
  return (
    <ul className="search__list">
      {searchResults?.map((item) => {
        return (
          <SearchListItem
            key={item._id}
            item={item}
            closeSearchBar={closeSearchBar}
          />
        );
      })}
    </ul>
  );
}

SearchList.propTypes = {
  searchResults: PropTypes.array,
  closeSearchBar: PropTypes.func,
};
