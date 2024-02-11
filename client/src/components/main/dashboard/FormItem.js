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
    IconButton,
    Flex,
    CardBody,
    TableContainer,
    Table,
    Thead,
    Tr,
    Th,
    Tbody,
    Td,
    Menu,
    MenuButton,
} from "@chakra-ui/react";
import { MdMoreVert } from "react-icons/md";
import CustomMenu from "../../CustomMenu";

let count = 0

function FormItem({ form, submitButton }) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const formTableConstructor = Object.entries(form).map(
        ([key, value]) =>
            key !== "_id" &&
            key !== "__v" && (
                <Tr>
                    <Td>{key}</Td>
                    <Td>{value.toString()}</Td>
                </Tr>
            )
    );

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
                <TableContainer>
                    <Table variant="striped" size="sm">
                        <Thead>
                            <Tr>
                                <Th>Key</Th>
                                <Th>Value</Th>
                            </Tr>
                        </Thead>
                        <Tbody>{formTableConstructor}</Tbody>
                    </Table>
                </TableContainer>
            </CardBody>

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
