import { Container } from "@mui/material";
import Table from "components/core/Table";
import React from "react";
import { PlantColumns } from "utils/tableColumns/PlantColumns";

const getPlantColumns = PlantColumns.map((e, i) => ({
  ...e,
  ...(e.field === "lastActionDate" && {
    renderCell: (params) =>
      (params.row.updatedDate || params.row.createdDate).replace("T", " "),
  }),
}));

function PlantTable() {
  return (
    <Container style={{ marginBottom: 20, marginTop: 50 }}>
      <Table columns={getPlantColumns} url="api/plant/getAll" />
    </Container>
  );
}

export default PlantTable;
