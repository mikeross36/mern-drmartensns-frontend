import { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { resetPasswordAction } from "../actions/authActions";
import { toast } from "react-toastify";
import Button from "../components/Button";

const resetId = "resetId";

export default function ResetPassword() {
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const token = useParams();
  const dispatch = useDispatch();

  function handleResetPassword(e) {
    e.preventDefault();
    if (!password || !passwordConfirm) {
      toast.error("All the fields are mandatory!", { tostId: resetId });
      return;
    } else if (password !== passwordConfirm) {
      toast.error("Passwords do not match!", { tostId: resetId });
      return;
    } else {
      dispatch(resetPasswordAction(password, token));
      setPassword("");
      setPasswordConfirm("");
    }
  }

  return (
    <section className="reset__password section">
      <div className="reset__form-container">
        <h2 className="reset__title">reset password</h2>
        <form className="reset__password-form" onSubmit={handleResetPassword}>
          <div className="input__control">
            <input
              type="password"
              className="form__input"
              name="password"
              placeholder="new password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="input__control">
            <input
              type="password"
              className="form__input"
              name="passwordConfirm"
              placeholder="confirm new password"
              value={passwordConfirm}
              onChange={(e) => setPasswordConfirm(e.target.value)}
            />
          </div>
          <Button
            type="submit"
            className="submit__btn button-light"
            text="reset"
          />
        </form>
      </div>
    </section>
  );
}
