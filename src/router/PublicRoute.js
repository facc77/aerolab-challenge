import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import UserHistory from "../pages/UserHistory";

const PublicRoute = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/userHistory" element={<UserHistory />} />
      </Routes>
    </>
  );
};

export default PublicRoute;
