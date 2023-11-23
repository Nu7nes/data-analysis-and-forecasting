import React from "react";
import {
    InputContainerStyled,
    InputStyled,
    InputFirstLabelStyled,
    InputLastLabelStyled,
} from "./Input.styled";

function Input({ type, name, placeholder, unit, value, onchange }) {
    return (
        <InputContainerStyled>
            <InputFirstLabelStyled>{placeholder + ": "}</InputFirstLabelStyled>
            <InputStyled
                type={type || "text"}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onchange}
            ></InputStyled>
            <InputLastLabelStyled>{unit}</InputLastLabelStyled>
        </InputContainerStyled>
    );
}

export default Input;
