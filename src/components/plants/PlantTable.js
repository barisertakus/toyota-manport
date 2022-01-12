import { Container } from "@mui/material";
import Table from "components/core/Table";
import React from "react";
import { columns, rows } from "utils/tableColumns/MockColumns";

function PlantTable() {
  return (
    <Container style={{marginBottom : 20, marginTop : 50}}>
      <Table mockRows={rows} columns={columns} />
    </Container>
  );
}

export default PlantTable;
