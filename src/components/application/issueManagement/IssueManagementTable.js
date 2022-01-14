import { DeleteOutlineOutlined, Edit, Visibility } from "@mui/icons-material";
import { Container, IconButton } from "@mui/material";
import SimpleTable from "components/core/SimpleTable";
import React from "react";
import { Switch } from "react-router-dom";
import { getIssueAppColumns } from "utils/tableColumns/IssueAppColumns";

const issueAppColumns = getIssueAppColumns.map((e, i) => ({
  ...e,
  ...(e.field === "actions" && {
    renderCell: () => (
      <div>
        <IconButton className="table__icon">
          <Visibility />
        </IconButton>
        <IconButton className="table__icon">
          <Edit />
        </IconButton>
        <IconButton className="table__icon">
          <DeleteOutlineOutlined />
        </IconButton>
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

function IssueManagementTable({ rows }) {
  return (
    <Container>
      <SimpleTable columns={issueAppColumns} rows={rows} />
    </Container>
  );
}

export default IssueManagementTable;

