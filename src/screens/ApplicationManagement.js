import AppManagementHeader from "components/ApplicationManagement/AppManagementHeader";
import AppManagementTable from "components/ApplicationManagement/AppManagementTable";
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
