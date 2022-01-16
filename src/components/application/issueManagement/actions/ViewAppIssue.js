import { Visibility } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React, { useState } from "react";
import ControlledDialog from "utils/ControlledDialog";
import CreateAppIssueForm from "../CreateAppIssueForm";

function ViewAppIssue({ oldIssue, plants }) {
  const [open, setOpen] = useState(false);

  return (
    <ControlledDialog
      open={open}
      setOpen={setOpen}
      dialogTitle="View Issue"
      dialogProps={{ maxWidth: "sm", fullWidth: true }}
      controlButton={
        <IconButton className="table__icon" onClick={() => setOpen(true)}>
          <Visibility />
        </IconButton>
      }
    >
      <CreateAppIssueForm disabled oldIssue={oldIssue} plants={plants} />
    </ControlledDialog>
  );
}

export default ViewAppIssue;
