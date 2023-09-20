import { api } from "../utils/axiosConfig";
import { toast } from "react-toastify";

const authId = "authId";

export function signupUserAction(name, email, password) {
  return async function (dispatch) {
    dispatch({ type: "SIGNUP_USER_REQUEST" });
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await api.post(
        "/api/v1/users/signup-user",
        { name, email, password },
        config
      );
      dispatch({ type: "SIGNUP_USER_SUCCESS" });
      if (data.status === "success") {
        toast.success("You signed up successfully!", { toastId: authId });
      }
    } catch (err) {
      dispatch({
        type: "SIGNUP_USER_FAILED",
        payload: err.response?.data.message,
      });
      toast.error(err.response?.data.message, { toastId: authId });
    }
  };
}

export function loginUserAction(email, password) {
  return async function (dispatch) {
    dispatch({ type: "LOGIN_USER_REQUEST" });
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await api.post(
        `/api/v1/users/login-user`,
        { email, password },
        config
      );
      dispatch({ type: "LOGIN_USER_SUCCESS", payload: data });
      if (data.status === "success") {
        toast.success("You logged in successfully!", { toastId: authId });
      }
    } catch (err) {
      dispatch({
        type: "LOGIN_USER_FAILED",
        payload: err.response?.data.message,
      });
      toast.error(err.response?.data.message);
    }
  };
}

export function logoutUserAction() {
  return async function (dispatch) {
    dispatch({ type: "LOGOUT_USER_REQUEST" });
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await api.post("/api/v1/users/logout-user", config);
      dispatch({ type: "LOGOUT_USER_SUCCESS" });
      if (data.status === "success") {
        toast.success("You logged out successfully!", { toastId: authId });
      }
    } catch (err) {
      dispatch({
        type: "LOGOUT_USER_FAILED",
        payload: err.response?.data.message,
      });
      toast.error(err.response?.data.message, { toastId: authId });
    }
  };
}

export function resetPasswordAction(password, token) {
  return async function (dispatch) {
    dispatch({ type: "RESET_PASSWORD_REQUEST" });
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await api.patch(
        `/api/v1/users/reset-password/${token.token}`,
        { password },
        config
      );
      dispatch({ type: "RESET_PASSWORD_SUCCESS" });
      if (data.status === "success") {
        toast.success("Password reset successfully!", { toastId: authId });
      }
    } catch (err) {
      dispatch({
        type: "RESET_PASSWORD_FAILED",
        payload: err.response?.data.message,
      });
      toast.error(err.response?.data.message,{ toastId: authId });
    }
  };
}

export function updatePasswordAction(loginPassword, password) {
  return async function (dispatch) {
    dispatch({ type: "UPDATE_PASSWORD_REQUEST" });
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await api.patch(
        "/api/v1/users/update-password",
        { loginPassword, password },
        config
      );
      dispatch({ type: "UPDATE_PASSWORD_SUCCESS" });
      if (data.status === "success") {
        toast.warning(
          "Password updated successfully! Please login with new data!",
          { autoClose: 3000, toastId: authId }
        );
      }
    } catch (err) {
      dispatch({
        type: "UPDATE_PASSWORD_FAILED",
        payload: err.response?.data.message,
      });
      toast.error(err.response?.data.message, { toastId: authId });
    }
  };
}
