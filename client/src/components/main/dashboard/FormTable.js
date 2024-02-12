import {
    TableContainer,
    Table,
    Thead,
    Tr,
    Th,
    Td,
    Tbody,
    Drawer,
} from "@chakra-ui/react";

export default function FormTable({ form, isOpen, onClose, btnRef }) {
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
        <Drawer isOpen={isOpen} onClose={onClose} finalFocusRef={btnRef}>
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
        </Drawer>
    );
}
