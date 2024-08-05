import { useContext, useState } from "react";
import { user } from "../../assets";
import { lock } from "../assets";
import { useUserLogin } from "../hooks/useUserLoginReducer";
import { AuthContext } from "../context";
import { Link, useLocation } from "wouter";

export const LoginPage = () => {
  const [RememberPassw, setRememberPassw] = useState(false);
  const { UserLogin, onSetUserLogin } = useUserLogin({
    name: "",
    passwd: "",
  });
  const [, setLocation] = useLocation();
  const { login } = useContext(AuthContext);

  const onClickUserLogin = ({
    target: { value, name },
  }: {
    target: { value: string; name: string };
  }) => {
    onSetUserLogin({ ...UserLogin, [name]: value });
  };

  const onClickStartSession = ({
    name,
    passwd,
  }: {
    name: string;
    passwd: string;
  }) => {
    if (name.length <= 8 && passwd.length <= 8) {
      window.alert("Tanto nombre como contraseña son muy cortos");
      return;
    } else if (name.length <= 8) {
      window.alert("El nombre es muy corto");
      return;
    } else if (passwd.length <= 8) {
      window.alert("La constraseña es muy corta");
      return;
    } else if (name != "William Marchand" && passwd != "cibersecurity") {
      return;
    }
    login(name, passwd);
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
        <form
          className="login"
          action=""
          onSubmit={(e) => {
            e.preventDefault();
            onClickStartSession({
              name: UserLogin.name,
              passwd: UserLogin.passwd,
            });
          }}
        >
          <div className="name-container">
            <div className="little-image_container">
              <img src={user} alt="" />
            </div>
            <input
              type="text"
              value={UserLogin.name}
              onChange={onClickUserLogin}
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
              value={UserLogin.passwd}
              placeholder="Contraseña"
              name="passwd"
              onChange={onClickUserLogin}
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
          <button
            onClick={() =>
              onClickStartSession({
                name: UserLogin.name,
                passwd: UserLogin.passwd,
              })
            }
          >
            Iniciar Session
          </button>
        </form>
      </div>
    </div>
  );
};
