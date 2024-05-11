import { useState } from "react";
import { user } from "../../assets";
import { fingerprint, lock } from "../assets";
import { useUserLogin } from "../hooks/useUserLoginReducer";

export const LoginPage = () => {
  const [RememberPassw, setRememberPassw] = useState(false);
  const { UserLogin, onSetUserLogin } = useUserLogin({
    name: "",
    passwd: "",
  });

  const onClickUserLogin = ({
    target: { value, name },
  }: {
    target: { value: string; name: string };
  }) => {
    onSetUserLogin({ ...UserLogin, [name]: value });
    console.log();
  };

  return (
    <div className="login-modal_container">
      <div className="login-modal">
        <img className="big-image" src={fingerprint} alt="scan your qrcode" />
        <form
          className="login"
          action=""
          onSubmit={() => console.log("sending . . .")}
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
          <button>Iniciar Session</button>
        </form>
      </div>
    </div>
  );
};
