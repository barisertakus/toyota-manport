import { DeleteOutlineOutlined, Edit, Visibility } from "@mui/icons-material";
import { Button, Container, IconButton } from "@mui/material";
import SimpleTable from "components/core/SimpleTable";
import React, { useState } from "react";
import { Switch } from "react-router-dom";
import DeleteDialog from "utils/DeleteDialog";
import { getIssueAppColumns } from "utils/tableColumns/IssueAppColumns";

function IssueManagementTable({ rows, removeIssue }) {
  const [open, setOpen] = useState(false);

  const openDialog = () => {
    setOpen(true);
  };

  const closeDialog = () => {
    setOpen(false);
  };

  const removeIssueFromTable = (id) => {
    removeIssue(id);
    closeDialog();
  }

  const renderDialog = (id) => {
    return (
      <DeleteDialog
        dialogTitle="Remove Issue"
        open={open}
        setOpen={setOpen}
        dialogProps={{ maxWidth: "sm", fullWidth: true }}
        deleteButton={
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
          <Button color="error" variant="contained" onClick={()=>removeIssueFromTable(id)}>
            REMOVE
          </Button>
        </div>
      </DeleteDialog>
    );
  };

  const issueAppColumns = getIssueAppColumns.map((e, i) => ({
    ...e,
    ...(e.field === "actions" && {
      renderCell: (params) => (
        <div>
          <IconButton className="table__icon">
            <Visibility />
          </IconButton>
          <IconButton className="table__icon">
            <Edit />
          </IconButton>
          {renderDialog(params.row.id)}
          <Switch className="table__switch" />
        </div>
      ),
      renderHeader: () => (
        <div className="management__actions">
          <div>Actions</div>
          <div>View | Edit | Delete | Track</div>
        </div>
      ),
    }),
  }));

  return (
    <Container>
      <SimpleTable columns={issueAppColumns} rows={rows} />
    </Container>
  );
}

export default IssueManagementTable;
