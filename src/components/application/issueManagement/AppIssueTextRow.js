import { TextField } from "@mui/material";
import React from "react";
import AppIssueRow from "./AppIssueRow";

function AppIssueTextRow({ name, label, value, disabled, handleChange }) {
  return (
    <AppIssueRow label={label}>
      <TextField
        name={name}
        label={label}
        value={value}
        variant="outlined"
        disabled={disabled}
        onChange={handleChange}
        fullWidth
      />
    </AppIssueRow>
  );
}

export default AppIssueTextRow;
