import React from "react";
import Input from "../input/Input";
import Select from "../select/Select";
import { FormStyled, FormSectionStyled } from "./Form.styled";
import { SubmitButton } from "../../buttons/buttons";
import { CalcDays } from "../../../model/Calculate";

function Form() {
  function save(event) {
    event.preventDefault();
    const calcDays = new CalcDays(
      event.target.date_init.value,
      event.target.date_end.value
    );
    console.log(calcDays.result);
  }

  return (
    <FormStyled onSubmit={save}>
      <FormSectionStyled>
        <h3>Início:</h3>
        <Input name="date_init" type="date" placeholder="Início do ciclo" />
        <Input
          name="_init"
          type="number"
          placeholder="Peso Total"
          unit={"kg"}
        />
        <Select
          name="color"
          placeholder="Cor"
          options={["Branca", "Amarela", "Preta"]}
        />
        <Select
          placeholder="Estado/Fase"
          name="level"
          options={["Úmida", "Em processo", "Queimada"]}
        />
        <Select
          name="texture"
          placeholder="Textura"
          options={["Macia", "Dura"]}
        />
        <Select
          name="external_help"
          placeholder="Interferência externa"
          options={["nenhuma", "água quente", "raspas", "água quente e raspas"]}
        />
      </FormSectionStyled>
      <FormSectionStyled>
        <h3>Fim:</h3>
        <Input name="date_end" type="date" placeholder="Fim do ciclo" />
        <Input
          name="_end"
          type="number"
          placeholder="Peso total do fim do ciclo"
          unit={"kg"}
        />
        <Select
          name=""
          placeholder="Goma no fim do ciclo"
          options={["pouca", "média", "muita"]}
        />
        <Select
          name=""
          placeholder="Quão fermentada ficou"
          options={["menos que o esperado", "na média", "por completo"]}
        />
      </FormSectionStyled>
      <SubmitButton type={"submit"} value={"Finalizar"} />
    </FormStyled>
  );
}

export default Form;
