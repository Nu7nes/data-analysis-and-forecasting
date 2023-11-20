import React from "react";
import {
  InputContainerStyled,
  InputStyled,
  InputFirstLabelStyled,
  InputLastLabelStyled,
} from "./Input.styled";

function Input({ type, name, placeholder, unit }) {
  return (
    <InputContainerStyled>
      <InputFirstLabelStyled>{placeholder + ": "}</InputFirstLabelStyled>
      <InputStyled type={type || "text"} name={name} placeholder={placeholder}></InputStyled>
      <InputLastLabelStyled>{unit}</InputLastLabelStyled>
    </InputContainerStyled>
  );
}

export default Input;
