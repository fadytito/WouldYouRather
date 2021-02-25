import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component, isAuthed, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthed ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/Login", state: props.location }} />
        )
      }
    />
  );
};

export default ProtectedRoute;
