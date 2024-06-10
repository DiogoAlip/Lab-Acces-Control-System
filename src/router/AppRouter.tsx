import { Redirect, Route, Switch } from "wouter";
import { LoginPage } from "../auth/pages/LoginPage";
import { LogedUserPage } from "../laboratories/pages/LogedUserPage";
import { AuthProvider } from "../auth/context/AuthProvider";
import { AuthRoute } from "../auth/components/AuthRoute";
import { RegisterPage } from "../laboratories/pages/RegisterPage";
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
        <Route path="register">
          <RegisterPage />
        </Route>
        <Route path="/*">
          <Redirect to="login" replace />
        </Route>
      </Switch>
    </AuthProvider>
  );
};
