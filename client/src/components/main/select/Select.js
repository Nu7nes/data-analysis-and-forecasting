import React from "react";
import {
  SelectContainerStyled,
  SelectStyled,
  SelectLabelStyled,
} from "./Select.styled";

function Select({ placeholder, options }) {
  return (
    <SelectContainerStyled>
      <SelectLabelStyled>{placeholder + ": "}</SelectLabelStyled>
      <SelectStyled>
        {options.map((option, index) => (
          <option key={index}>{(index + 1) + " - " + option}</option>
        ))}
      </SelectStyled>
    </SelectContainerStyled>
  );
}

export default Select;
