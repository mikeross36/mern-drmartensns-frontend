import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useModal } from "../StateManager/ModalContext";
import Button from "./Button";

const forgotId = "forgotId";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  const { setShowModal2 } = useModal();

  async function handleForgotPassword(e) {
    e.preventDefault();
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        "https://drmartensns-api.onrender.com/api/v1/users/forgot-password",
        { email },
        config
      );
      if (data.status === "success") {
        toast.success("Reset token sent by email!", { toastId: forgotId });
      }
      setEmail("");
      setShowModal2(false);
    } catch (err) {
      toast.error(err.response?.data.message, { toastId: forgotId });
    }
  }

  return (
    <div className="forgot__form-container">
      <form className="forgot__form" onSubmit={handleForgotPassword}>
        <h3 className="forgot__title">enter your email</h3>
        <div className="input__control">
          <input
            type="email"
            className="form__input"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <Button type="submit" className="button-light" text="send" />
      </form>
    </div>
  );
}
