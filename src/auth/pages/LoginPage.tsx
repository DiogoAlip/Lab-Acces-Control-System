import { useState } from "react";
import { user } from "../../assets";
import { lock } from "../assets";
import { Link, useLocation } from "wouter";
import { useForm } from "../hooks/useForm";

const initialData = { name: "", password: "" };
export const LoginPage = () => {
  const { name, password, onChangeField } = useForm(initialData);

  const [RememberPassw, setRememberPassw] = useState(false);
  const [, setLocation] = useLocation();

  const onClickStartSession = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setLocation(`dashboard/`);
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
          <button onClick={(e) => onClickStartSession(e)}>
            Iniciar Session
          </button>
        </form>
      </div>
    </div>
  );
};
