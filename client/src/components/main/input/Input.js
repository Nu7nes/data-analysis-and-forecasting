import React from "react";
import { useForm, FormProvider, useFormContext } from "react-hook-form";
import {
    InputContainerStyled,
    InputStyled,
    InputFirstLabelStyled,
    InputLastLabelStyled,
} from "./Input.styled";

// function Input_old({ type, name, placeholder, unit, value, onchange }) {
//     return (
//         <InputContainerStyled>
//             <InputFirstLabelStyled>{placeholder + ": "}</InputFirstLabelStyled>
//             <InputStyled
//                 type={type || "text"}
//                 name={name}
//                 placeholder={placeholder}
//                 value={value}
//                 onChange={onchange}
//             ></InputStyled>
//             <InputLastLabelStyled>{unit}</InputLastLabelStyled>
//         </InputContainerStyled>
//     );
// }

function Input({ placeholder, unit, label, isRequired, type }) {
    const { register } = useFormContext();

    return (
        <InputContainerStyled>
            <InputFirstLabelStyled>{placeholder + ": "}</InputFirstLabelStyled>
            <InputStyled
                type={type || ""}
                {...register(label, { required: isRequired })}
            ></InputStyled>
            <InputLastLabelStyled>{unit}</InputLastLabelStyled>
        </InputContainerStyled>
    );
}

export default Input;
