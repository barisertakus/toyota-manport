import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { jdkVersions } from "utils/Enums";
import AppDialogSelectRow from "../AppDialogSelectRow";
import AppDialogTextRow from "../AppDialogTextRow";

function CreateInfraForm({ plants, addInfra, editInfra, oldInfra, setOpen }) {
  const [infra, setInfra] = useState({
    country: "",
    jdkVersion: "",
    jettyVersion: "",
    nodeJsVersion: "",
  });

  const [countries, setCountries] = useState([]);

  const handleChange = (e) => {
    setInfra({ ...infra, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    if (editInfra) {
      editInfra(infra);
    } else {
      addInfra(infra);
    }
    setOpen(false);
  };

  useEffect(() => {
    //TODO contain check
    setCountries(
      plants
        .filter((plant) => plant.alive)
        .map((plant) => ({
          label: plant.country,
          value: plant.country,
        }))
    );
  }, [plants]);

  useEffect(() => {
    if (oldInfra) setInfra(oldInfra);
  }, [oldInfra]);

  return (
    <div className="create__appinfra">
      <div className="appinfras">
        <AppDialogSelectRow
          label="Country"
          name="country"
          list={countries}
          value={infra.country}
          variant="outlined"
          handleChange={handleChange}
        />

        <AppDialogSelectRow
          label="JDK Version"
          name="jdkVersion"
          list={jdkVersions}
          value={infra.jdkVersion}
          variant="outlined"
          handleChange={handleChange}
        />

        <AppDialogTextRow
          name="jettyVersion"
          label="Jetty Version"
          value={infra.jettyVersion}
          variant="outlined"
          handleChange={handleChange}
        />

        <AppDialogTextRow
          name="nodeJsVersion"
          label="NodeJs Version"
          value={infra.nodeJsVersion}
          variant="outlined"
          handleChange={handleChange}
        />
      </div>
      <div className="add-btn">
        <Button
          variant="contained"
          onClick={handleSave}
          // disabled={props.disabled}
        >
          {editInfra ? "Edit infra" : "Add infra"}
        </Button>
      </div>
    </div>
  );
}

export default CreateInfraForm;
