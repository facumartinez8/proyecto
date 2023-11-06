import React from "react";
import { Route, Routes } from "react-router-dom";

import Login from "../Views/Login";
import DashBoard from "../Views/DashBoard";
import Register from "../Views/Register";
import Partidos from "../Views/Partidos";
import Votar from "../components/Votation";

import CardPost from "../components/CardPost";
const Routers = () => {
  return (
    <Routes>

      <Route path="/resultados" element={<Results />} /> 
      <Route path="/votar" element={<Votar />} />
      <Route path="/partidos-selection" element={<Partidos />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/inicio" element={<DashBoard />} />
      <Route path="/prueba" element={<ModalPost></ModalPost>} />
    </Routes>
  );
};

export default Routers;
