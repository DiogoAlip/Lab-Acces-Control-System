import { Switch } from "wouter";
import { NavBar } from "../components/NavBar";
import { LabRoutes } from "../routes/LabRoutes";
export const LogedUserPage = () => {
  return (
    <Switch>
      <NavBar />
      <LabRoutes />
    </Switch>
  );
};
