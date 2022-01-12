import AppManagementHeader from "components/applicationManagement/AppManagementHeader";
import AppManagementTable from "components/applicationManagement/AppManagementTable";
import React from "react";
import "styles/Management.css"

function ApplicationManagement() {
  return (
    <div className="management">
      <AppManagementHeader />
      <AppManagementTable />
    </div>
  );
}

export default ApplicationManagement;
