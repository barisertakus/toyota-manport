import { Edit } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React, { useState } from "react";
import ControlledDialog from "utils/ControlledDialog";
import CreateInfraForm from "../CreateInfraForm";

function EditInfra({plants, editInfra, infra, rows}) {
  const [open, setOpen] = useState(false);

  return (
    <ControlledDialog
      open={open}
      setOpen={setOpen}
      dialogTitle="Edit Infrastructure"
      dialogProps={{ maxWidth: "sm", fullWidth: true }}
      controlButton={
        <IconButton className="table__icon" onClick={()=> setOpen(true)}>
          <Edit />
        </IconButton>
      }
    >
      <CreateInfraForm
        plants={plants}
        setOpen={setOpen}
        editInfra={editInfra}
        oldInfra={infra}
        infrastructures={rows}
      />
    </ControlledDialog>
  );
}

export default EditInfra;
