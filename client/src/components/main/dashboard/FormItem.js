import React from "react";
import UpdateModal from "../../modals/UpdateModal";

import {
    Box,
    Button,
    Card,
    CardFooter,
    CardHeader,
    Heading,
    useDisclosure,
    Flex,
    CardBody,
    Menu,
    MenuButton,
    CircularProgress,
    CircularProgressLabel,
    Text,
} from "@chakra-ui/react";
import { MdMoreVert } from "react-icons/md";
import CustomMenu from "../../CustomMenu";

let count = 0;

function FormItem({ form, submitButton }) {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const percent = () => {
        const value = (
            (Number(form.weight_end) / Number(form.weight_init)) *
            100
        ).toFixed(1);
        const validValue = value == "NaN" ? 0 : value;
        return validValue;
    };

    const colorPercent = () => {
        if(percent() >= 50) return 'blue.300'
        if(percent() >= 40) return 'green.300'
        if(percent() < 40 && percent() > 30 ) return 'yellow.300'
        if(percent() <= 30) return 'red.300'
    };

    return (
        <Card size="md" p={1} w={["350px"]} shadow="0 2px 6px #00000060">
            <CardHeader ml={2}>
                <Flex justify="space-between">
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
                    <Menu>
                        <MenuButton as={Button} variant="ghost">
                            <MdMoreVert fontSize="1.3rem" />
                        </MenuButton>
                        <CustomMenu id={form._id} />
                    </Menu>
                </Flex>
            </CardHeader>
            <CardBody>
                {/* <Heading>E isto por enquanto!</Heading> */}
                <CircularProgress
                    value={percent()}
                    color={percent() === 0 ? "gray" : colorPercent()}
                    size="80px"
                    isIndeterminate={percent() === 0}
                >
                    <CircularProgressLabel fontSize="1rem" fontWeight="bold">
                        {percent() + "%"}
                    </CircularProgressLabel>
                </CircularProgress>
                <Flex direction="column">
                    <Text>{form.weight_init}</Text>
                    <Text>{form.weight_end}</Text>
                </Flex>
            </CardBody>

            <CardFooter gap={3} justify="flex-end">
                {submitButton ? (
                    <Button colorScheme="green" onClick={onOpen} w="full">
                        Concluir entrada
                    </Button>
                ) : (
                    ""
                )}
                <Button variant="outline" w="70%">
                    Vizualizar
                </Button>
            </CardFooter>

            <UpdateModal formId={form._id} isOpen={isOpen} onClose={onClose} />
        </Card>
    );
}

export default FormItem;
