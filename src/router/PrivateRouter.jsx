import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const PrivateRouter = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const location = useLocation();

  return user ? (
    <Outlet />
  ) : (
    <Navigate
      to="/login"
      state={{ from: location, state: location.state }}
      replace
    />
  );
};

export default PrivateRouter;
