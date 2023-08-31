import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateAccountAction } from "../../actions/userActions";
import { logoutUserAction } from "../../actions/authActions";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";

const apiUrl = import.meta.env.VITE_API_URL;

export default function UpdateAccount() {
  const authState = useSelector((state) => state.loginUser);
  const { currentUser } = authState;
  const [name, setName] = useState(
    currentUser?.user ? currentUser.user.name : ""
  );
  const [email, setEmail] = useState(
    currentUser?.user ? currentUser.user.email : ""
  );
  const [photo, setPhoto] = useState(null);
  const [photoPreview, setPhotoPreview] = useState(
    `${apiUrl}/images/users/default.jpg`
  );

  function checkPhoto(e) {
    const file = e.target.files[0];
    setPhoto(file);
    if (e.target.files.length !== 0) {
      setPhotoPreview(URL.createObjectURL(file));
    }
  }

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleUpdateAccount(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", photo);
    dispatch(updateAccountAction(name, email, formData));

    const timer = setTimeout(function () {
      dispatch(logoutUserAction());
      navigate("/login");
    }, 3000);
    return function () {
      clearTimeout(timer);
    };
  }

  return (
    <div className="update__form-container">
      <h3 className="update__title">update account</h3>
      <form className="update__form-user" onSubmit={handleUpdateAccount}>
        <div className="input__control">
          <input
            type="text"
            className="form__input"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="input__control">
          <input
            type="email"
            name="email"
            className="form__input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input__control">
          <img
            src={
              photoPreview ||
              `${apiUrl}/images/users/default.jpg` ||
              `${apiUrl}/images/users/${currentUser.user.photo}`
            }
            alt="update account user pic"
            className="update__photo"
          />
          <input
            type="file"
            className="update__input"
            accept={`${apiUrl}/images/*`}
            onChange={checkPhoto}
          />
        </div>
        <Button type="submit" className="button-light" text="update" />
      </form>
    </div>
  );
}
