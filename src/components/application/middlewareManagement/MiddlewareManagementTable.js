import { Container } from "@mui/material";
import SimpleTable from "components/core/SimpleTable";
import React from "react";
import { getMiddlewareManagementColumns as getColumns } from "utils/tableColumns/MiddlewareManagementColumns";

function MiddlewareManagementTable({ rows }) {
  const middlewareManagementColumns = getColumns.map((e, i) => ({
    ...e,
    ...(e.field === "actions" && {
      // renderCell: (params) => params.row,
      renderHeader: () => (
        <div className="management__actions">
          <div>Actions</div>
          <div>Edit | Delete</div>
        </div>
      ),
    }),
  }));

  return (
    <Container>
      <SimpleTable columns={middlewareManagementColumns} rows={rows} />
    </Container>
  );
}

export default MiddlewareManagementTable;
