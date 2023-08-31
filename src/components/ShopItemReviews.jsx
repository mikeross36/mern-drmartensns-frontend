import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getFootwearAction } from "../actions/footwearActions";
import { getAllReviewsAction } from "../actions/reviewActions";
import PropTypes from "prop-types";
import RatingStars from "./RatingStars";

const apiUrl = import.meta.env.VITE_API_URL;

export default function ShopItemReviews({ id }) {
  const footwearState = useSelector((state) => state.getFootwear);
  const { footwear } = footwearState;
  const reviewsState = useSelector((state) => state.getAllReviews);
  const { reviews } = reviewsState;

  function getReviewRating() {
    const rating = reviews.find((review) => {
      if (footwear?.id === review?.footwear.id) {
        return review.rating;
      }
    });
    return rating?.rating;
  }

  const [reviewRating, setReviewRating] = useState(getReviewRating);

  const dispatch = useDispatch();

  useEffect(
    function () {
      dispatch(getFootwearAction(id));
    },
    [dispatch, id]
  );

  useEffect(
    function () {
      dispatch(getAllReviewsAction());
    },
    [dispatch]
  );

  const reviewsNum = footwear?.reviews.length;

  return (
    <div className="reviews grid">
      {!reviewsNum ? (
        <h3 className="reviews__title">No reviews on this item</h3>
      ) : (
        <h3 className="reviews__title">User reviews</h3>
      )}
      <div className="reviews__container">
        {footwear?.reviews.map((review) => {
          return (
            <article className="review__card" key={review.id}>
              <div className="review__avatar">
                <img
                  src={`${apiUrl}/images/users/${review.user.photo}`}
                  alt="user review pic"
                  className="review__avatar-img"
                />
                <p className="review__user">{review.user.name}</p>
              </div>
              <p className="review__content">{review.content}</p>
              <RatingStars
                value={review.rating}
                starSize={15}
                colorInactive="#a9a9a9"
                colorActive="#FFBA5A"
                itemRating={reviewRating}
                setItemRating={setReviewRating}
              />
            </article>
          );
        })}
      </div>
    </div>
  );
}

ShopItemReviews.propTypes = {
  id: PropTypes.string,
};
