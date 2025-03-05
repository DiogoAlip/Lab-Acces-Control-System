import { Router } from "wouter";
import { NavBar } from "../components/NavBar";
import { LabRoutes } from "../routes/LabRoutes";
export const LogedUserPage = () => {
  return (
    <Router>
      <NavBar />
      <LabRoutes />
    </Router>
  );
};
