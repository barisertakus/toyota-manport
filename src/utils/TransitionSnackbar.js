import React, { useState } from "react";
import { Alert, Slide, Snackbar } from "@mui/material";

function TransitionSnackbar({open, closeSnackbar, message, severity}) {
  const [transition, ] = useState(() => TransitionRight);

  function TransitionRight(props) {
    return <Slide {...props} direction="right" />;
  }

  // const handleTransition = (Transition) => () => {
  //   setTransition(() => Transition);
  //   setOpen(true);
  // };

  const handleClose = () => {
    closeSnackbar();
  };

  return (
    <Snackbar
      open={open}
      onClose={handleClose}
      TransitionComponent={transition}
      anchorOrigin={{ horizontal: "center", vertical: "top" }}
      autoHideDuration={2000}
    >
      <Alert
        onClose={handleClose}
        severity={severity || "info"}
        variant="filled"
        sx={{ width: "100%" }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
}

export default TransitionSnackbar;
