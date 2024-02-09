import React, { useState } from "react";
import NavMenu from "./NavMenu";
import { useDisclosure } from "@chakra-ui/react";
import { Box, Flex, Heading, IconButton } from "@chakra-ui/react";
import { RiMenu4Fill } from "react-icons/ri";

function Header() {
  const [nav, setNav] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <Flex
      bg="#578758"
      justifyContent="space-between"
      alignItems="center"
      py={3}
      px={5}
      position={"sticky"}
      top={0}
      zIndex={10}
    >
      <Heading as="h1" size="md" color="#fff">
        PubaAPP
      </Heading>
      <IconButton
      onClick={onOpen}
        aria-label="Expand menu"
        variant={"ghost"}
        _hover={{ bg: "#3c6d3d" }}
        icon={<RiMenu4Fill color="#fff" fontSize={"1.8rem"} />}
      />
      <NavMenu isOpen={isOpen} btnRef={btnRef} onClose={onClose} />
    </Flex>
  );
}

export default Header;
