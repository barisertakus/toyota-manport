import React, { useState } from "react";
import ControlledFormDialog from "utils/ControlledFormDialog";
import CreateAppIssueForm from "./CreateAppIssueForm";

function CreateAppIssue({plants, addIssue}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="create__appIssue-btn">
      <ControlledFormDialog
        dialogTitle="Add New Issue"
        btnText="Add New Issue"
        dialogProps={{ fullWidth: true, maxWidth: "sm" }}
        open={open}
        setOpen={setOpen}
      >
        <CreateAppIssueForm plants={plants} setOpen={setOpen} addIssue={addIssue} />
      </ControlledFormDialog>
    </div>
  );
}

export default CreateAppIssue;
