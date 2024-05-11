import { Redirect, Route, Switch } from "wouter";
import { LoginPage } from "../auth/pages/LoginPage";
import { LogedUserPage } from "../laboratories/pages/LogedUserPage";
import { LabRoutes } from "../laboratories/routes/LabRoutes";
export const AppRouter = () => {
  return (
    <Switch>
      <Route path="login">
        <LoginPage />
      </Route>
      <Route path="userlogedpage" nest>
        <LogedUserPage />
        <LabRoutes />
      </Route>
      <Route>
        <Redirect to="login" />
      </Route>
    </Switch>
  );
};
