import { api } from "../utils/axiosConfig";
import { toast } from "react-toastify";

const userActionId = "userActionId";

export function updateAccountAction(name, email, formData) {
  return async function (dispatch) {
    dispatch({ type: "UPDATE_ACCOUNT_REQUEST" });
    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };
      const { data } = await api.patch(
        "/api/v1/users/update-user-account",
        { name, email, formData },
        config
      );
      dispatch({ type: "UPDATE_ACCOUNT_SUCCESS", payload: data.updatedUser });
      if (data.status === "success") {
        toast.warning(
          "Data updated successfully! Please login again with new data!",
          { autoClose: 3000, toastId: userActionId }
        );
      }
      console.log(formData);
    } catch (err) {
      dispatch({
        type: "UPDATE_ACCOUNT_FAILED",
        payload: err.response?.data.message,
      });
      toast(err.response?.data.message, { toastId: userActionId });
    }
  };
}
