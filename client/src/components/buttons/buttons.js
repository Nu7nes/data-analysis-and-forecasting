import React from "react";
import { SubmitButtonStyled, TogglerButtonStyled } from "./buttons.styled";

export function SubmitButton({ type, value }) {
    return <SubmitButtonStyled type={type} value={value} />;
}

export function TogglerButton({ icon, onChangeMenu }) {
    return (
        <TogglerButtonStyled onClick={onChangeMenu}>
            <i>{icon}</i>
        </TogglerButtonStyled>
    );
}

export function UpdateButton({ value, onHandleUpdateButton }) {
    return <SubmitButtonStyled type="button" value={value} onClick={onHandleUpdateButton}/>;
}

export function CancelButton({ value, onHandleCancelButton }) {
    return <SubmitButtonStyled type="button" value={value} onClick={onHandleCancelButton}/>;
}

