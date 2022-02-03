import { DataGrid } from "@mui/x-data-grid";
import api from "helpers/api";
import React, { forwardRef, useEffect, useState } from "react";

const Table = forwardRef(({ columns, url, tableStyle }, ref) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [sortModel, setSortModel] = useState([]);
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(false);
  const [rowCount, setRowCount] = useState(0);

  const getQuery = () => {
    let queryURL = url;

    // PAGE
    queryURL +=
      (queryURL.indexOf("?") !== -1 ? "&" : "?") +
      "pageNo=" +
      currentPage +
      "&pageSize=" +
      pageSize;

    // SORT
    if (sortModel.length > 0)
      queryURL +=
        "&sortField=" + sortModel[0].field + "&sortType=" + sortModel[0].sort;

    return queryURL;
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handlePageSizeChange = (pageSize) => {
    setPageSize(pageSize);
  };

  const handleSortModelChange = (sortModel) => {
    setSortModel(sortModel);
  };

  const loadData = () => {
    const queryString = getQuery();
    if (!loading) {
      console.log("Loading rows", queryString);
      setLoading(true);
      api
        .get(queryString)
        .then((response) => {
          const { content, totalElements } = response.data;
          setRows(content);
          console.log(content)
          setRowCount(totalElements);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
        });
    }
  };

  //eslint-disable-next-line
  useEffect(() => loadData(), [currentPage, pageSize, sortModel]);


  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        showCellRightBorder
        loading={loading}
        page={currentPage}
        onPageChange={handlePageChange}
        pageSize={pageSize}
        onPageSizeChange={handlePageSizeChange}
        pagination
        paginationMode="server"
        sortingMode="server"
        sortModel={sortModel}
        onSortModelChange={handleSortModelChange}
        rowCount={rowCount}
        rowsPerPageOptions={[2,5, 10, 20, 50, 100]}
      />
    </div>
  );
});

export default Table;
