import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import "./petitionsStyles.css";

export const PetitionsPage = () => {
  const { language } = useContext(LanguageContext);
  const SpanishWords = {
    USUARIOS: "USUARIOS",
    Todos: "Todos",
    UsuariosComunes: "Usuarios Comunes",
    UsuariosAdministradores: "Usuarios Administradores",
    DocenteInvestigador: "Docente Investigador",
    Administrador: "Administrador",
  };
  const EnglishWords = {
    USUARIOS: "USERS",
    Todos: "All",
    UsuariosComunes: "Common Users",
    UsuariosAdministradores: "Admins Users",
    DocenteInvestigador: "Teaching Researcher",
    Administrador: "Administrator",
  };
  const HomeWords = language == "Español" ? SpanishWords : EnglishWords;
  return (
    <div className="petitions-container">
      <header className="perfil_header-section">
        <section className="settings-section">
          <div className="settings-actions">
            <div className="settings-image"></div>
            <div className="settings-text">{HomeWords.USUARIOS}</div>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/aa3a4684ccd6cdbddb70b4f9e7c3b73e89630f80d293858ffa62720700b4f9ac?apiKey=d337f2d517f4408a99dd126ae7e4b446&"
              alt=""
              className="settings-image"
            />
          </div>
        </section>
      </header>
      <div className="nav-section">
        <a href="#" className="nav-item-active">
          {HomeWords.Todos}
        </a>
        <a href="#" className="nav-item">
          {HomeWords.UsuariosComunes}
        </a>
        <a href="#" className="nav-item">
          {HomeWords.UsuariosAdministradores}
        </a>
      </div>

      <hr className="divider" />
      <div className="user-list_container">
        <ul className="user-list">
          <li className="user-card">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3d02cff6df3b8e5d9df1347bd170859cc43adc8ed58c2fed7236ca4493bfbfa1?apiKey=d337f2d517f4408a99dd126ae7e4b446&"
              alt="Christian Garcia Villegas"
              className="user-avatar"
            />
            <div className="user-info">
              <h3 className="user-name">Ing. Christian Garcia Villegas</h3>
              <hr className="user-separator" />
              <p className="user-role">
                GINSOFT - {HomeWords.DocenteInvestigador}
              </p>
            </div>
            <button
              className="user-action"
              aria-label="More actions for Christian Garcia Villegas"
            >
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/5d93460d340998545e580bebb14346f7e81f3b6a89d63459560b27f2270643b8?apiKey=d337f2d517f4408a99dd126ae7e4b446&"
                alt=""
              />
            </button>
          </li>
          <li className="user-card">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/aba0b9fd34ab76d14795d3a298f464c8c7b2ceacd1f8025572e73031ae8813b3?apiKey=d337f2d517f4408a99dd126ae7e4b446&"
              alt="Gardyn Olivera Ruiz"
              className="user-avatar"
            />
            <div className="user-info">
              <h3 className="user-name">Ing. Gardyn Olivera Ruiz</h3>
              <hr className="user-separator" />
              <p className="user-role">
                RESEGTI - {HomeWords.DocenteInvestigador}
              </p>
            </div>
            <button
              className="user-action"
              aria-label="More actions for Gardyn Olivera Ruiz"
            >
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/5d93460d340998545e580bebb14346f7e81f3b6a89d63459560b27f2270643b8?apiKey=d337f2d517f4408a99dd126ae7e4b446&"
                alt=""
              />
            </button>
          </li>
          <li className="user-card">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/aba0b9fd34ab76d14795d3a298f464c8c7b2ceacd1f8025572e73031ae8813b3?apiKey=d337f2d517f4408a99dd126ae7e4b446&"
              alt="Ronald Ibarra Zapata"
              className="user-avatar"
            />
            <div className="user-info">
              <h3 className="user-name">Ing. Ronald Ibarra Zapata</h3>
              <hr className="user-separator" />
              <p className="user-role">
                GINSOFT - {HomeWords.DocenteInvestigador}
              </p>
            </div>
            <button
              className="user-action"
              aria-label="More actions for Ronald Ibarra Zapata"
            >
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/5d93460d340998545e580bebb14346f7e81f3b6a89d63459560b27f2270643b8?apiKey=d337f2d517f4408a99dd126ae7e4b446&"
                alt=""
              />
            </button>
          </li>
          <li className="user-card">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/aba0b9fd34ab76d14795d3a298f464c8c7b2ceacd1f8025572e73031ae8813b3?apiKey=d337f2d517f4408a99dd126ae7e4b446&"
              alt="Noel Juipa Campo"
              className="user-avatar"
            />
            <div className="user-info">
              <h3 className="user-name">Ing. Noel Juipa Campo</h3>
              <hr className="user-separator" />
              <p className="user-role">
                GINSOFT - {HomeWords.DocenteInvestigador}
              </p>
            </div>
            <button
              className="user-action"
              aria-label="More actions for Noel Juipa Campo"
            >
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/5d93460d340998545e580bebb14346f7e81f3b6a89d63459560b27f2270643b8?apiKey=d337f2d517f4408a99dd126ae7e4b446&"
                alt=""
              />
            </button>
          </li>
          <li className="user-card">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/aba0b9fd34ab76d14795d3a298f464c8c7b2ceacd1f8025572e73031ae8813b3?apiKey=d337f2d517f4408a99dd126ae7e4b446&"
              alt="Pedro Trujillo Natividad"
              className="user-avatar"
            />
            <div className="user-info">
              <h3 className="user-name">Ing. Pedro Trujillo Natividad</h3>
              <hr className="user-separator" />
              <p className="user-role">
                GINSOFT - {HomeWords.DocenteInvestigador}
              </p>
            </div>
            <button
              className="user-action"
              aria-label="More actions for Pedro Trujillo Natividad"
            >
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/5d93460d340998545e580bebb14346f7e81f3b6a89d63459560b27f2270643b8?apiKey=d337f2d517f4408a99dd126ae7e4b446&"
                alt=""
              />
            </button>
          </li>
          <li className="user-card">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/aba0b9fd34ab76d14795d3a298f464c8c7b2ceacd1f8025572e73031ae8813b3?apiKey=d337f2d517f4408a99dd126ae7e4b446&"
              alt="Marco Canales Aguirre"
              className="user-avatar"
            />
            <div className="user-info">
              <h3 className="user-name">Ing. Marco Canales Aguirre</h3>
              <hr className="user-separator" />
              <p className="user-role">{HomeWords.Administrador}</p>
            </div>
            <button
              className="user-action"
              aria-label="More actions for Marco Canales Aguirre"
            >
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/5d93460d340998545e580bebb14346f7e81f3b6a89d63459560b27f2270643b8?apiKey=d337f2d517f4408a99dd126ae7e4b446&"
                alt=""
              />
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
