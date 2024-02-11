import { useDispatch } from "react-redux";
import { updateForm } from "../../redux/slices/formListSlice";
import { useForm, FormProvider } from "react-hook-form";

import {
    FormErrorMessage,
    Modal,
    ModalHeader,
    ModalBody,
    ModalContent,
    ModalCloseButton,
    ModalOverlay,
    Button,
    ModalFooter,
} from "@chakra-ui/react";
import InputBox from "../CustomInput";
import SelectBox from "../CustomSelect";
import CustomSwitch from "../CustomSwitch";

function UpdateModal({ formId, isOpen, onClose }) {
    const dispatch = useDispatch();
    const methods = useForm();
    function onUpdateForm(data) {
        dispatch(updateForm({ id: formId, obj: data }));
        window.alert("Formulário atualizado com sucesso!");
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose} isCentered>
            <ModalOverlay />
            <ModalContent>
                <FormProvider {...methods}>
                    <form onSubmit={methods.handleSubmit(onUpdateForm)}>
                        <ModalHeader>Concluir entrada</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <InputBox
                                type="date"
                                label="date_end"
                                placeholder="Fim do ciclo"
                                isRequired={true}
                                validate={methods.formState.errors.date_end}
                            />
                            <InputBox
                                type="number"
                                label="weight_end"
                                placeholder="Peso total do fim do ciclo"
                                unit={"kg"}
                                isRequired={true}
                                validate={methods.formState.errors.weight_end}
                            />
                            <FormErrorMessage>
                                {methods.formState.errors.date_end &&
                                    methods.formState.errors.date_end.message}
                            </FormErrorMessage>
                            <SelectBox
                                label="starch_end"
                                placeholder="Goma no fim do ciclo"
                                options={["pouca", "média", "muita"]}
                                isRequired={true}
                            />
                            <SelectBox
                                label="how_fermented"
                                placeholder="Quão fermentada ficou"
                                options={[
                                    "menos que o esperado",
                                    "na média",
                                    "por completo",
                                ]}
                                isRequired={true}
                            />
                            <CustomSwitch value='Estava em área aberta?' label="open_area" />
                        </ModalBody>
                        <ModalFooter>
                            <Button colorScheme="green" type="submit">
                                Atualizar
                            </Button>
                            <Button colorScheme="blue" m={3} onClick={onClose}>
                                Cancelar
                            </Button>
                        </ModalFooter>
                    </form>
                </FormProvider>
            </ModalContent>
        </Modal>
    );
}

export default UpdateModal;
