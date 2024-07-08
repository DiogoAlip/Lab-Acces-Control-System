import { useContext } from "react";
import { AuthContext } from "../../auth/context";
import "./perfilStyles.css";
import { LanguageContext } from "../context/LanguageContext";
export const PerfilPage = () => {
  const { userName } = useContext(AuthContext);
  const { language, LanguageChager } = useContext(LanguageContext);
  const onChangeLanguage = (e: { target: { value: string } }) => {
    LanguageChager(e.target.value);
  };
  return (
    <div className="profile-card">
      <header className="perfil_header-section">
        <section className="settings-section">
          <div className="settings-actions">
            <div className="settings-image"></div>
            <div className="settings-text">AJUSTES</div>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/ad95c3a43b439c976fc77badebafe1c28261c12e2db88095a503cfffcb1f968d?apiKey=d337f2d517f4408a99dd126ae7e4b446&"
              alt="Settings Gear Icon"
              className="settings-image"
            />
          </div>
        </section>
      </header>
      <section className="details-section">
        <div className="name-section">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/aba0b9fd34ab76d14795d3a298f464c8c7b2ceacd1f8025572e73031ae8813b3?apiKey=d337f2d517f4408a99dd126ae7e4b446&"
            alt="User Icon"
            className="name-image"
          />
          <div className="name-info">
            <div className="label">Nombre(s) y Apellido(s):</div>
            <div className="value">{userName}</div>
          </div>
        </div>
        <div className="biography">Biografia:</div>
        <div className="biography-value">
          Docente e investigador, siempre innovando
        </div>
        <div className="phone">Numero de Telefono:</div>
        <div className="phone-value">+51 999 999 999</div>
        <div className="job-area">Area de Trabajo:</div>
        <div className="job-area-value">Supervisor Administrativo</div>
        <div className="branch">Rama perteneciente:</div>
        <div className="branch-value">RESEGTI</div>
        <div className="degree">Grado maximo:</div>
        <div className="degree-value">
          Especialista en Ciberseguridad y auditoria
        </div>
        <div className="integration-date">Fecha de integracion:</div>
        <div className="integration-date-value">12/8/09</div>
        <hr />
        <div className="biography">
          <p>Cambiar idioma:</p>
          <select
            value={language}
            name="language"
            id="language"
            className="select-info-litle"
            onChange={onChangeLanguage}
          >
            <option className="info-text">Español</option>
            <option className="info-text">English</option>
          </select>
        </div>
      </section>
    </div>
  );
};
