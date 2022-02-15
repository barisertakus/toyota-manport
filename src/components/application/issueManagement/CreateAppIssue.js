import { selectDisabled } from "features/applicationSlice";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import ControlledFormDialog from "utils/ControlledFormDialog";
import CreateAppIssueForm from "./CreateAppIssueForm";

function CreateAppIssue({ plants, addIssue }) {
  const [open, setOpen] = useState(false);
  const disabled = useSelector(selectDisabled);

  return (
    <div
      className="create__appDialog-btn"
      style={disabled ? { display: "none" } : null}
    >
      <ControlledFormDialog
        dialogTitle="Add New Issue"
        btnText="Add New Issue"
        dialogProps={{ fullWidth: true, maxWidth: "sm" }}
        open={open}
        setOpen={setOpen}
      >
        <CreateAppIssueForm
          plants={plants}
          setOpen={setOpen}
          addIssue={addIssue}
        />
      </ControlledFormDialog>
    </div>
  );
}

export default CreateAppIssue;
