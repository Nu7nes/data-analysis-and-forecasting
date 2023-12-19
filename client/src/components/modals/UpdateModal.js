import React, { useEffect, useState } from "react";
import { UpdateModalStyled } from "./Modals.styled";
import Input from "../main/input/Input";
// import Select from "../main/select/Select";
// import { fetchWeather } from "../../model/fetchWeather";
import { CancelButton, SubmitButton } from "../buttons/buttons";
import { useDispatch } from "react-redux";
import { updateForm } from "../../redux/slices/formListSlice";
import { useForm, FormProvider, useFormContext } from "react-hook-form";
import Select from "../main/select/Select";
import { InputErrorStyled } from "../main/input/Input.styled";

function UpdateModal({ formId, onHandleCancelUpdate }) {
    const dispatch = useDispatch();
    const methods = useForm();
    function onUpdateForm(data) {
        dispatch(updateForm({ id: formId, obj: data }));
        window.alert("Formulário atualizado com sucesso!");
        console.log(data);
    }

    return (
        <FormProvider {...methods}>
            <UpdateModalStyled>
                <h3>Concluir entrada</h3>
                <form onSubmit={methods.handleSubmit(onUpdateForm)}>
                    <Input
                        type="date"
                        label="date_end"
                        placeholder="Fim do ciclo"
                        unit=""
                        isRequired={true}
                    />
                    <InputErrorStyled>
                        {methods.formState.errors.date_end && (
                            <p>Preencha a data de conclusão</p>
                        )}
                    </InputErrorStyled>
                    <Input
                        type="number"
                        label="weight_end"
                        placeholder="Peso total do fim do ciclo"
                        unit={"kg"}
                        isRequired={true}
                    />
                    <InputErrorStyled>
                        {methods.formState.errors.date_end && (
                            <p>Preencha o peso final</p>
                        )}
                    </InputErrorStyled>
                    <Select
                        label="starch_end"
                        placeholder="Goma no fim do ciclo"
                        options={["pouca", "média", "muita"]}
                    />
                    <Select
                        label="how_fermented"
                        placeholder="Quão fermentada ficou"
                        options={[
                            "menos que o esperado",
                            "na média",
                            "por completo",
                        ]}
                    />

                    <div
                        style={{
                            display: "flex",
                            gap: "1rem",
                            padding: "0.6rem",
                        }}
                    >
                        <SubmitButton type="submit" value="Atualizar" />
                        <CancelButton
                            type="button"
                            value="Cancelar"
                            onHandleCancelButton={onHandleCancelUpdate}
                        />
                    </div>
                </form>
            </UpdateModalStyled>
        </FormProvider>
    );
}

export default UpdateModal;
