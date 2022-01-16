import React from 'react'
import CustomSelect from 'utils/CustomSelect'
import AppDialogRow from './AppDialogRow'

function AppDialogSelectRow({name, label, value, handleChange, list, disabled}) {
  return (
    <AppDialogRow label={label}>
      <CustomSelect name={name} list={list} value={value} handleChange={handleChange} disabled={disabled} />
    </AppDialogRow>
  )
}

export default AppDialogSelectRow
