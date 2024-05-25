import { Redirect, Route, Switch } from "wouter";
import { LoginPage } from "../auth/pages/LoginPage";
import { LogedUserPage } from "../laboratories/pages/LogedUserPage";
import { AuthProvider } from "../auth/context/AuthProvider";
import { AuthRoute } from "../auth/components/AuthRoute";
export const AppRouter = () => {
  return (
    <AuthProvider>
      <Switch>
        <Route path="login">
          <LoginPage />
        </Route>
        <AuthRoute
          path="dashboard/:name/:passwd"
          redirectTo="login"
          component={LogedUserPage}
          nest
        ></AuthRoute>
        <Route>
          <Redirect to="login" replace />
        </Route>
      </Switch>
    </AuthProvider>
  );
};
