import React from "react";
import ApplicationDetailHeader from "../ApplicationDetailHeader";
import IssueManagementTable from "./IssueManagementTable";

function IssueManagement({ issues }) {
  return (
    <div className="issue__management">
      <ApplicationDetailHeader name="Issue Management" />
      <IssueManagementTable rows={issues} />
    </div>
  );
}

export default IssueManagement;
