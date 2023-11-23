import React from "react";
import Form from "./form/Form";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./dashboard/Dashboard";
import { MainStyled } from "./Main.styled";

function Main() {
  
  return (
    <MainStyled>
      <Routes>
        <Route index path="/" element={<Form />} />
        <Route path="/register" element={<Form />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </MainStyled>
  );
}

export default Main;