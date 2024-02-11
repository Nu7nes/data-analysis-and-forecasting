import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFormList } from "../../../redux/slices/formListSlice";
import {
    validObjectKeys,
    validObjectValues,
    missingKeysList,
} from "../../../model/validation";
import JsFileDownloader from "js-file-downloader";
import FormItem from "./FormItem";
import { Button, Flex, Heading } from "@chakra-ui/react";

function Dashboard() {
    const formList = useSelector((state) => state.formList.data);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchFormList());
    }, [dispatch]);

    function validateFormItem(form) {
        if (validObjectKeys(form)) {
            return validObjectValues(form);
        } else {
            return false;
        }
    }

    function dataDownload(e) {
        e.preventDefault();
        new JsFileDownloader({
            url: "/backup",
        })
            .then(function () {
                fetch("/backup", {
                    method: "PATCH",
                })
                    .then(() => {
                        console.log("Tudo ok");
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    

    return (
        <Flex w="full" direction={"column"} align="center">
            <Flex gap={8} w="full" wrap="wrap" justify="center" align="center">
                <Heading size={"md"} color="gray.600" w="100vw" ml={50} my={6}>
                    Aguardando:
                </Heading>
                {formList.map((form) =>
                    validateFormItem(form) ? null : (
                        <FormItem
                            key={form._id}
                            form={form}
                            submitButton={true}
                            missingKeys={missingKeysList(form)}
                        />
                    )
                )}
            </Flex>
            <Flex gap={4} w="full" wrap="wrap" justify="center" align="center">
                <Heading size={"md"} color="gray.600" w="100vw" ml={50} my={6} mt={10}>
                    Concluidos:
                </Heading>
                {formList.map((form) =>
                    validateFormItem(form) ? (
                        <FormItem key={form._id} form={form} />
                    ) : null
                )}
            </Flex>

            <Button onClick={dataDownload}>Obter dados</Button>
        </Flex>
    );
}

export default Dashboard;
