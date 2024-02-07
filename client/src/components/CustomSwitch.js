import { FormControl, FormLabel, Switch, useCheckbox } from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";

export default function CustomSwitch({ label, value }) {
    const { register } = useFormContext();

    return (
        <FormControl
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            p={4}
        >
            <FormLabel htmlFor={label} mb="0">
                {value}
            </FormLabel>
            <Switch id={label} colorScheme="green" {...register(label)} />
        </FormControl>
    );
}
