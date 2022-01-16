import React from 'react'
import CustomSelect from 'utils/CustomSelect'
import AppIssueRow from './AppIssueRow'

function AppIssueSelectRow({name, label, value, handleChange, list, disabled}) {
  return (
    <AppIssueRow label={label}>
      <CustomSelect name={name} list={list} value={value} handleChange={handleChange} disabled={disabled} />
    </AppIssueRow>
  )
}

export default AppIssueSelectRow
