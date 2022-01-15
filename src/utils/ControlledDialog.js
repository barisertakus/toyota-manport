import { Clear } from "@mui/icons-material";
import { Box, IconButton, Stack, Tooltip } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import React from "react";

function DeleteDialog({ controlButton, dialogTitle, children, dialogProps, open, setOpen }) {

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      {controlButton}
      <Dialog open={open} onClose={handleClose} {...dialogProps}>
        <DialogTitle>
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            {dialogTitle}
            <Stack direction="row" spacing={3}>
              <Tooltip title="Cancel" arrow>
                <IconButton onClick={handleClose}>
                  <Clear />
                </IconButton>
              </Tooltip>
            </Stack>
          </Box>
        </DialogTitle>
        <DialogContent>{children}</DialogContent>
      </Dialog>
    </>
  );
}

export default DeleteDialog;
