import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUserAction } from "../actions/authActions";
import { useModal } from "../StateManager/ModalContext";
import Button from "../components/Button";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setShowModal2 } = useModal();

  const dispatch = useDispatch();

  function handleLoginUser(e) {
    e.preventDefault();
    dispatch(loginUserAction(email, password));
    setEmail("");
    setPassword("");
  }

  return (
    <section className="login section">
      <div className="login__form-container">
        <form className="login__form" onSubmit={handleLoginUser}>
          <h2 className="login__title">login</h2>
          <div className="input__control">
            <input
              type="email"
              className="form__input"
              placeholder="some@email.com"
              name="email"
              autoComplete="off"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input__control">
            <input
              type="password"
              className="form__input"
              placeholder="your password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <span>
            <Button
              type="submit"
              className="submit__btn button-light"
              text="login"
            />
          </span>
          <div className="already__link" onClick={() => setShowModal2(true)}>
            <Link>Forgot password</Link>
          </div>
          <div className="already__link-signup">
            <span style={{ marginRight: "10px" }}>Do not have an account?</span>
            <Link to="/signup">Signup</Link>
          </div>
        </form>
      </div>
    </section>
  );
}
