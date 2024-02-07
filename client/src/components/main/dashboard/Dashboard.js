import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFormList } from "../../../redux/slices/formListSlice";
import {
  validObjectKeys,
  validObjectValues,
  missingKeysList,
} from "../../../model/validation";
import { DashboardSectionStyled, DashboardStyled } from "./Dashboard.styled";
import JsFileDownloader from "js-file-downloader";
import FormItem from "./FormItem";
import { Button } from "@chakra-ui/react";

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
    <DashboardStyled>
      <DashboardSectionStyled>
        <h4>Aguardadndo</h4>
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
      </DashboardSectionStyled>
      <DashboardSectionStyled>
        <h4>Concluído</h4>
        {formList.map((form) =>
          validateFormItem(form) ? (
            <FormItem key={form._id} form={form} />
          ) : null
        )}
      </DashboardSectionStyled>

      <Button onClick={dataDownload}>Obter dados</Button>
    </DashboardStyled>
  );
}

export default Dashboard;
