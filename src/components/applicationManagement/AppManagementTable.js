import { DeleteOutlineOutlined, Edit, Visibility } from "@mui/icons-material";
import { Container, IconButton, Switch } from "@mui/material";
import Table from "components/core/Table";
import React from "react";
import { useHistory } from "react-router-dom";
import { getAppManagementColumns } from "utils/tableColumns/AppManagementColumns";

function AppManagementTable() {
  const history = useHistory();

  const viewDetails = (row) => {
    history.push("management/" + row.shortName);
  };

  const editDetails = (row) => {
    history.push("management/" + row.shortName, { edit: true });
  };

  const applicationColumns = getAppManagementColumns.map((e, i) => ({
    ...e,
    ...(e.field === "actions" && {
      renderCell: (params) => (
        <div>
          <IconButton
            className="table__icon"
            onClick={() => viewDetails(params.row)}
          >
            <Visibility />
          </IconButton>
          <IconButton
            className="table__icon"
            onClick={() => editDetails(params.row)}
          >
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

  return (
    <Container style={{ marginBottom: 20, marginTop: 50 }}>
      <Table columns={applicationColumns} url="api/application/getAll" />
    </Container>
  );
}

export default AppManagementTable;
