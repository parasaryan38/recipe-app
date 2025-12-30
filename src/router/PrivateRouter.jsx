import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRouter = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return user ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRouter;
