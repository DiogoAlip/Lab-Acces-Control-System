import { Redirect, Route, Switch } from "wouter";
import {
  HomePage,
  EstadisticPage,
  PerfilPage,
  PetitionsPage,
  SchedulePage,
} from "../pages";
export const LabRoutes = () => {
  return (
    <Switch>
      <Route path="/home">
        <HomePage />
      </Route>
      <Route path="/estadistics">
        <EstadisticPage />
      </Route>
      <Route path="/petitions">
        <PetitionsPage />
      </Route>
      <Route path="/perfil">
        <PerfilPage />
      </Route>
      <Route path="/schedule">
        <SchedulePage />
      </Route>
      <Route>
        <Redirect to="/home" />
      </Route>
    </Switch>
  );
};
