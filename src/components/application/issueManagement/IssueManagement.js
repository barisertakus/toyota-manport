import React, { useState } from "react";
import ApplicationDetailHeader from "../ApplicationDetailHeader";
import CreateAppIssue from "./CreateAppIssue";
import IssueManagementTable from "./IssueManagementTable";

function IssueManagement({ plants }) {
  const [issues, setIssues] = useState([]);

  const addIssue = (issue) => {
    setIssues([...issues, {...issue, id:issues.length + 1}])
  }

  return (
    <div className="issue__management">
      <ApplicationDetailHeader name="Issue Management" />
      <IssueManagementTable rows={issues} />
      <CreateAppIssue plants={plants} addIssue={addIssue} />
    </div>
  );
}

export default IssueManagement;
