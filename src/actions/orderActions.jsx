import axios from "axios";
import { toast } from "react-toastify";

const orderId = "orderId";

export function createOrderAction(token, cartTotal) {
  return async function (dispatch, getState) {
    dispatch({ type: "CREATE_ORDER_REQUEST" });
    const currentUser = getState().loginUser.currentUser;
    const cartItems = getState().cart.cartItems;
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        "https://drmartensns-api.onrender.com/api/v1/orders/create-order",
        { token, cartTotal, currentUser, cartItems },
        config
      );
      dispatch({ type: "CREATE_ORDER_SUCCESS" });
      if (data.status === "success") {
        toast.success("Order created successfully!", { toastId: orderId });
      }
    } catch (err) {
      dispatch({
        type: "CREATE_ORDER_FAILED",
        payload: err.response?.data.message,
      });
      toast.error(err.response?.data.message);
    }
  };
}

export function getUserOrdersAction() {
  return async function (dispatch, getState) {
    dispatch({ type: "GET_USER_ORDERS_REQUEST" });
    const currentUser = getState().loginUser.currentUser;
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authrorization: `Bearer ${currentUser.token}`,
        },
      };
      const { data } = await axios.post(
        "https://drmartensns-api.onrender.com/api/v1/orders/get-user-orders",
        { userId: currentUser.user._id },
        config
      );
      dispatch({ type: "GET_USER_ORDERS_SUCCESS", payload: data });
    } catch (err) {
      dispatch({
        type: "GET_USER_ORDERS_FAILED",
        payload: err.response?.data.message,
      });
      toast.error(err.response?.data.message, { toastId: orderId });
    }
  };
}
