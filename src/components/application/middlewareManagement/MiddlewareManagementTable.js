import { Container } from "@mui/material";
import SimpleTable from "components/core/SimpleTable";
import { selectDisabled } from "features/applicationSlice";
import React from "react";
import { useSelector } from "react-redux";
import { getMiddlewareManagementColumns as getColumns } from "utils/tableColumns/MiddlewareManagementColumns";
import DeleteInfra from "./actions/DeleteInfra";
import EditInfra from "./actions/EditInfra";

function MiddlewareManagementTable({ rows, editInfra, removeInfra, plants }) {
  const disabled = useSelector(selectDisabled);

  const columns = disabled
  ? getColumns.filter((col) => col.field !== "actions")
  : getColumns;

  const middlewareManagementColumns = columns.map((e, i) => ({
    ...e,
    ...(e.field === "actions" && {
      renderCell: (params) => (
        <div>
          <EditInfra
            editInfra={editInfra}
            infra={params.row}
            plants={plants}
            rows={rows}
          />
          <DeleteInfra orderNo={params.row.orderNo} removeInfra={removeInfra} />
        </div>
      ),
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
      <SimpleTable
        columns={middlewareManagementColumns}
        rows={rows}
        getRowId={(row) => row.orderNo}
      />
    </Container>
  );
}

export default MiddlewareManagementTable;
