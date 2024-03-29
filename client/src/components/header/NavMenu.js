import React from "react";
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    Input,
    Flex,
    Box,
    VStack,
    StackDivider,
    Text,
} from "@chakra-ui/react";
import { MdAddBox, MdSpaceDashboard } from "react-icons/md";
import { Link } from "react-router-dom";

function NavMenu({ isOpen, onClose, btnRef }) {
    return (
        <Drawer
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
            finalFocusRef={btnRef}
            size="sm"
        >
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton
                    color="#fff"
                    fontSize="1.2rem"
                    top="1rem"
                    right={"1.6rem"}
                />
                <DrawerHeader bg="#578758" color="#fff">
                    Menu
                </DrawerHeader>

                <DrawerBody>
                    <VStack
                        divider={<StackDivider borderColor="gray.200" />}
                        spacing={4}
                        align="stretch"
                        my={4}
                    >
                        <Link to="/register" onClick={onClose}>
                            <Button
                                variant="link"
                                leftIcon={<MdAddBox />}
                                size="lg"
                            >
                                Registro
                            </Button>
                        </Link>
                        <Link to="/dashboard" onClick={onClose}>
                            <Button
                                variant="link"
                                leftIcon={<MdSpaceDashboard />}
                                size="lg"
                            >
                                Dashboard
                            </Button>
                        </Link>
                    </VStack>
                </DrawerBody>
                <DrawerFooter>
                    <Text fontSize="sm" color="gray.500">
                        Desenvolvido por:{" "}
                        <Button
                            as="a"
                            variant="link"
                            target="_blank"
                            href="https://brunonunes.site"
                        >
                            <strong>Bruno Nunes</strong>
                        </Button>
                    </Text>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    );
}

export default NavMenu;
