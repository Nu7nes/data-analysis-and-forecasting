import React from "react";
import {
  SelectContainerStyled,
  SelectStyled,
  SelectLabelStyled,
} from "./Select.styled";

function Select({ name, placeholder, options, onchange, value }) {
  return (
    <SelectContainerStyled>
      <SelectLabelStyled>{placeholder + ": "}</SelectLabelStyled>
      <SelectStyled name={name} onChange={onchange} value={value}>
        {options.map((option, index) => (
          <option key={index} value={option}>{(index + 1) + " - " + option[0].toUpperCase() + option.slice(1)}</option>
        ))}
      </SelectStyled>
    </SelectContainerStyled>
  );
}

export default Select;
