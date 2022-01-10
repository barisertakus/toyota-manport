import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";
import userService from "service/userService";
import TransitionSnackbar from "utils/TransitionSnackbar";
import { useHistory } from "react-router-dom";
import { CircularProgress } from "@mui/material";

export default function SignUp() {
  const history = useHistory();

  const [loading, setLoading] = React.useState(false);

  const [signForm, setSignForm] = React.useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });

  const [snackbar, setSnackbar] = React.useState({
    open: false,
    message: "",
    severity: "",
  });

  const openSnackbar = (message, severity) => {
    setSnackbar({ open: true, message, severity });
  };

  const closeSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  const handleSubmit = (event) => {
    setLoading(true);
    userService
      .signup(signForm)
      .then(async (response) => {
        openSnackbar(response.data, "success");
        await delay(2000);
        setLoading(false);
        history.push("login");
      })
      .catch(async (error) => {
        openSnackbar(error?.response?.data?.errorMessage?.split(";")[0] || error?.message, "error");
        setLoading(false);
      });
  };

  const handleChange = (e) => {
    setSignForm({ ...signForm, [e.target.name]: e.target.value });
  };

  const renderSaveButton = () => {
    return loading ? (
      <div style={{ display: "flex", justifyContent: "center", margin: 20 }}>
        <CircularProgress />
      </div>
    ) : (
      <Button
        onClick={handleSubmit}
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
      >
        Sign Up
      </Button>
    );
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="given-name"
                onChange={handleChange}
                name="name"
                value={signForm.name}
                required
                fullWidth
                label="Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                onChange={handleChange}
                name="username"
                value={signForm.username}
                fullWidth
                label="Username"
                autoComplete="username"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                onChange={handleChange}
                name="email"
                value={signForm.email}
                fullWidth
                label="Email Address"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                onChange={handleChange}
                name="password"
                value={signForm.password}
                fullWidth
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
              />
            </Grid>
          </Grid>
          {renderSaveButton()}
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link to="login" style={{ textDecoration: "none" }}>
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <TransitionSnackbar
        open={snackbar.open}
        closeSnackbar={closeSnackbar}
        severity={snackbar.severity}
        message={snackbar.message}
      />
    </Container>
  );
}
