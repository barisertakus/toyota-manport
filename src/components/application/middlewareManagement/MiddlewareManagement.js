import React from "react";
import ApplicationDetailHeader from "../ApplicationDetailHeader";
import MiddlewareManagementTable from "./MiddlewareManagementTable";

function MiddlewareManagement({infrastractures}) {
  return (
    <div className="middleware__management">
      <ApplicationDetailHeader name="Middleware Management" />
      <MiddlewareManagementTable rows={infrastractures} />
    </div>
  );
}

export default MiddlewareManagement;
