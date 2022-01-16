import React from "react";
import ApplicationDetailHeader from "../ApplicationDetailHeader";
import CreateInfra from "./CreateInfra";
import MiddlewareManagementTable from "./MiddlewareManagementTable";

function MiddlewareManagement({ infrastructures, setInfrastructures, plants }) {
  const addInfrastracture = (infrastracture) => {
    console.log(infrastracture)
    setInfrastructures([
      ...infrastructures,
      { ...infrastracture, id: infrastructures.length + 1 },
    ]);
  };

  return (
    <div className="middleware__management">
      <ApplicationDetailHeader name="Middleware Management" />
      <MiddlewareManagementTable rows={infrastructures} />
      <CreateInfra addInfra={addInfrastracture} plants={plants} />
    </div>
  );
}

export default MiddlewareManagement;
