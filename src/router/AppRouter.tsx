import { useEffect } from "react";
import { Redirect, Route, Switch, useLocation } from "wouter";
import { LoginPage } from "../auth/pages/LoginPage";
import { useCheckAuth } from "../auth/hooks/useCheckAuth";
import { LogedUserPage } from "../laboratories/pages/LogedUserPage";
import { RegisterPage } from "../laboratories/pages/RegisterPage";
import { LanguageProvider } from "../laboratories/context/LanguageProvider";
export const AppRouter = () => {
  const state = useCheckAuth();
  const [, setLocation] = useLocation();

  useEffect(() => {
    if (state === "authenticated") setLocation("../dashboard");
    else setLocation("../login");
  }, [state]);

  return (
    <LanguageProvider>
      <Switch>
        <Route path="login">
          <LoginPage />
        </Route>
        <Route path="dashboard" nest>
          <LogedUserPage />
        </Route>
        <Route path="register">
          <RegisterPage />
        </Route>
        <Route path="/*">
          {state === "authenticated" ? (
            <Redirect to="../dashboard" />
          ) : (
            <Redirect to="../login" />
          )}
        </Route>
      </Switch>
    </LanguageProvider>
  );
};
