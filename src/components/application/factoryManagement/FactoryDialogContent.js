import React from "react";
import { Button, Divider, List, ListItem, ListItemText } from "@mui/material";
import ControlledDialog from "utils/ControlledDialog";

function FactoryDialogContent({open, setOpen, handleCancel, handleRemove, issuesRemove}) {
  return (
    <ControlledDialog
      dialogTitle="Remove From Country"
      open={open}
      setOpen={setOpen}
      dialogProps={{ maxWidth: "sm", fullWidth: true }}
    >
      <div>
        If the country you selected is removed, the following issues will be
        removed.
      </div>
      <div>
        <List component="nav" aria-label="mailbox folders">
          {issuesRemove.map((issue, i) => (
            <div key={i}>
              <ListItem button>
                <ListItemText primary={issue.issueType} />
              </ListItem>
              <Divider />
            </div>
          ))}
        </List>
      </div>
      <div>Are you sure you want to remove the country?</div>
      <div className="remove__buttons">
        <Button color="primary" variant="contained" onClick={handleCancel}>
          CANCEL
        </Button>
        <Button color="error" variant="contained" onClick={handleRemove}>
          REMOVE
        </Button>
      </div>
    </ControlledDialog>
  );
}

export default FactoryDialogContent;
