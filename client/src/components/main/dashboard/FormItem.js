import React from "react";
import { useState } from "react";
import { DataAreaStyled, FormItemStyled } from "./Dashboard.styled";
import { UpdateButton } from "../../buttons/buttons";
import UpdateModal from "../../modals/UpdateModal";

function DataArea(placeholder, data) {
    return (
        <DataAreaStyled>
            <label>{placeholder}</label>
            <p>{data}</p>
        </DataAreaStyled>
    );
}

function FormItem({ form, submitButton }) {
    const [updateModal, setUpdateModal] = useState(false);

    function handleCancelUpdate() {
        setUpdateModal(!updateModal);
    }

    return (
        <FormItemStyled>
            {DataArea("Data início", form.date_init)}
            {DataArea("Peso total inicial", form.weight_init)}
            {DataArea("Cor da mandioca", form.color_cassava)}
            {DataArea("Estado da mandioca", form.state_cassava)}
            {DataArea("Textura da mandioca", form.texture_cassava)}
            {DataArea("Interferência externa", form.external_help)}
            {DataArea("Data fim", form.date_end)}
            {DataArea("Peso total final", form.weight_end)}
            {DataArea("Goma no fim do ciclo", form.starch_end)}
            {DataArea("Quão fermentada está", form.how_fermented)}
            {submitButton ? (
                <UpdateButton
                    type="submit"
                    value="Concluir entrada"
                    onHandleUpdateButton={() => {
                        setUpdateModal(!updateModal);
                    }}
                />
            ) : (
                ""
            )}
            {updateModal ? (
                <UpdateModal
                    formId={form._id}
                    onHandleCancelUpdate={handleCancelUpdate}
                />
            ) : (
                ""
            )}
        </FormItemStyled>
    );
}

export default FormItem;
