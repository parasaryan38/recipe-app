import React from "react";
import NavBar from "../Components/navbar/Navbar";
import { HashRouter, Route, Routes } from "react-router-dom";

import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import About from "../Pages/About/About";
import Detail from "../Pages/deatail/Detail";
import PrivateRouter from "./PrivateRouter";

const AppRouter = () => {
  return (
    <div className="appWrapper">
      <HashRouter>
        <NavBar />

        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />

          {/* Protected Routes */}
          <Route element={<PrivateRouter />}>
            <Route path="/about" element={<About />} />
            <Route path="/detail" element={<Detail />} />
          </Route>
        </Routes>
      </HashRouter>
    </div>
  );
};

export default AppRouter;
