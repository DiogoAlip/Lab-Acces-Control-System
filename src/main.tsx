import React from "react";
import ReactDOM from "react-dom/client";
import { LacsApp } from "./LacsApp.tsx";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <LacsApp />
  </React.StrictMode>
);
