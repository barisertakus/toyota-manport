import Header from "components/core/Header/Header";
import IssueFilters from "components/issues/IssueFilters";
import IssuesTable from "components/issues/IssuesTable";
import React, { useState } from "react";
import "styles/Management.css";

function Issues() {
  const [search, setSearch] = useState({});

  return (
    <div className="issues">
      <Header />
      <h3 className="header__name">Issues</h3>
      <IssueFilters
        setSearch={setSearch}
      />
      <IssuesTable search={search} />
    </div>
  );
}

export default Issues;
