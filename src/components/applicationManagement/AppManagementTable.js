import { DeleteOutlineOutlined, Edit, Visibility } from "@mui/icons-material";
import { Container, IconButton, Switch } from "@mui/material";
import Table from "components/core/Table";
import React from "react";
import { getAppManagementColumns } from "utils/tableColumns/AppManagementColumns";

const applicationColumns = getAppManagementColumns.map((e, i) => ({
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

function AppManagementTable() {
  return (
    <Container style={{ marginBottom: 20, marginTop: 50 }}>
      <Table columns={applicationColumns} url="api/application/getAll" />
    </Container>
  );
}

export default AppManagementTable;
