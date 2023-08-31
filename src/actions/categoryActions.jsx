import axios from "axios";
import { toast } from "react-toastify";

const categoryId = "categoryId";

export function getAllCategoriesAction() {
  return async function (dispatch) {
    dispatch({ type: "GET_ALL_CATEGORIES_REQUEST" });
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.get(
        "https://drmartensns-api.onrender.com/api/v1/categories",
        config
      );
      dispatch({ type: "GET_ALL_CATEGORIES_SUCCESS", payload: data });
    } catch (err) {
      dispatch({
        type: "GET_ALL_CATEGORIES_FAILED",
        payload: err.response?.data.message,
      });
      toast.error(err.response?.data.message, { toastId: categoryId });
    }
  };
}

export function getCategoryAction(id) {
  return async function (dispatch) {
    dispatch({ type: "GET_CATEGORY_REQUEST" });
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.get(
        `https://drmartensns-api.onrender.com/api/v1/categories/${id}`,
        config
      );
      dispatch({ type: "GET_CATEGORY_SUCCESS", payload: data });
    } catch (err) {
      dispatch({
        type: "GET_CATEGORY_FAILED",
        payload: err.response?.data.message,
      });
      toast.error(err.response?.data.message, { toastId: categoryId });
    }
  };
}
