import React from "react";
import ApplicationDetailHeader from "../ApplicationDetailHeader";
import CreateAppIssue from "./CreateAppIssue";
import IssueManagementTable from "./IssueManagementTable";

function IssueManagement({ issues, plants }) {
  return (
    <div className="issue__management">
      <ApplicationDetailHeader name="Issue Management" />
      <IssueManagementTable rows={issues} />
      <CreateAppIssue plants={plants} />
    </div>
  );
}

export default IssueManagement;
