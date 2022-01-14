import { DataGrid } from "@mui/x-data-grid";
import React, { forwardRef, useState } from "react";

const SimpleTable = forwardRef(({ rows, columns }, ref) => {
  const [pageSize, setPageSize] = useState(10);

  const handlePageSizeChange = (pageSize) => {
    setPageSize(pageSize);
  };

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        showCellRightBorder
        pagination
        paginationMode="client"
        sortingMode="client"
        pageSize={pageSize}
        onPageSizeChange={handlePageSizeChange}
        rowsPerPageOptions={[2, 5, 10, 20, 50, 100]}
      />
    </div>
  );
});

export default SimpleTable;
