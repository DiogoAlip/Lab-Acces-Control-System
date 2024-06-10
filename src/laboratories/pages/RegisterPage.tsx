import "./registerStyles.css";
export const RegisterPage = () => {
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

      <form className="input-container">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/8a52060f07eacf81306375e38be3e18e2fb74529965f8fd54113602761fa2dbd?apiKey=d337f2d517f4408a99dd126ae7e4b446&"
          alt=""
          className="input-icon"
        />
        <input
          type="email"
          id="emailInput"
          className="placeholder-text"
          placeholder="Email@ejemplo.com"
          aria-label="Email input"
        />
      </form>

      <button className="submit-button" type="submit">
        Enviar
      </button>
    </div>
  );
};
