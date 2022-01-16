import { Container, Switch } from "@mui/material";
import SimpleTable from "components/core/SimpleTable";
import React from "react";
import { getIssueAppColumns } from "utils/tableColumns/IssueAppColumns";
import DeleteAppIssue from "./actions/DeleteAppIssue";
import EditAppIssue from "./actions/EditAppIssue";
import ViewAppIssue from "./actions/ViewAppIssue";

function IssueManagementTable({ rows, removeIssue, editIssue, plants }) {

  const issueAppColumns = getIssueAppColumns.map((e, i) => ({
    ...e,
    ...(e.field === "actions" && {
      renderCell: (params) => (
        <div>
          <ViewAppIssue oldIssue={params.row} plants={plants} />
          <EditAppIssue editIssue={editIssue} plants={plants} oldIssue={params.row} />
          <DeleteAppIssue id={params.row.id} removeIssue={removeIssue} />
          <Switch className="table__switch" />
        </div>
      ),
      renderHeader: () => (
        <div className="management__actions">
          <div>Actions</div>
          <div>View | Edit | Delete | Track</div>
        </div>
      ),
    }),
  }));

  return (
    <Container>
      <SimpleTable columns={issueAppColumns} rows={rows} />
    </Container>
  );
}

export default IssueManagementTable;
