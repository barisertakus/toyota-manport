import { Container } from "@mui/material";
import SimpleTable from "components/core/SimpleTable";
import React from "react";
import { getMiddlewareManagementColumns } from "utils/tableColumns/MiddlewareManagementColumns";

function MiddlewareManagementTable({ rows }) {
  const middlewareManagementColumns = getMiddlewareManagementColumns.map((e, i) => ({
    ...e,
    ...(e.field === "actions" && {
      renderCell: (params) => params,
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
      <SimpleTable columns={middlewareManagementColumns} rows={rows} />
    </Container>
  );
}

export default MiddlewareManagementTable;
