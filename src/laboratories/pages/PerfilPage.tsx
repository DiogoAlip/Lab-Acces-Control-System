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

  const SpanishWords = {
    AJUSTES: "AJUSTES",
    NombresyApellidos: "Nombre(s) y Apellido(s)",
    Biografia: "Biografia",
    NumeroDeTelefono: "Numero de Telefono",
    AreaDeTrabajo: "Area de Trabajo",
    SupervisorAdministrativo: "Supervisor Administrativo",
    RamaPerteneciente: "Rama perteneciente",
    GradoMaximo: "Grado maximo",
    EspecialistaenCiberseguridadyAuditoria:
      "Especialista en Ciberseguridad y auditoria",
    CambiarIdioma: "Cambiar idioma",
    FechadeIntegracion: "Fecha de Integracion",
  };

  const EnglishWords = {
    AJUSTES: "SETTIGNS",
    NombresyApellidos: "Name(s) and LastName(s)",
    Biografia: "Biography",
    NumeroDeTelefono: "Telephone Number",
    AreaDeTrabajo: "Work area",
    SupervisorAdministrativo: "Administrative supervisor",
    RamaPerteneciente: "Branch belonging to",
    GradoMaximo: "Maximum degree",
    EspecialistaenCiberseguridadyAuditoria:
      "Cybersecurity and audit specialist",
    CambiarIdioma: "Change Lenguage",
    FechadeIntegracion: "Integration Date",
  };
  const HomeWords = language == "Español" ? SpanishWords : EnglishWords;
  return (
    <div className="profile-card">
      <header className="perfil_header-section">
        <section className="settings-section">
          <div className="settings-actions">
            <div className="settings-image"></div>
            <div className="settings-text">{HomeWords.AJUSTES}</div>
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
            <div className="label">{HomeWords.NombresyApellidos}:</div>
            <div className="value">{userName}</div>
          </div>
        </div>
        <div className="biography">{HomeWords.Biografia}:</div>
        <div className="biography-value">
          Docente e investigador, siempre innovando
        </div>
        <div className="phone">{HomeWords.NumeroDeTelefono}:</div>
        <div className="phone-value">+51 999 999 999</div>
        <div className="job-area">{HomeWords.AreaDeTrabajo}:</div>
        <div className="job-area-value">
          {HomeWords.SupervisorAdministrativo}
        </div>
        <div className="branch">{HomeWords.RamaPerteneciente}:</div>
        <div className="branch-value">RESEGTI</div>
        <div className="degree">{HomeWords.GradoMaximo}:</div>
        <div className="degree-value">
          {HomeWords.EspecialistaenCiberseguridadyAuditoria}
        </div>
        <div className="integration-date">{HomeWords.FechadeIntegracion}:</div>
        <div className="integration-date-value">12/8/09</div>
        <hr />
        <div className="biography">
          <p>{HomeWords.CambiarIdioma}:</p>
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
