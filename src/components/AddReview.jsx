import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addReviewAction } from "../actions/reviewActions";
import { toast } from "react-toastify";
import PropTypes from "prop-types";
import Button from "./Button";

const addReviewId = "addReviewId";

export default function AddReview({ id, name }) {
  const [content, setContent] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleAddReview(e) {
    e.preventDefault();
    if (!content) {
      toast.error("Review content is mandatory!", { toastId: addReviewId });
      return;
    }
    dispatch(addReviewAction(id, content));
    setContent("");
  }

  return (
    <div className="review">
      <div className="review__title">
        <h4>
          add your review about <br />
          <button onClick={() => navigate(-1)}>
            <strong>
              <em>{name}</em>
            </strong>
          </button>
        </h4>
      </div>
      <div className="review__form-container">
        <form className="review__form" onSubmit={handleAddReview}>
          <div className="form__control">
            <label htmlFor="content" className="form__label">
              add review
            </label>
            <textarea
              className="form__input"
              id="content"
              cols="4"
              rows="5"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
          <Button className="button-light" type="submit" text="save" />
        </form>
      </div>
    </div>
  );
}

AddReview.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  rating: PropTypes.number,
};
