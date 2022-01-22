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
    setInfrastructures([
      ...infrastructures,
      { ...infrastructure, orderNo: infrastructures.length + 1 },
    ]);
  };

  const editInfrastructure = (infrastructureEdit) => {
    setInfrastructures(
      infrastructures.map((infrastructure) =>
        infrastructure.orderNo !== infrastructureEdit.orderNo
          ? infrastructure
          : infrastructureEdit
      )
    );
  };

  const removeInfrastructure = (infrastructureId) => {
    setInfrastructures(
      infrastructures
        .filter((infrastructure) => infrastructure.orderNo !== infrastructureId)
        .map((infrastructure, i) => ({ ...infrastructure, orderNo: i + 1 }))
    );
  };

  return (
    <div className="middleware__management">
      <ApplicationDetailHeader
        name="Middleware Management"
        handleClick={toggleCollapse}
        open={collapseIn}
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
