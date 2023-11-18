import React from "react";
import Input from "./Input";

function Form() {
  return (
    <form>
      <Input placeholder="Início do ciclo" />
      <Input placeholder="Fim do ciclo" />
      <Input placeholder="Nome" />
      <p>temperatura, umidadem, cor, textura, ,  </p>
      <p>estrado: umida, começando a queimar, queimada</p>
      <p>estado de goma no fim do cíclo: pouca, media, muito</p>
      <p>foi usado algo a mais? nada, agua quente, raspas </p>´
    </form>
  );
}

export default Form;