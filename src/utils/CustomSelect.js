import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";

function CustomSelect({ name, value, label, list, handleChange }) {
  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">{label}</InputLabel>
      <Select name={name} value={value} label={label} onChange={handleChange}>
        {list.map((item,i) => (
          <MenuItem key={i} value={item.value}>{item.label}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default CustomSelect;
