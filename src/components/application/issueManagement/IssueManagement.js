import { Collapse } from "@mui/material";
import React, { useState } from "react";
import ApplicationDetailHeader from "../ApplicationDetailHeader";
import CreateAppIssue from "./CreateAppIssue";
import IssueManagementTable from "./IssueManagementTable";

function IssueManagement({ issues, setIssues, plants }) {
  const [collapseIn, setCollapseIn] = useState(true);

  const toggleCollapse = () => {
    setCollapseIn((collapseIn) => !collapseIn);
  };

  const addIssue = (issue) => {
    setIssues([...issues, { ...issue, id: issues.length + 1 }]);
  };

  const editIssue = (issueEdit) => {
    setIssues(
      issues.map((issue) => (issue.id !== issueEdit.id ? issue : issueEdit))
    );
  };

  const removeIssue = (issueId) => {
    setIssues(issues.filter((issue) => issue.id !== issueId));
  };

  return (
    <div className="issue__management">
      <ApplicationDetailHeader
        name="Issue Management"
        handleClick={toggleCollapse}
      />
      <Collapse in={collapseIn}>
        <IssueManagementTable
          rows={issues}
          removeIssue={removeIssue}
          editIssue={editIssue}
          plants={plants}
        />
        <CreateAppIssue plants={plants} addIssue={addIssue} />
      </Collapse>
    </div>
  );
}

export default IssueManagement;
