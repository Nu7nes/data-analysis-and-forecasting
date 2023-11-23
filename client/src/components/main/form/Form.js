import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addForm } from "../../../redux/slices/formListSlice";
import Input from "../input/Input";
import Select from "../select/Select";
import { fetchWeather } from "../../../model/fetchWeather";
import { FormStyled, FormSectionStyled } from "./Form.styled";
import { SubmitButton } from "../../buttons/buttons";
import { TogglerFullFormStyled } from "../../buttons/buttons.styled";

function Form() {
    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        date_init: "",
        weight_init: "",
        color_cassava: "",
        state_cassava: "",
        texture_cassava: "",
        external_help: "",
        date_end: "",
        weight_end: "",
        starch_end: "",
        how_fermented: "",
    });

    async function getWeather() {
        const formDataFull = {
            date_init: "",
            weight_init: "",
            color_cassava: "branca",
            state_cassava: "úmida",
            texture_cassava: "macia",
            external_help: "nenhuma",
        };

        try {
            const dataWeather = await fetchWeather('init');
            const newObj = Object.assign({}, formDataFull, dataWeather);
            setFormData(newObj);
        } catch (error) {
            console.error('Erro ao buscar dados do clima:', error);
        }
    }

    useEffect(() => {
        getWeather();
    }, []);

    useEffect(() => {
        // console.log(formData);
    }, [formData]);
    
    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    }

    // function handleFullForm() {
    //     setFullForm(!fullForm);
    //     if (fullForm) {
    //         setFormData({
    //             ...formData,
    //             date_end: "",
    //             weight_end: "",
    //             starch_end: "pouca",
    //             how_fermented: "menos que o esperado",
    //         });
    //     } else {
    //         setFormData({
    //             ...formData,
    //             date_end: "",
    //             weight_end: "",
    //             starch_end: "",
    //             how_fermented: "",
    //         });
    //     }
    // }

    async function handleSubmit(event) {
        event.preventDefault();
        // const { weather, main } = await dispatch(fetchWeather());
        // console.log(weather, main);
        console.log(formData);
        window.alert("Formulário enviado com sucesso!");
        window.location.reload();
        dispatch(addForm(formData));
    }

    return (
        <FormStyled onSubmit={handleSubmit}>
            <FormSectionStyled>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <h3>Início:</h3>
                    {/* <TogglerFullFormStyled
                        style={{
                            backgroundColor: fullForm ? "#578758" : "#d1d1d1",
                        }}
                        type="button"
                        onClick={() => { setFullForm(!fullForm) }}
                    >
                        Full
                    </TogglerFullFormStyled> */}
                </div>
                <Input
                    name="date_init"
                    type="date"
                    placeholder="Início do ciclo"
                    value={formData.date_init}
                    onchange={handleInputChange}
                />
                <Input
                    name="weight_init"
                    type="number"
                    placeholder="Peso Total"
                    unit={"kg"}
                    value={formData.weight_init}
                    onchange={handleInputChange}
                />
                <Select
                    name="color_cassava"
                    placeholder="Cor"
                    options={["branca", "amarela", "preta"]}
                    value={formData.color_cassava}
                    onchange={handleInputChange}
                />
                <Select
                    placeholder="Estado/Fase"
                    name="state_cassava"
                    options={["úmida", "em processo", "queimada"]}
                    value={formData.state_cassava}
                    onchange={handleInputChange}
                />
                <Select
                    name="texture_cassava"
                    placeholder="Textura"
                    options={["macia", "dura"]}
                    value={formData.texture_cassava}
                    onchange={handleInputChange}
                />
                <Select
                    name="external_help"
                    placeholder="Interferência externa"
                    options={[
                        "nenhuma",
                        "água quente",
                        "raspas",
                        "água quente e raspas",
                    ]}
                    value={formData.external_help}
                    onchange={handleInputChange}
                />
            </FormSectionStyled>
            {/* {fullForm ? (
                <FormSectionStyled>
                    <h3>Fim:</h3>
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
                </FormSectionStyled> 
            ) : null} */}
            <SubmitButton type={"submit"} value={"Finalizar"} />
        </FormStyled>
    );
}

export default Form;
