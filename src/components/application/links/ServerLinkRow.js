import { TextField } from "@mui/material";
import React from "react";

function ServerLinkRow({ header, name, value, handleChange }) {
  return (
    <div className="server__linkRow">
      <h6>{header}</h6>
      <TextField
        variant="standard"
        name={name}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}

export default ServerLinkRow;
