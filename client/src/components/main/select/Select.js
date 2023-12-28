import React from "react";
import { useFormContext } from "react-hook-form";
// import {
//   SelectContainerStyled,
//   SelectStyled,
//   SelectLabelStyled,
// } from "./Select.styled";

import { Box, Text, Select } from "@chakra-ui/react";

function SelectBox({ label, placeholder, options }) {
  const { register } = useFormContext();

  return (
    <Box>
      <Text as="sub">{placeholder + ": "}</Text>
      <Select
        {...register(label)}
        focusBorderColor="green.300"
        placeholder="Escolher"
        isRequired={true}
      >
        {options.map((optionName, index) => (
          <option key={index} value={optionName}>
            {index +
              1 +
              " - " +
              optionName[0].toUpperCase() +
              optionName.slice(1)}
          </option>
        ))}
      </Select>
    </Box>
  );
}

export default SelectBox;
