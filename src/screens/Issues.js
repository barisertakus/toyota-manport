import Header from "components/core/Header/Header";
import IssueFilters from "components/issues/IssueFilters";
import IssuesTable from "components/issues/IssuesTable";
import React, { useState } from "react";
import "styles/Management.css";

function Issues() {
  const [issueFilter, setIssueFilter] = useState({
    application: "",
    status: "",
    fromDate: "",
    toDate: "",
  });

  return (
    <div className="issues">
      <Header />
      <h3 className="header__name">Issues</h3>
      <IssueFilters
        issueFilter={issueFilter}
        setIssueFilter={setIssueFilter}
      />
      <IssuesTable />
    </div>
  );
}

export default Issues;
