import { DeleteOutlineOutlined, Edit, Visibility } from "@mui/icons-material";
import { Container, IconButton, Switch } from "@mui/material";
import Table from "components/core/Table";
import React from "react";
import { getIssuesColumns } from "utils/tableColumns/IssuesColumns";

const issuesColumns = getIssuesColumns.map((e, i) => ({
  ...e,
  ...(e.field === "updatedDate" && {
    renderCell: (params) => {
      const date = params.row.updatedDate;
      return date ? date.replace("T", " ").substring(0, date.indexOf(".")) : "";
    },
  }),
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
        <div>View | Edit | Delete | Status</div>
      </div>
    ),
  }),
  // ...(e.field === "createdDate" && {
  //   renderCell: (params) => console.log(new Date(params.row.createdDate))
  // }),
}));

function IssuesTable({ search }) {
  return (
    <Container style={{ marginBottom: 20, marginTop: 50 }}>
      <Table
        columns={issuesColumns}
        url="api/issues/getAll"
        search={search}
      />
    </Container>
  );
}

export default IssuesTable;
