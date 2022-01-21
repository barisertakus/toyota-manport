import AppManagementHeader from "components/applicationManagement/AppManagementHeader";
import AppManagementTable from "components/applicationManagement/AppManagementTable";
import React from "react";
import "styles/Management.css"

function ApplicationManagement() {
  return (
    <div className="management">
      <AppManagementHeader />
      <h3 className="header__name">Application Management</h3>
      <AppManagementTable />
    </div>
  );
}

export default ApplicationManagement;
