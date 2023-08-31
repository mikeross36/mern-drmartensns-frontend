import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  updatePasswordAction,
  logoutUserAction,
} from "../../actions/authActions";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Button from "../../components/Button";

const updatePasswordId = "updatePasswordId";

export default function UpdatePassword() {
  const [loginPassword, setLoginPassword] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleUpdatePassword(e) {
    e.preventDefault();
    if (!loginPassword || !password || !passwordConfirm) {
      toast.error("All the fields are mandatory!", {
        toastId: updatePasswordId,
      });
      return;
    } else if (password !== passwordConfirm) {
      toast.error("Passwords do not match!", { toastId: updatePasswordId });
      return;
    } else {
      dispatch(updatePasswordAction(loginPassword, password));
      const timer = setTimeout(function () {
        dispatch(logoutUserAction());
        navigate("/login");
      }, 3500);
      return function () {
        clearTimeout(timer);
      };
    }
  }

  return (
    <div className="update__form-container">
      <h3 className="update__title">update password</h3>
      <form className="update__form-password" onSubmit={handleUpdatePassword}>
        <div className="input__control">
          <input
            type="password"
            name="login-password"
            className="form__input"
            placeholder="current password..."
            value={loginPassword}
            onChange={(e) => setLoginPassword(e.target.value)}
          />
        </div>
        <div className="input__control">
          <input
            type="password"
            name="password"
            className="form__input"
            placeholder="new password..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="input__control">
          <input
            type="password"
            name="password-confirm"
            className="form__input"
            placeholder="confirm password"
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
          />
        </div>
        <Button
          type="submit"
          className="button-light submit__btn"
          text="update"
        />
      </form>
    </div>
  );
}
