import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";

function VoidableSelect({ name, value, label, list, handleChange, disabled }) {
  return (
    <FormControl fullWidth disabled={disabled}>
      <InputLabel id="demo-simple-select-label">{label}</InputLabel>
      <Select name={name} value={value} label={label} onChange={handleChange}>
        {list.map((item, i) => (
          <MenuItem
            style={item.disable ? { display: "none" } : null}
            key={i}
            value={item.value}
          >
            {item.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default VoidableSelect;
