import { Container } from "@mui/material";
import SimpleTable from "components/core/SimpleTable";
import { selectDisabled } from "features/applicationSlice";
import React from "react";
import { useSelector } from "react-redux";
import { getIssueAppColumns } from "utils/tableColumns/IssueAppColumns";
import DeleteAppIssue from "./actions/DeleteAppIssue";
import EditAppIssue from "./actions/EditAppIssue";
import TrackAppIssue from "./actions/TrackAppIssue";
import ViewAppIssue from "./actions/ViewAppIssue";

function IssueManagementTable({ rows, removeIssue, editIssue, plants }) {
  const disabled = useSelector(selectDisabled);
  const columns = disabled
    ? getIssueAppColumns.filter((col) => col.field !== "actions")
    : getIssueAppColumns;
  const issueAppColumns = columns.map((e, i) => ({
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
      <SimpleTable
        columns={issueAppColumns}
        rows={rows}
        getRowId={(row) => row.orderNo}
      />
    </Container>
  );
}

export default IssueManagementTable;
