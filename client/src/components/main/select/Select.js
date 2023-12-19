import React from "react";
import { useForm, FormProvider, useFormContext } from "react-hook-form";
import {
  SelectContainerStyled,
  SelectStyled,
  SelectLabelStyled,
} from "./Select.styled";

function Select({ label, placeholder, options }) {
  const { register } = useFormContext();

  return (
    <SelectContainerStyled>
      <SelectLabelStyled>{placeholder + ": "}</SelectLabelStyled>
      <SelectStyled {... register(label)}>
        {options.map((option, index) => (
          <option key={index} value={option}>{(index + 1) + " - " + option[0].toUpperCase() + option.slice(1)}</option>
        ))}
      </SelectStyled>
    </SelectContainerStyled>
  );
}

export default Select;
