import { Collapse } from "@mui/material";
import React, { useState } from "react";
import ApplicationDetailHeader from "../ApplicationDetailHeader";
import CreateInfra from "./CreateInfra";
import MiddlewareManagementTable from "./MiddlewareManagementTable";

function MiddlewareManagement({ infrastructures, setInfrastructures, plants }) {
  const [collapseIn, setCollapseIn] = useState(true);

  const toggleCollapse = () => {
    setCollapseIn((collapseIn) => !collapseIn);
  };

  const addInfrastructure = (infrastructure) => {
    console.log(infrastructure);
    setInfrastructures([
      ...infrastructures,
      { ...infrastructure, id: infrastructures.length + 1 },
    ]);
  };

  const editInfrastructure = (infrastructureEdit) => {
    setInfrastructures(
      infrastructures.map((infrastructure) =>
        infrastructure.id !== infrastructureEdit.id
          ? infrastructure
          : infrastructureEdit
      )
    );
  };

  const removeInfrastructure = (infrastructureId) => {
    setInfrastructures(
      infrastructures.filter(
        (infrastructure) => infrastructure.id !== infrastructureId
      )
    );
  };

  return (
    <div className="middleware__management">
      <ApplicationDetailHeader
        name="Middleware Management"
        handleClick={toggleCollapse}
      />
      <Collapse in={collapseIn}>
        <MiddlewareManagementTable
          rows={infrastructures}
          editInfra={editInfrastructure}
          removeInfra={removeInfrastructure}
          plants={plants}
        />
        <CreateInfra
          addInfra={addInfrastructure}
          plants={plants}
          infrastructures={infrastructures}
        />
      </Collapse>
    </div>
  );
}

export default MiddlewareManagement;
