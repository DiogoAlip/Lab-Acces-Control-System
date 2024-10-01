import { Redirect, Route, Switch } from "wouter";
import { LoginPage } from "../auth/pages/LoginPage";
import { LogedUserPage } from "../laboratories/pages/LogedUserPage";
import { AuthProvider } from "../auth/context/AuthProvider";
import { AuthRoute } from "../auth/components/AuthRoute";
import { RegisterPage } from "../laboratories/pages/RegisterPage";
import { LanguageProvider } from "../laboratories/context/LanguageProvider";
export const AppRouter = () => {
  return (
    <AuthProvider userName="" userPassword="">
      <LanguageProvider>
        <Switch>
          <Route path="login">
            <LoginPage />
          </Route>
          <AuthRoute
            path="dashboard/"
            redirectTo="login"
            component={LogedUserPage}
            nest
          />
          <Route path="register">
            <RegisterPage />
          </Route>
          <Route path="/*">
            <Redirect to="/login" />
          </Route>
        </Switch>
      </LanguageProvider>
    </AuthProvider>
  );
};
