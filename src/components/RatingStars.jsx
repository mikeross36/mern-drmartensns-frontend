import { FaStar } from "react-icons/fa";
import PropTypes from "prop-types";

export default function RatingStars({
  value,
  starSize,
  colorInactive,
  colorActive,
  itemRating,
  setItemRating,
}) {
  return (
    <div className="rating__stars">
      {[...Array(5).keys()].map(function (_, idx) {
        const ratingValue = idx + 1;
        return (
          <label key={idx}>
            <input
              type="radio"
              name="rating"
              value={value}
              onClick={function () {
                setItemRating(ratingValue);
              }}
            />
            <FaStar
              size={starSize}
              className="rating__star"
              color={ratingValue <= itemRating ? colorActive : colorInactive}
            />
          </label>
        );
      })}
    </div>
  );
}

RatingStars.propTypes = {
  value: PropTypes.number,
  starSize: PropTypes.number,
  colorInactive: PropTypes.string,
  colorActive: PropTypes.string,
  itemRating: PropTypes.number,
  setItemRating: PropTypes.func,
};
