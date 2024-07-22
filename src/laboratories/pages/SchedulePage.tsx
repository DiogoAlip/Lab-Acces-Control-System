import { useContext } from "react";
import "./schedulesPage.css";
import { LanguageContext } from "../context/LanguageContext";
import { CalendaryBar } from "../components/CaledaryBar";

export const SchedulePage = () => {
  const { language } = useContext(LanguageContext);
  const idioma = language == "Español" ? "es-ES" : "en-EN";
  const fecha = new Date();
  const mes = fecha
    .toLocaleString(idioma, {
      month: "long",
    })
    .toUpperCase();

  const SpanishWords = {
    Laboratorios: "Laboratories",
    LaboratoriodeRedesyConectividadI: "Networks and Connectivity Laboratory I",
    LaboratoriodeRedesII: "Networks and Connectivity Laboratory I",
    LaboratoriodeCiberseguridad: "Cybersecurity Lab",
    LaboratoriodeEstadisticaySimulacionMatematica:
      "Statistics and Mathematical Simulation Laboratory",
    LaboratoriodeSoftware: "Software Laboratory",
    LaboratoriodeSimulacionEmpresarial: "Business Simulation Laboratory",
    Actividades: "Actividades",
    Peticiones: "Peticiones",
  };
  const EnglishWords = {
    Laboratorios: "Laboratories",
    LaboratoriodeRedesyConectividadI: "Networks and Connectivity Laboratory I",
    LaboratoriodeRedesII: "Networks and Connectivity Laboratory I",
    LaboratoriodeCiberseguridad: "Cybersecurity Lab",
    LaboratoriodeEstadisticaySimulacionMatematica:
      "Statistics and Mathematical Simulation Laboratory",
    LaboratoriodeSoftware: "Software Laboratory",
    LaboratoriodeSimulacionEmpresarial: "Business Simulation Laboratory",
    Actividades: "Activities",
    Peticiones: "Requests",
  };
  const HomeWords = language == "Español" ? SpanishWords : EnglishWords;

  return (
    <section className="calendar-container">
      <header className="perfil_header-section">
        <section className="settings-section">
          <div className="settings-actions">
            <div className="settings-image"></div>
            <div className="settings-text">{mes}</div>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/17eb6121a79df0c3d3a3d78bd7588189b400c6863dc82d7da7a57f655f021ff8?apiKey=d337f2d517f4408a99dd126ae7e4b446&"
              alt=""
              className="settings-image"
            />
          </div>
        </section>
      </header>

      <main className="main-content">
        <CalendaryBar />
        <h2 className="section-title">{HomeWords.Actividades}</h2>
        <div className="separator100"></div>

        <article className="activity-card">
          <div className="activity-header">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/aba0b9fd34ab76d14795d3a298f464c8c7b2ceacd1f8025572e73031ae8813b3?apiKey=d337f2d517f4408a99dd126ae7e4b446&"
              alt="Profile picture of Ing. Gardyn Olivera Ruiz"
              className="profile-image"
            />
            <div className="activity-details">
              <h3 className="instructor-name">Ing. Gardyn Olivera Ruiz</h3>
              <p className="course-name">{HomeWords.LaboratoriodeRedesII}</p>
              <p className="activity-description">
                Desarrollo de la sesion 15, y toma de examen parcial 2
              </p>
            </div>
          </div>
          <div className="activity-time">
            <span className="time-slot">2 - 4 P.M.</span>
            <span className="location">Lab. Redes II</span>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/81d276e1083adab0b8d06f7913e5a58cb88f247fe24fa1dcfd7f5446d9349c2b?apiKey=d337f2d517f4408a99dd126ae7e4b446&"
              alt="Action icon"
              className="action-icon"
            />
          </div>
        </article>
      </main>

      <section className="requests-section">
        <h2 className="section-title">{HomeWords.Peticiones}</h2>
        <div className="separator100"></div>

        <article className="request-card">
          <div className="activity-header">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/aba0b9fd34ab76d14795d3a298f464c8c7b2ceacd1f8025572e73031ae8813b3?apiKey=d337f2d517f4408a99dd126ae7e4b446&"
              alt="Profile picture of Ing. Christian Garcia Villegas"
              className="profile-image"
            />
            <div className="activity-details">
              <h3 className="instructor-name">
                Ing. Christian Garcia Villegas
              </h3>
              <p className="course-name">IngenieriadeRequisitos</p>
              <p className="activity-description">
                Por motivo de las festividades, se solicita el ambiente para la
                recuperación de la sesión 14
              </p>
            </div>
          </div>
          <div className="request-time">
            <span className="time-slot">4 - 6 P.M.</span>
            <span className="request-location">Lab. Sis. Emp.</span>
            <div>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/319d4045cf123f69948f445827001c7d9b7c8c19e187fe895ef896f127ac2628?apiKey=d337f2d517f4408a99dd126ae7e4b446&"
                alt="Reject request"
                className="action-button reject-button"
              />
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ddefb5760e13384f76a206222f4b6afb2bf3007a3f3bfd985c050e4ed4f97133?apiKey=d337f2d517f4408a99dd126ae7e4b446&"
                alt="Accept request"
                className="action-button accept-button"
              />
            </div>
          </div>
        </article>
      </section>
    </section>
  );
};
