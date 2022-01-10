import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";
import { checkedSelector, login, userSelector } from "features/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { CircularProgress } from "@mui/material";

export default function Login() {
  const dispatch = useDispatch();
  const user = useSelector(userSelector);
  const isChecked = useSelector(checkedSelector);

  const [loginForm, setLoginForm] = React.useState({
    username: "",
    password: "",
  });

  const history = useHistory();

  const handleSubmit = (event) => {
    dispatch(login({ payload: loginForm, history: history }));
  };

  const handleChange = (e) => {
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
  };

  React.useEffect(() => {
    if (user.username) {
      history.push("/");
    }
  }, [history, user.username]);

  const renderLoading = () => {
    return <div style={{height: "500px", display:"flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
      <CircularProgress />
      <h4>Please wait...</h4>
    </div>;
  };

  return (
    !isChecked ? renderLoading() : 
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
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            label="Username"
            name="username"
            value={loginForm.username}
            onChange={handleChange}
            autoComplete="username"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            value={loginForm.password}
            onChange={handleChange}
            label="Password"
            type="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={handleSubmit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item>
              <Link to="signup" style={{ textDecoration: "none" }}>
                Don't have an account? Sign Up
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
