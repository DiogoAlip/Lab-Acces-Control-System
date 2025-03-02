import React, { ComponentType } from "react";
import { useSelector } from "react-redux";
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
  const { status } = useSelector(
    (state: { auth: { status: string } }) => state.auth
  );

  return (
    <Route
      {...rest}
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      component={(props: any) =>
        status === "authenticated" ? (
          <Component {...props} />
        ) : (
          <Redirect to={`./${redirectTo}`} />
        )
      }
    />
  );
};
