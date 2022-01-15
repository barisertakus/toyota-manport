import { DeleteOutlineOutlined } from '@mui/icons-material';
import { Button, IconButton } from '@mui/material';
import React, { useState } from 'react'
import ControlledDialog from "utils/ControlledDialog";

function DeleteAppIssue({removeIssue, id}) {

  const [open, setOpen] = useState(false);

  const openDialog = () => {
    setOpen(true);
  };

  const closeDialog = () => {
    setOpen(false);
  };

  const handleRemove = () => {
    removeIssue(id);
    closeDialog();
  }

  return (
    <ControlledDialog
      dialogTitle="Remove Issue"
      open={open}
      setOpen={setOpen}
      dialogProps={{ maxWidth: "sm", fullWidth: true }}
      controlButton={
        <IconButton className="table__icon" onClick={openDialog}>
          <DeleteOutlineOutlined />
        </IconButton>
      }
    >
      <div>Are you sure you want to remove the issue?</div>
      <div className="remove__buttons">
        <Button color="primary" variant="contained" onClick={closeDialog}>
          CANCEL
        </Button>
        <Button color="error" variant="contained" onClick={handleRemove}>
          REMOVE
        </Button>
      </div>
    </ControlledDialog>
  );
}

export default DeleteAppIssue
