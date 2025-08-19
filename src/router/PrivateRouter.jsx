import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRouter = () => {
  const user = localStorage.getItem("user");
  const email = localStorage.getItem("email");
  console.log("User", user);
  console.log("email", email);
  return <div>{user ? <Outlet /> : <Navigate to="/login" />}</div>;
};

export default PrivateRouter;
