import { TextField } from "@mui/material";
import React from "react";
import AppDialogRow from "./AppDialogRow";

function AppDialogTextRow({ name, label, value, disabled, handleChange, ...props }) {
  return (
    <AppDialogRow label={label}>
      <TextField
        name={name}
        label={label}
        value={value}
        variant="outlined"
        disabled={disabled}
        onChange={handleChange}
        fullWidth
        {...props}
      />
    </AppDialogRow>
  );
}

export default AppDialogTextRow;
