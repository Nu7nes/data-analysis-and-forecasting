import React from "react";
import { MenuItem, MenuList, useDisclosure } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { removeForm } from "../redux/slices/formListSlice";
import CustomDialog from "./CustomDialog";

export default function CustomMenu({id}) {
    const dispatch = useDispatch();
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = React.useRef()
  

    function removeData() {
        dispatch(removeForm(id))
    }

    return(
        <MenuList>
            <MenuItem onClick={onOpen}>Remover</MenuItem>
            <CustomDialog isOpen={isOpen} onClose={onClose} cancelRef={cancelRef} onConfirm={removeData}/>
        </MenuList>
    )
}