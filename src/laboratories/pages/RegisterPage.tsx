import { useState } from "react";
import "./registerStyles.css";

export const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState("");

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setEmail(value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email.includes("@"))
      return setValidEmail("el email debe contener '@' ");
    setValidEmail("");
  };

  return (
    <div className="register-container">
      <header className="header">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/835f3315e241fe0b7aafd9b6af9992b097649fc0232423055b703ef15a3b9eed?apiKey=d337f2d517f4408a99dd126ae7e4b446&"
          alt=""
          className="main-image"
        />
      </header>

      <h1 className="title">¿Olvido su contraseña?</h1>
      <p className="description">
        Ingrese un correo electrónico, para realizar la recuperación de su
        contraseña.
      </p>

      {validEmail.length === 0 ? true : <p>{validEmail}</p>}

      <form action="" onSubmit={(e) => onSubmit(e)} className="form">
        <div className="input-container">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8a52060f07eacf81306375e38be3e18e2fb74529965f8fd54113602761fa2dbd?apiKey=d337f2d517f4408a99dd126ae7e4b446&"
            alt=""
            className="input-icon"
          />
          <input
            type="text"
            name="email"
            value={email || ""}
            onChange={onChangeEmail}
            id="emailInput"
            className="placeholder-text"
            placeholder="Email@ejemplo.com"
            aria-label="Email input"
          />
        </div>
        <button className="submit-button" type="submit">
          Enviar
        </button>
      </form>
    </div>
  );
};
