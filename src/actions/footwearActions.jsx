import api from "../utils/axiosConfig";
import { toast } from "react-toastify";

const footwearId = "footwearId";

export function getAllFootwearAction() {
  return async function (dispatch) {
    dispatch({ type: "GET_ALL_FOOTWEAR_REQUEST" });
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await api.get("/api/v1/footwear", config);
      dispatch({ type: "GET_ALL_FOOTWEAR_SUCCESS", payload: data });
    } catch (err) {
      dispatch({
        type: "GET_ALL_FOOTWEAR_FAILED",
        payload: err.response?.data.message,
      });
      toast.error(err.response?.data.message, { toastId: footwearId });
    }
  };
}

export function getFootwearAction(id) {
  return async function (dispatch) {
    dispatch({ type: "GET_FOOTWEAR_REQUEST" });
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await api.get(`/api/v1/footwear/${id}`, config);
      dispatch({ type: "GET_FOOTWEAR_SUCCESS", payload: data });
    } catch (err) {
      dispatch({
        type: "GET_FOOTWEAR_FAILED",
        payload: err.response?.data.message,
      });
      toast.error(err.response?.data.message, { toastId: footwearId });
    }
  };
}
