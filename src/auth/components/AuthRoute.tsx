import React, { ComponentType, useContext } from "react";
import { Redirect, Route, RouteProps } from "wouter";
import { AuthContext, AuthContextType } from "../context/";

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
  const { isAuthenticated } = useContext<AuthContextType>(AuthContext);

  return (
    <Route
      {...rest}
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      component={(props: any) =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to={`/${redirectTo}`} />
        )
      }
    />
  );
};
