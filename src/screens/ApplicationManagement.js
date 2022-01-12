import Table from 'components/Table'
import React from 'react'
import { columns, rows } from 'utils/tableColumns/MockColumns'

function ApplicationManagement() {
  return (
    <div>
      <Table columns={columns} mockRows={rows} />
    </div>
  )
}

export default ApplicationManagement