import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function SigningRoute({ component: Component, ...rest }) {
  const auth = useAuth();

  return (
    <Route
      {...rest}
      render={(props) => {
        return auth.currentUser ? (
          <Redirect to="/" />
        ) : (
          <Component {...props} />
        );
      }}
    ></Route>
  );
}
