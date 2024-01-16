import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addForm } from "../../../redux/slices/formListSlice";
import { useForm, FormProvider } from "react-hook-form";
import InputBox from "../input/Input";
import SelectBox from "../select/Select";

import { InputErrorStyled } from "../input/Input.styled";
import { FormSectionStyled, FormStyled } from "./Form.styled";
import { SubmitButtonStyled } from "../../buttons/buttons.styled";

import { Button } from "@chakra-ui/react";
import { MdSend } from "react-icons/md";

function Form() {
    const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const methods = useForm();

  async function onSubmitForm(data) {
    console.log(data);
    setLoading(true);
    dispatch(addForm(data));
    window.alert("Formulário enviado com sucesso!");
    window.location.reload();
  }

  return (
    <FormProvider {...methods}>
      <FormStyled onSubmit={methods.handleSubmit(onSubmitForm)}>
        <FormSectionStyled>
          <InputBox
            type="date"
            label="date_init"
            placeholder="Início do ciclo"
            isRequired={true}
            validate={methods.formState.errors.date_init}
          />
          {/* <InputErrorStyled>
            {methods.formState.errors.date_init && (
              <p>Preencha o início do ciclo</p>
            )}
          </InputErrorStyled> */}
          <InputBox
            type="number"
            label="weight_init"
            placeholder="Peso total do início do ciclo"
            unit={"kg"}
            isRequired={true}
            validate={methods.formState.errors.weight_init}
          />
          {/* <InputErrorStyled>
            {methods.formState.errors.weight_init && (
              <p>Preencha o peso total</p>
            )}
          </InputErrorStyled> */}
          <SelectBox
            label="color_cassava"
            placeholder="Cor"
            options={["branca", "amarela", "preta"]}
            isRequired={true}
          />
          <SelectBox
            label="state_cassava"
            placeholder="Estado/Fase"
            options={["úmida", "em processo", "queimada"]}
            isRequired={true}
          />
          <SelectBox
            label="texture_cassava"
            placeholder="Textura"
            options={["murcha", "macia", "dura"]}
            isRequired={true}
          />
          <SelectBox
            label="external_help"
            placeholder="Interferência externa"
            options={[
              "nenhuma",
              "água quente",
              "raspas",
              "água quente e raspas",
            ]}
            isRequired={true}
          />
          {/* <SubmitButtonStyled type="submit" /> */}
          <Button
            isLoading={loading}
            mt={5}
            loadingText="Enviando"
            colorScheme="green"
            variant="outline"
            rightIcon={<MdSend />}
            type="submit"
          >
            Enviar
          </Button>
        </FormSectionStyled>
      </FormStyled>
    </FormProvider>
  );
}

export default Form;
