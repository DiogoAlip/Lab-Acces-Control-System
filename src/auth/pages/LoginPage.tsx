import { useContext, useState } from "react";
import { user } from "../../assets";
import { fingerprint, lock } from "../assets";
import { useUserLogin } from "../hooks/useUserLoginReducer";
import { useLocation } from "wouter";
import { AuthContext } from "../context";

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
    login();
    setLocation(`/dashboard/${name}/${passwd}`);
  };

  return (
    <div className="login-modal_container">
      <div className="login-modal">
        <img className="big-image" src={fingerprint} alt="scan your qrcode" />
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
            <a href="safari.com">¿Olvido su contraseña?</a>
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
