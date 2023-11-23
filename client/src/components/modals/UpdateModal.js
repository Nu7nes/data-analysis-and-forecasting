import React, { useEffect, useState } from "react";
import { UpdateModalStyled } from "./Modals.styled";
import Input from "../main/input/Input";
import Select from "../main/select/Select";
import { CancelButton, SubmitButton } from "../buttons/buttons";
import { useDispatch } from "react-redux";
import { updateForm } from "../../redux/slices/formListSlice";

function UpdateModal({ formId, onHandleCancelUpdate }) {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        // date_init: "",
        // weight_init: "",
        // color_cassava: "",
        // state_cassava: "",
        // texture_cassava: "",
        // external_help: "",
        date_end: "",
        weight_end: "",
        starch_end: "",
        how_fermented: "",
    });

    useEffect(() => {
        // missingKeys.forEach((key) => {
        //     setFormData({ ...formData, [key]: "" });
        // });

        setFormData({
            // date_init: "",
            // weight_init: "",
            // color_cassava: "branca",
            // state_cassava: "úmida",
            // texture_cassava: "macia",
            // external_help: "nenhuma",
            date_end: "",
            weight_end: "",
            starch_end: "pouca",
            how_fermented: "menos que o esperado",
        });
        // console.log(formData);
    }, []);

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    }

    // const typeOfElement = {
    //     date_init: (
    //         <Input
    //             name="date_init"
    //             type="date"
    //             placeholder="Início do ciclo"
    //             onchange={handleInputChange}
    //         />
    //     ),
    //     weight_init: (
    //         <Input
    //             name="weight_init"
    //             type="number"
    //             placeholder="Peso Total"
    //             unit={"kg"}
    //             onchange={handleInputChange}
    //         />
    //     ),
    //     color_cassava: (
    //         <Select
    //             name="color_cassava"
    //             placeholder="Cor"
    //             options={["branca", "amarela", "preta"]}
    //             onchange={handleInputChange}
    //         />
    //     ),
    //     state_cassava: (
    //         <Select
    //             placeholder="Estado/Fase"
    //             name="state_cassava"
    //             options={["úmida", "em processo", "queimada"]}
    //             onchange={handleInputChange}
    //         />
    //     ),
    //     texture_cassava: (
    //         <Select
    //             name="texture_cassava"
    //             placeholder="Textura"
    //             options={["macia", "dura"]}
    //             onchange={handleInputChange}
    //         />
    //     ),
    //     external_help: (
    //         <Select
    //             name="external_help"
    //             placeholder="Interferência externa"
    //             options={[
    //                 "nenhuma",
    //                 "água quente",
    //                 "raspas",
    //                 "água quente e raspas",
    //             ]}
    //             onchange={handleInputChange}
    //         />
    //     ),
    //     date_end: (
    //         <Input
    //             name="date_end"
    //             type="date"
    //             placeholder="Fim do ciclo"
    //             onchange={handleInputChange}
    //         />
    //     ),
    //     weight_end: (
    //         <Input
    //             name="weight_end"
    //             type="number"
    //             placeholder="Peso total do fim do ciclo"
    //             unit={"kg"}
    //             onchange={handleInputChange}
    //         />
    //     ),
    //     starch_end: (
    //         <Select
    //             name="starch_end"
    //             placeholder="Goma no fim do ciclo"
    //             options={["pouca", "média", "muita"]}
    //             onchange={handleInputChange}
    //         />
    //     ),
    //     how_fermented: (
    //         <Select
    //             name="how_fermented"
    //             placeholder="Quão fermentada ficou"
    //             options={["menos que o esperado", "na média", "por completo"]}
    //             onchange={handleInputChange}
    //         />
    //     ),
    // };

    function handleUpdateSubmit(event) {
        event.preventDefault();
        dispatch(updateForm({id: formId, obj: formData}));
    }

    return (
        <UpdateModalStyled>
            <h3>Concluir entrada</h3>
            <form onSubmit={handleUpdateSubmit}>
                {/* {missingKeys.map((key) => {
                    return typeOfElement[key];
                })} */}
                <Input
                    name="date_end"
                    type="date"
                    placeholder="Fim do ciclo"
                    value={formData.date_end}
                    onchange={handleInputChange}
                />
                <Input
                    name="weight_end"
                    type="number"
                    placeholder="Peso total do fim do ciclo"
                    unit={"kg"}
                    value={formData.weight_end}
                    onchange={handleInputChange}
                />
                <Select
                    name="starch_end"
                    placeholder="Goma no fim do ciclo"
                    options={["pouca", "média", "muita"]}
                    value={formData.starch_end}
                    onchange={handleInputChange}
                />
                <Select
                    name="how_fermented"
                    placeholder="Quão fermentada ficou"
                    options={[
                        "menos que o esperado",
                        "na média",
                        "por completo",
                    ]}
                    value={formData.how_fermented}
                    onchange={handleInputChange}
                />

                <div
                    style={{ display: "flex", gap: "1rem", padding: "0.6rem" }}
                >
                    <SubmitButton
                        type="submit"
                        value="Atualizar"
                        onClick={handleUpdateSubmit}
                    />
                    <CancelButton
                        type="button"
                        value="Cancelar"
                        onHandleCancelButton={onHandleCancelUpdate}
                    />
                </div>
            </form>
        </UpdateModalStyled>
    );
}

export default UpdateModal;
