import React, { ComponentType } from "react";
import { Redirect, Route, RouteProps } from "wouter";

interface ProtectedRouteProps extends RouteProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: ComponentType<any>;
  redirectTo: string;
}

export const AuthRoute: React.FC<ProtectedRouteProps> = ({
  component: Component,
  redirectTo,
  ...rest
}) => {
  /* usar UseSelec para obtener si esta validado o no */

  return (
    <Route
      {...rest}
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      component={(props: any) =>
        "isAuthenticated" ? (
          <Component {...props} />
        ) : (
          <Redirect to={`./${redirectTo}`} />
        )
      }
    />
  );
};
