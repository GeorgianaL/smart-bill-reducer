import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ isLoggedIn, redirectTo, children }) => {
  if (!isLoggedIn) {
    return <Navigate to={redirectTo} replace />;
  }
  return children;
};

PrivateRoute.defaultProps = {
  redirectTo: "/unauthorized",
};

export default PrivateRoute;
