import Table from 'components/core/Table';
import React from 'react'
import { columns, rows } from "utils/tableColumns/MockColumns";

function AppManagementTable() {
  return (
    <div>
      <Table columns={columns} mockRows={rows} />
    </div>
  )
}

export default AppManagementTable
