import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function SearchListItem({ item, closeSearchBar }) {
  return (
    <Link to={`/footwear/${item._id}`} onClick={closeSearchBar}>
      <li className="search__item">
        <span>{item.name}</span>
      </li>
    </Link>
  );
}

SearchListItem.propTypes = {
  item: PropTypes.object,
  closeSearchBar: PropTypes.func,
};
