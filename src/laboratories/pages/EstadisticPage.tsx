import "./estadisticsStyle.css";
export const EstadisticPage = () => {
  return (
    <div className="report-container">
      <header className="perfil_header-section">
        <section className="settings-section">
          <div className="settings-actions">
            <div className="settings-image"></div>
            <div className="settings-text">REPORTES</div>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/17eb6121a79df0c3d3a3d78bd7588189b400c6863dc82d7da7a57f655f021ff8?apiKey=d337f2d517f4408a99dd126ae7e4b446&"
              alt=""
              className="settings-image"
            />
          </div>
        </section>
      </header>
      <main className="petitions-content">
        <h2 className="section-title">Laboratorios</h2>
        <div className="separator100"></div>
        <select name="laboratories" id="laboratories" className="lab-info">
          <option className="lab-info-text">
            Laboratorio de Redes y Conectividad I
          </option>
          <option className="lab-info-text" value="">
            Laboratorio de Redes II
          </option>
          <option className="lab-info-text" value="">
            Laboratorio de Ciberseguridad
          </option>
          <option className="lab-info-text" value="">
            Laboratorio de Estadistica y Simulacion Matematica
          </option>
          <option className="lab-info-text" value="">
            Laboratorio de Software
          </option>
          <option className="lab-info-text" value="">
            Laboratorio de Simulacion Empresarial
          </option>
        </select>
        <p className="date-range">JULIO 1 - 7</p>

        <section className="stats-container">
          <div className="stats-header">
            <div className="stats-item">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/754b30093faa53958751386c8cd41e39731fdf3d3797126361b1840315c5fb31?apiKey=d337f2d517f4408a99dd126ae7e4b446&"
                alt=""
                className="stats-icon"
              />
              <span className="stats-label">Asistencias</span>
            </div>
            <div className="stats-item">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/0bfa0edb4ccd5eba95d69927c172f1c06bf39b70ce0a5ff565dec3bf60eb7e12?apiKey=d337f2d517f4408a99dd126ae7e4b446&"
                alt=""
                className="stats-icon"
              />
              <span className="stats-label">Inasistencias</span>
            </div>
          </div>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/cfb2a731e1c6ecf9ddc323abe4fc63f3fb49be608ad48cb1e12fe16f3659e064?apiKey=d337f2d517f4408a99dd126ae7e4b446&"
            alt="Gráfico de asistencias"
            className="chart"
          />
          <div className="chart-legend">
            <div className="legend-group">
              <span className="legend-item">Lunes</span>
              <span className="legend-item">Martes</span>
              <span className="legend-item">Miercoles</span>
              <span className="legend-item">Jueves</span>
            </div>
            <div className="legend-group">
              <span className="legend-item">Viernes</span>
              <span className="legend-item">Sabado</span>
            </div>
          </div>
        </section>

        <h3 className="chart-title">Grafico Estadistico de Asistencia</h3>
        <h4 className="chart-subtitle">Semanal</h4>
      </main>
    </div>
  );
};
