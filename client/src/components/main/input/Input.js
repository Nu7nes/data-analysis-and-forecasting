import React from "react";
import {
  Box,
  Text,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";
// import {
//     InputContainerStyled,
//     InputStyled,
//     InputFirstLabelStyled,
//     InputLastLabelStyled,
// } from "./Input.styled";

function InputBox({ placeholder, unit, label, isRequired, type, validate }) {
  const { register } = useFormContext();

  return (
    <Box>
      <Text as="sub">{placeholder + ": "}</Text>
      <InputGroup>
        {unit ? <InputRightElement>{unit}</InputRightElement> : null}
        <Input
          // isRequired={isRequired}
          isInvalid={validate}
          focusBorderColor="green.300"
          errorBorderColor="red.300"
          type={type || ""}
          {...register(label, { required: isRequired })}
        />
      </InputGroup>
    </Box>
  );
}

export default InputBox;
