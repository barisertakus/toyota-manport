import { Container } from "@mui/material";
import SimpleTable from "components/core/SimpleTable";
import React from "react";
import { getIssueAppColumns } from "utils/tableColumns/IssueAppColumns";
import DeleteAppIssue from "./actions/DeleteAppIssue";
import EditAppIssue from "./actions/EditAppIssue";
import TrackAppIssue from "./actions/TrackAppIssue";
import ViewAppIssue from "./actions/ViewAppIssue";

function IssueManagementTable({ rows, removeIssue, editIssue, plants }) {
  const issueAppColumns = getIssueAppColumns.map((e, i) => ({
    ...e,
    ...(e.field === "actions" && {
      renderCell: (params) => {
        const { row } = params;
        return (
          <div>
            <ViewAppIssue oldIssue={row} plants={plants} />
            <EditAppIssue editIssue={editIssue} plants={plants} issue={row} />
            <DeleteAppIssue orderNo={row.orderNo} removeIssue={removeIssue} />
            <TrackAppIssue editIssue={editIssue} issue={row} />
          </div>
        );
      },
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
      <SimpleTable columns={issueAppColumns} rows={rows} getRowId={((row)=> row.orderNo)} />
    </Container>
  );
}

export default IssueManagementTable;
