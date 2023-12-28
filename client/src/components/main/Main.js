import React from "react";
import Form from "./form/Form";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./dashboard/Dashboard";
import { Flex } from "@chakra-ui/react";

function Main() {
  
  return (
    <Flex justifyContent='center'>
      <Routes>
        <Route index path="/" element={<Form />} />
        <Route path="/register" element={<Form />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Flex>
  );
}

export default Main;