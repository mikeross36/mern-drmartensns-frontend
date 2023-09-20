import { api } from "../utils/axiosConfig";
import { toast } from "react-toastify";

const reviewId = "reviewId";

export function getAllReviewsAction() {
  return async function (dispatch) {
    dispatch({ type: "GET_ALL_REVIEWS_REQUEST" });
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await api.get("/api/v1/reviews", config);
      dispatch({ type: "GET_ALL_REVIEWS_SUCCESS", payload: data });
    } catch (err) {
      dispatch({
        type: "GET_ALL_REVIEWS_FAILED",
        payload: err.response?.data.message,
      });
      toast.error(err.reponse?.data.message, { toastId: reviewId });
    }
  };
}

export function getReviewAction(id) {
  return async function (dispatch) {
    dispatch({ type: "GET_REVIEW_REQUEST" });
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await api.get(`/api/v1/reviews/${id}`, config);
      dispatch({ type: "GET_REVIEW_SUCCESS", payload: data });
    } catch (err) {
      dispatch({
        type: "GET_REVIEW_FAILED",
        payload: err.response?.data.message,
      });
      toast.error(err.response?.data.message, { toastId: reviewId });
    }
  };
}

export function addReviewAction(id, content) {
  return async function (dispatch, getState) {
    dispatch({ type: "ADD_REVIEW_REQUEST" });
    try {
      const {
        loginUser: { currentUser },
      } = getState();
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${currentUser.token}`,
        },
      };
      const { data } = await api.post(
        `/api/v1/footwear/${id}/reviews`,
        { content },
        config
      );
      dispatch({ type: "ADD_REVIEW_SUCCESS", payload: data });
      if (data.status === "success") {
        toast.success("Review added successfully!", { toastId: reviewId });
      }
    } catch (err) {
      dispatch({
        type: "ADD_REVIEW_FAILED",
        payload: err.response?.data.message,
      });
      toast.error(err.response?.data.message, { toastId: reviewId });
    }
  };
}
