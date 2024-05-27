import { PetitionsItem } from "../components/PetitionsItem";
import { NotificationModal } from "../components/NotificationModal";
import { useState } from "react";
import "./homeStyles.css";
export const HomePage = () => {
  const [modalsBool, setModalsBool] = useState({
    acceptedPetittion: false,
    deniedPetittion: false,
  });

  const setModalToDeafault = () =>
    setModalsBool({ acceptedPetittion: false, deniedPetittion: false });

  return (
    <>
      {modalsBool.acceptedPetittion && (
        <NotificationModal>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ff82821baa283a5068ee34289b5c11b772f326e90d206d5c6c23780090d5690f?apiKey=d337f2d517f4408a99dd126ae7e4b446&"
            className="profile-image"
            alt=""
          />
          <h2>Peticion Aceptada</h2>
          <button onClick={() => setModalToDeafault()}>Continuar</button>
        </NotificationModal>
      )}
      {modalsBool.deniedPetittion && (
        <NotificationModal>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ff82821baa283a5068ee34289b5c11b772f326e90d206d5c6c23780090d5690f?apiKey=d337f2d517f4408a99dd126ae7e4b446&"
            className="profile-image"
            alt=""
          />
          <h2>Peticion Denegada</h2>
          <button onClick={() => setModalToDeafault()}>Continuar</button>
        </NotificationModal>
      )}
      <section className="header-section">
        <div className="greeting-section">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/aba0b9fd34ab76d14795d3a298f464c8c7b2ceacd1f8025572e73031ae8813b3?apiKey=d337f2d517f4408a99dd126ae7e4b446&"
            alt="Company logo 2"
            className="profile-image"
          />
          <div className="greetings">
            <h2 className="greeting-title">¡Buenos Dias!</h2>
            <p className="greeting-message">¿Qué tienes planeado para hoy?</p>
            <div className="separator"></div>
            <p className="user-name">Ing. William Marchand Niño</p>
            <p className="user-title">Supervisor de laboratorios</p>
          </div>
        </div>
      </section>
      <section className="requests-section">
        <h2 className="requests-title">Peticiones</h2>
        <div className="requests-separator"></div>

        <PetitionsItem
          textItem="Recuperacion de la quinta sesion"
          LabName="Lab. Soft."
          Hours="4 - 6 P.M."
          onClick={(acceptOrDenied: boolean) =>
            acceptOrDenied
              ? setModalsBool({
                  ...modalsBool,
                  acceptedPetittion: !modalsBool.acceptedPetittion,
                })
              : setModalsBool({
                  ...modalsBool,
                  deniedPetittion: !modalsBool.deniedPetittion,
                })
          }
        />

        <PetitionsItem
          textItem="Solicitud de cambio de ambiente"
          LabName="Lab. Sis. Emp."
          Hours="10 - 1 P.M."
          onClick={(acceptOrDenied: boolean) =>
            acceptOrDenied
              ? setModalsBool({
                  ...modalsBool,
                  acceptedPetittion: !modalsBool.acceptedPetittion,
                })
              : setModalsBool({
                  ...modalsBool,
                  deniedPetittion: !modalsBool.deniedPetittion,
                })
          }
        />

        <PetitionsItem
          textItem="Toma de examen sustitutorio"
          LabName="Lab. Redes"
          Hours="3 - 5 P.M."
          onClick={(acceptOrDenied: boolean) =>
            acceptOrDenied
              ? setModalsBool({
                  ...modalsBool,
                  acceptedPetittion: !modalsBool.acceptedPetittion,
                })
              : setModalsBool({
                  ...modalsBool,
                  deniedPetittion: !modalsBool.deniedPetittion,
                })
          }
        />

        <h2 className="attendance-title">Asistencia</h2>
        <div className="attendance-separator"></div>

        <div className="laboratories-section">
          <h3 className="laboratories-title">Laboratorios</h3>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/29064e08ec8f09edae68e47b0021b141ef1ce911d92319909381f74b14e43749?apiKey=d337f2d517f4408a99dd126ae7e4b446&"
            alt="Labs overview image"
            className="labs-image"
          />
          <div className="labs-info">
            <p className="lab-item">Sis. Inf.</p>
            <p className="lab-item">Red.-I</p>
            <p className="lab-item">Mult.</p>
            <p className="lab-item">Red.-II</p>
            <p className="lab-item">Soft.</p>
            <p className="lab-item">Est.</p>
          </div>
        </div>
      </section>
    </>
  );
};
