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
        <h1>404</h1>
        <h1>PAGE NOT FOUND</h1>
        <h2></h2>
      </Route>
    </Switch>
  );
};
