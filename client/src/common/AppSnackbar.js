import { Snackbar, Alert } from "@mui/material";

const AppSnackbar = ({
  open,
  onClose,
  message,
  severity = "success",
  duration = 2000,
  anchor = { vertical: "top", horizontal: "center" },
}) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={duration}
      onClose={onClose}
      anchorOrigin={anchor}
    >
      <Alert severity={severity} sx={{ fontWeight: "bold", fontSize: "1rem" }}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default AppSnackbar;
