import { Container, IconButton } from "@mui/material";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import Table from "components/core/Table";
import React from "react";
import { PlantColumns } from "utils/tableColumns/PlantColumns";

const getPlantColumns = PlantColumns.map((e, i) => ({
  ...e,
  ...(e.field === "actions" && {
    renderCell: (params) => (
      <IconButton style={{margin: 0}}>
        <DeleteOutlineOutlinedIcon style={{margin: 0}} />
      </IconButton>
    ),
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
