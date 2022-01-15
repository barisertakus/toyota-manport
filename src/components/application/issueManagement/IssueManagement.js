import React from "react";
import ApplicationDetailHeader from "../ApplicationDetailHeader";
import CreateAppIssue from "./CreateAppIssue";
import IssueManagementTable from "./IssueManagementTable";

function IssueManagement({ issues, setIssues, plants }) {

  const addIssue = (issue) => {
    setIssues([...issues, {...issue, id:issues.length + 1}])
  }

  const removeIssue = (issueId) => {
    setIssues(issues.filter(issue=> issue.id !== issueId ))
  }

  return (
    <div className="issue__management">
      <ApplicationDetailHeader name="Issue Management" />
      <IssueManagementTable rows={issues} removeIssue={removeIssue} />
      <CreateAppIssue plants={plants} addIssue={addIssue} />
    </div>
  );
}

export default IssueManagement;
