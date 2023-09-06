import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { signupUserAction } from "../actions/authActions";
import Button from "../components/Button";

const signupId = "signupId";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const dispatch = useDispatch();

  function handleSignupUser(e) {
    e.preventDefault();
    if (!name || !email || !password || !passwordConfirm) {
      toast.error("All the fields are mandatory!");
      return;
    } else if (password !== passwordConfirm) {
      toast.error("Passwords do not match!", { toastId: signupId });
      return;
    }
    dispatch(signupUserAction(name, email, password));
    setName("");
    setEmail("");
    setPassword("");
    setPasswordConfirm("");
  }

  return (
    <section className="signup">
      <div className="signup__form-container">
        <h2 className="signup__title">create account</h2>
        <form className="signup__form" onSubmit={handleSignupUser}>
          <div className="input__control">
            <input
              type="text"
              className="form__input"
              placeholder="your username"
              name="username"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="input__control">
            <input
              type="email"
              className="form__input"
              placeholder="some@email.com"
              name="email"
              required
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
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="input__control">
            <input
              type="password"
              className="form__input"
              placeholder="confirm password"
              name="passwordConfirm"
              required
              value={passwordConfirm}
              onChange={(e) => setPasswordConfirm(e.target.value)}
            />
          </div>
          <Button
            type="submit"
            className="submit__btn button-light"
            text="signup"
          />
          <div className="already__link">
            <span>Already have an account?</span>
            <Link to="/login">Login</Link>
          </div>
        </form>
      </div>
    </section>
  );
}
