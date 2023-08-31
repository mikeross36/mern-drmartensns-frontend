import { Link } from "react-router-dom";
import Button from "../components/Button";

export default function Signup() {
  return (
    <section className="signup">
      <div className="signup__form-container">
        <h2 className="signup__title">create account</h2>
        <form className="signup__form">
          <div className="input__control">
            <input
              type="text"
              className="form__input"
              placeholder="your username"
              name="username"
            />
          </div>
          <div className="input__control">
            <input
              type="email"
              className="form__input"
              placeholder="some@email.com"
              name="email"
            />
          </div>
          <div className="input__control">
            <input
              type="password"
              className="form__input"
              placeholder="your password"
              name="password"
            />
          </div>
          <div className="input__control">
            <input
              type="password"
              className="form__input"
              placeholder="confirm password"
              name="passwordConfirm"
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
