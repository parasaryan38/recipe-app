import React from "react";
import NavBar from "../Components/navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import About from "../Pages/About/About";
import Detail from "../Pages/deatail/Detail";
import PrivateRouter from "./PrivateRouter";
const AppRouter = () => {
  return (
    <div className="appWrapper">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<PrivateRouter />}>
            <Route path="" element={<About />} />
          </Route>
          <Route path="/detail" element={<PrivateRouter />}>
            <Route path="" element={<Detail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
