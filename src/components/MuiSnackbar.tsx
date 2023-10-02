import { Snackbar, Button, Alert, AlertProps } from "@mui/material";
import { useState, forwardRef } from "react";

const SnackbarAlert = forwardRef<HTMLDivElement, AlertProps>(
  function SnackbarAlert(props, ref) {
    return <Alert elevation={5} ref={ref} {...props} />;
  }
);

export const MuiSnackbar = () => {
  const [open, setOpen] = useState(false);
  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  return (
    <>
      <Button onClick={() => setOpen(true)}>Snackbar - Submit</Button>
      <Snackbar
        message="form submitted successfully!"
        autoHideDuration={4000}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
      ></Snackbar>

      {/* Customized snackbar */}
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <SnackbarAlert onClose={handleClose} severity='success'>
          Custom Snackbar - successfull
        </SnackbarAlert>
      </Snackbar>
    </>
  );
};
