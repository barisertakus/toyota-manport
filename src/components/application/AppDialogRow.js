import React from "react";

function AppDialogRow({children, label}) {
  return (
    <div className="appIssue">
      <h3>{label}:</h3>
      {children}
    </div>
  );
}

export default AppDialogRow;
