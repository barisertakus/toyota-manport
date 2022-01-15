import { DeleteOutlineOutlined, Edit, Visibility } from "@mui/icons-material";
import { Button, Container, IconButton } from "@mui/material";
import SimpleTable from "components/core/SimpleTable";
import React, { useState } from "react";
import { Switch } from "react-router-dom";
import { getIssueAppColumns } from "utils/tableColumns/IssueAppColumns";
import DeleteAppIssue from "./actions/DeleteAppIssue";

function IssueManagementTable({ rows, removeIssue }) {

  const issueAppColumns = getIssueAppColumns.map((e, i) => ({
    ...e,
    ...(e.field === "actions" && {
      renderCell: (params) => (
        <div>
          <IconButton className="table__icon">
            <Visibility />
          </IconButton>
          <IconButton className="table__icon">
            <Edit />
          </IconButton>
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
