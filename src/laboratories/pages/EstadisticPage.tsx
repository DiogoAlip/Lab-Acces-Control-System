import { useContext } from "react";
import "./estadisticsStyle.css";
import { LanguageContext } from "../context/LanguageContext";
export const EstadisticPage = () => {
  const { language } = useContext(LanguageContext);

  const SpanishWords = {
    REPORTES: "REPORTES",
    Laboratorios: "Laboratorios",
    LaboratoriodeRedesyConectividadI: "Laboratorio de Redes y Conectividad I",
    LaboratoriodeRedesII: "Laboratorio de Redes II",
    LaboratoriodeCiberseguridad: "Laboratorio de Ciberseguridad",
    LaboratoriodeEstadisticaySimulacionMatematica:
      "Laboratorio de Estadistica y Simulacion Matematica",
    LaboratoriodeSoftware: "Laboratorio de Software",
    LaboratoriodeSimulacionEmpresarial: "Laboratorio de Simulacion Empresarial",
    Asistencias: "Asistencias",
    Inasistencias: "Inasistencias",
    Lunes: "Lunes",
    Martes: "Martes",
    Miercoles: "Miércoles",
    Jueves: "Jueves",
    Viernes: "Viernes",
    Sabado: "Sabado",
    Domingo: "Domingo",
    GraficoEstadisticodeAsistencia: "Grafico Estadistico de Asistencia",
    Semanal: "Semanal",
  };

  const EnglishWords = {
    REPORTES: "REPORTS",
    Laboratorios: "Laboratories",
    LaboratoriodeRedesyConectividadI: "Networks and Connectivity Laboratory I",
    LaboratoriodeRedesII: "Networks and Connectivity Laboratory I",
    LaboratoriodeCiberseguridad: "Cybersecurity Lab",
    LaboratoriodeEstadisticaySimulacionMatematica:
      "Statistics and Mathematical Simulation Laboratory",
    LaboratoriodeSoftware: "Software Laboratory",
    LaboratoriodeSimulacionEmpresarial: "Business Simulation Laboratory",
    Asistencias: "Assists",
    Inasistencias: "Absences",
    Lunes: "Monday",
    Martes: "Tuesday",
    Miercoles: "Wednesday",
    Jueves: "Thursday",
    Viernes: "Friday",
    Sabado: "Saturday",
    Domingo: "Sunday",
    GraficoEstadisticodeAsistencia: "Statistical Attendance Chart",
    Semanal: "Weekly",
  };

  const HomeWords = language === "Español" ? SpanishWords : EnglishWords;

  return (
    <div className="report-container">
      <header className="perfil_header-section">
        <section className="settings-section">
          <div className="settings-actions">
            <div className="settings-image"></div>
            <div className="settings-text">{HomeWords.REPORTES}</div>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/17eb6121a79df0c3d3a3d78bd7588189b400c6863dc82d7da7a57f655f021ff8?apiKey=d337f2d517f4408a99dd126ae7e4b446&"
              alt=""
              className="settings-image"
            />
          </div>
        </section>
      </header>
      <main className="petitions-content">
        <h2 className="section-title">{HomeWords.Laboratorios}</h2>
        <div className="separator100"></div>
        <select name="laboratories" id="laboratories" className="select-info">
          <option className="info-text">
            {HomeWords.LaboratoriodeCiberseguridad}
          </option>
          <option className="info-text" value="">
            {HomeWords.LaboratoriodeEstadisticaySimulacionMatematica}
          </option>
          <option className="info-text" value="">
            {HomeWords.LaboratoriodeRedesII}
          </option>
          <option className="info-text" value="">
            {HomeWords.LaboratoriodeRedesyConectividadI}
          </option>
          <option className="info-text" value="">
            {HomeWords.LaboratoriodeSoftware}
          </option>
          <option className="info-text" value="">
            {HomeWords.LaboratoriodeSimulacionEmpresarial}
          </option>
        </select>
        <p className="date-range">
          {language == "Español" ? "JULIO" : "JULY"} 1 - 7
        </p>

        <section className="stats-container">
          <div className="stats-header">
            <div className="stats-item">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/754b30093faa53958751386c8cd41e39731fdf3d3797126361b1840315c5fb31?apiKey=d337f2d517f4408a99dd126ae7e4b446&"
                alt=""
                className="stats-icon"
              />
              <span className="stats-label">{HomeWords.Asistencias}</span>
            </div>
            <div className="stats-item">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/0bfa0edb4ccd5eba95d69927c172f1c06bf39b70ce0a5ff565dec3bf60eb7e12?apiKey=d337f2d517f4408a99dd126ae7e4b446&"
                alt=""
                className="stats-icon"
              />
              <span className="stats-label">{HomeWords.Inasistencias}</span>
            </div>
          </div>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/cfb2a731e1c6ecf9ddc323abe4fc63f3fb49be608ad48cb1e12fe16f3659e064?apiKey=d337f2d517f4408a99dd126ae7e4b446&"
            alt="Gráfico de asistencias"
            className="chart"
          />
          <div className="chart-legend">
            <div className="legend-group">
              <span className="legend-item">{HomeWords.Lunes}</span>
              <span className="legend-item">{HomeWords.Martes}</span>
              <span className="legend-item">{HomeWords.Miercoles}</span>
              <span className="legend-item">{HomeWords.Jueves}</span>
            </div>
            <div className="legend-group">
              <span className="legend-item">{HomeWords.Viernes}</span>
              <span className="legend-item">{HomeWords.Sabado}</span>
            </div>
          </div>
        </section>

        <h3 className="chart-title">
          {HomeWords.GraficoEstadisticodeAsistencia}
        </h3>
        <h4 className="chart-subtitle">{HomeWords.Semanal}</h4>
      </main>
    </div>
  );
};
