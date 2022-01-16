import { Edit } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React, { useState } from "react";
import ControlledDialog from "utils/ControlledDialog";
import CreateAppIssueForm from "../CreateAppIssueForm";

function EditAppIssue({plants, editIssue, issue}) {
  const [open, setOpen] = useState(false);

  return (
    <ControlledDialog
      open={open}
      setOpen={setOpen}
      dialogTitle="Edit Issue"
      dialogProps={{ maxWidth: "sm", fullWidth: true }}
      controlButton={
        <IconButton className="table__icon" onClick={()=> setOpen(true)}>
          <Edit />
        </IconButton>
      }
    >
      <CreateAppIssueForm
        plants={plants}
        setOpen={setOpen}
        editIssue={editIssue}
        oldIssue={issue}
      />
    </ControlledDialog>
  );
}

export default EditAppIssue;
