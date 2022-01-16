import React, { useState } from "react";
import ControlledFormDialog from "utils/ControlledFormDialog";
import CreateInfraForm from "./CreateInfraForm";

function CreateInfra({ plants, addInfra, infrastructures }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="create__appDialog-btn">
      <ControlledFormDialog
        dialogTitle="Add New Infrastracture"
        btnText="Add New Infra"
        dialogProps={{ fullWidth: true, maxWidth: "sm" }}
        open={open}
        setOpen={setOpen}
      >
        <CreateInfraForm setOpen={setOpen} addInfra={addInfra} plants={plants} infrastructures={infrastructures} />
      </ControlledFormDialog>
    </div>
  );
}

export default CreateInfra;
