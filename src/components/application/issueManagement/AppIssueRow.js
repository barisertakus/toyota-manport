import React from "react";

function AppIssueRow({children, label}) {
  return (
    <div className="appIssue">
      <h3>{label}:</h3>
      {children}
    </div>
  );
}

export default AppIssueRow;
