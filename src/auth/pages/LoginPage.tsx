import { useState } from "react";
import { user } from "../../assets";
import { lock } from "../assets";
import { Link } from "wouter";
import { useForm } from "../hooks/useForm";
import { startLogginUser } from "../../store/thunks";
import { useDispatch, useSelector } from "react-redux";

const initialForm = { name: "", password: "" };
const initialFormValidator = {
  name: [(nameValue: string) => nameValue.length > 3, "el nombre es muy corto"],
  password: [
    (passwordValue: string) => passwordValue.length > 3,
    "la contraseña es muy corta",
  ],
};

export const LoginPage = () => {
  const { name, password, onChangeField, resetForm, nameValid, passwordValid } =
    useForm(initialForm, initialFormValidator);

  const [RememberPassw, setRememberPassw] = useState(false);
  const [attempedSubmit, setAttempedSubmit] = useState(false);
  const dispatch = useDispatch();
  const { errorMessage } = useSelector(
    (state: { auth: { errorMessage: string } }) => state.auth
  );

  const onClickStartSession = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setAttempedSubmit(true);
    if (nameValid && passwordValid) {
      resetForm();
      return;
    }
    dispatch(startLogginUser(name, password));
  };

  return (
    <div className="login-modal_container">
      <header className="header login-header">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/835f3315e241fe0b7aafd9b6af9992b097649fc0232423055b703ef15a3b9eed?apiKey=d337f2d517f4408a99dd126ae7e4b446&"
          alt=""
          className="main-image"
        />
      </header>
      <div className="login-modal">
        <form className="login" action="" onSubmit={() => {}}>
          {nameValid && attempedSubmit ? <label>{nameValid}</label> : false}
          <div className="name-container">
            <div className="little-image_container">
              <img src={user} alt="" />
            </div>
            <input
              type="text"
              value={name || ""}
              onChange={onChangeField}
              placeholder="Nombre"
              name="name"
              required
            />
          </div>
          {passwordValid && attempedSubmit ? (
            <label>{passwordValid}</label>
          ) : (
            false
          )}
          <div className="password-container">
            <div className="little-image_container">
              <img src={lock} alt="" />
            </div>
            <input
              type="password"
              value={password || ""}
              placeholder="Contraseña"
              name="password"
              onChange={onChangeField}
              required
            />
          </div>
          <div className="login-options_container">
            <div className="login-options-remember">
              <input
                type="checkbox"
                checked={RememberPassw}
                onChange={() => setRememberPassw(!RememberPassw)}
              />
              <p>Recordar contraseña</p>
            </div>
            <Link to="/register">¿Olvido su contraseña?</Link>
          </div>
          {errorMessage ? <p id="error-login-message">{errorMessage}</p> : true}
          <button onClick={(e) => onClickStartSession(e)}>
            Iniciar Session
          </button>
        </form>
      </div>
    </div>
  );
};
