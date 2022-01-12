import { DataGrid } from "@mui/x-data-grid";
import React, { forwardRef, useState } from "react";

const Table = forwardRef(({ mockRows, columns, url }, ref) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [sortModel, setSortModel] = useState([]);
  const [rows,] = useState(mockRows);
  const [loading,] = useState(false);
  // const [rowCount, setRowCount] = useState(0);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handlePageSizeChange = (pageSize) => {
    setPageSize(pageSize);
  };

  const handleSortModelChange = (sortModel) => {
    setSortModel(sortModel);
  };

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        loading={loading}
        page={currentPage}
        onPageChange={handlePageChange}
        pageSize={pageSize}
        onPageSizeChange={handlePageSizeChange}
        pagination
        paginationMode="client"
        sortingMode="client"
        sortModel={sortModel}
        onSortModelChange={handleSortModelChange}
        // rowCount={rowCount}
        rowsPerPageOptions={[5, 10, 20, 50, 100]}
      />
    </div>
  );
});

export default Table;
