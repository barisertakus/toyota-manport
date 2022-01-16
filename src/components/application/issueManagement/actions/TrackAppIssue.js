import { Switch } from "@mui/material";
import React from "react";

function TrackAppIssue({ editIssue, issue }) {

  const handleChange = (e) => {
    editIssue({...issue, track: e.target.checked})
  };

  return (
    <Switch
      className="table__switch"
      checked={issue.track}
      onChange={handleChange}
    />
  );
}

export default TrackAppIssue;
