import Header from "components/core/Header/Header";
import IssueFilters from "components/issues/IssueFilters";
import IssuesTable from "components/issues/IssuesTable";
import React, { useState } from "react";

function Issues() {
  return (
    <div className="issues">
      <Header />
      <h3 className="header__name">Issues</h3>
      <IssuesTable />
    </div>
  );
}

export default Issues;
