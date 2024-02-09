import React from "react";
import { useState } from "react";
import { DataAreaStyled, FormItemStyled } from "./Dashboard.styled";
import UpdateModal from "../../modals/UpdateModal";

import {
    Box,
    Button,
    Card,
    CardFooter,
    CardHeader,
    Heading,
    useDisclosure,
    IconButton
} from "@chakra-ui/react";

function DataArea(placeholder, data) {
    return (
        <DataAreaStyled>
            <label>{placeholder}</label>
            <p>{data}</p>
        </DataAreaStyled>
    );
}

function FormItem({ form, submitButton }) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <Card size="md" p={1} w={["350px"]} shadow="0 2px 6px #00000060">
            <CardHeader ml={2}>
                <Box>
                    <Heading size="md" m={0}>
                        {new Date(form.date_init).toLocaleDateString()}
                    </Heading>
                    <Heading size="sm" m={0} ml={10}>
                        {form.date_end
                            ? new Date(form.date_end).toLocaleDateString()
                            : "Não finalizado"}
                    </Heading>
                </Box>
                <IconButton
                    variant="ghost"
                    colorScheme="gray"
                    aria-label="See menu"
                    icon={<BsThreeDotsVertical />}
                />
            </CardHeader>
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

            <CardFooter>
                {submitButton ? (
                    <Button colorScheme="green" onClick={onOpen} w="full">
                        Concluir entrada
                    </Button>
                ) : (
                    ""
                )}
            </CardFooter>

            <UpdateModal formId={form._id} isOpen={isOpen} onClose={onClose} />
        </Card>
    );
}

export default FormItem;
