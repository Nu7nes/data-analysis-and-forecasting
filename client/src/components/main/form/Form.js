import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addForm } from "../../../redux/slices/formListSlice";
import { useForm, FormProvider } from "react-hook-form";
import Input from "../input/Input";
import Select from "../select/Select";
import {
    SelectContainerStyled,
    SelectStyled,
    SelectLabelStyled,
} from "../select/Select.styled";
import {
    InputContainerStyled,
    InputStyled,
    InputFirstLabelStyled,
    InputLastLabelStyled,
    InputErrorStyled,
} from "../input/Input.styled";
import { FormSectionStyled, FormStyled } from "./Form.styled";
import { SubmitButtonStyled } from "../../buttons/buttons.styled";

function Form() {
    const dispatch = useDispatch();

    const methods = useForm();

    async function onSubmitForm(data) {
        console.log(data);
        window.alert("Formulário enviado com sucesso!");
        dispatch(addForm(data));
        window.location.reload();
    }

    return (
        <FormProvider {...methods}>
            <FormStyled onSubmit={methods.handleSubmit(onSubmitForm)}>
                <FormSectionStyled>
                    <Input
                        type="date"
                        label="date_init"
                        placeholder="Início do ciclo"
                        unit=""
                        isRequired={true}
                    />
                    <InputErrorStyled>
                        {methods.formState.errors.date_init && (
                            <p>Preencha o início do ciclo</p>
                        )}
                    </InputErrorStyled>
                    <Input
                        type="number"
                        label="weight_init"
                        placeholder="Peso total do início do ciclo"
                        unit={"kg"}
                        isRequired={true}
                    />
                    <InputErrorStyled>
                        {methods.formState.errors.weight_init && (
                            <p>Preencha o peso total</p>
                        )}
                    </InputErrorStyled>
                    <Select
                        label="color_cassava"
                        placeholder="Cor"
                        options={["branca", "amarela", "preta"]}
                    />
                    <Select
                        label="state_cassava"
                        placeholder="Estado/Fase"
                        options={["úmida", "em processo", "queimada"]}
                    />
                    <Select
                        label="texture_cassava"
                        placeholder="Textura"
                        options={["macia", "dura"]}
                    />
                    <Select
                        label="external_help"
                        placeholder="Interferência externa"
                        options={[
                            "nenhuma",
                            "água quente",
                            "raspas",
                            "água quente e raspas",
                        ]}
                    />
                    <SubmitButtonStyled type="submit" />
                </FormSectionStyled>
            </FormStyled>
        </FormProvider>
    );
    // return (
    //     <FormStyled onSubmit={handleSubmit}>
    //         <FormSectionStyled>
    //             <div
    //                 style={{
    //                     display: "flex",
    //                     justifyContent: "space-between",
    //                     alignItems: "center",
    //                 }}
    //             >
    //                 <h3>Início:</h3>
    //             </div>
    //             <Input
    //                 name="date_init"
    //                 type="date"
    //                 placeholder="Início do ciclo"
    //                 value={formData.date_init}
    //                 onchange={handleInputChange}
    //             />
    //             <Input
    //                 name="weight_init"
    //                 type="number"
    //                 placeholder="Peso Total"
    //                 unit={"kg"}
    //                 value={formData.weight_init}
    //                 onchange={handleInputChange}
    //             />
    //             <Select
    //                 name="color_cassava"
    //                 placeholder="Cor"
    //                 options={["branca", "amarela", "preta"]}
    //                 value={formData.color_cassava}
    //                 onchange={handleInputChange}
    //             />
    //             <Select
    //                 placeholder="Estado/Fase"
    //                 name="state_cassava"
    //                 options={["úmida", "em processo", "queimada"]}
    //                 value={formData.state_cassava}
    //                 onchange={handleInputChange}
    //             />
    //             <Select
    //                 name="texture_cassava"
    //                 placeholder="Textura"
    //                 options={["macia", "dura"]}
    //                 value={formData.texture_cassava}
    //                 onchange={handleInputChange}
    //             />
    //             <Select
    //                 name="external_help"
    //                 placeholder="Interferência externa"
    //                 options={[
    //                     "nenhuma",
    //                     "água quente",
    //                     "raspas",
    //                     "água quente e raspas",
    //                 ]}
    //                 value={formData.external_help}
    //                 onchange={handleInputChange}
    //             />
    //         </FormSectionStyled>
    //         <SubmitButton type={"submit"} value={"Finalizar"} />
    //     </FormStyled>
    // );
}

export default Form;
