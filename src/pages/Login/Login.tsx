import {
  Box,
  Button,
  Container,
  FormControl,
  Input,
  InputLabel,
  Paper,
  TextField,
} from "@mui/material";
import React from "react";

const Login = () => {
  return (
    <Container maxWidth="sm">
      <Paper sx={{ marginTop: "10%", padding: "2em" }}>
        <form autoComplete="off">
          <h2>Login</h2>
          <TextField
            label="Email"
            required
            variant="outlined"
            color="secondary"
            type="email"
            sx={{ mb: 3 }}
            fullWidth
          />
          <TextField
            label="Password"
            required
            variant="outlined"
            color="secondary"
            type="password"
            fullWidth
            sx={{ mb: 3 }}
          />
          <Button variant="outlined" color="secondary" type="submit">
            Login
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default Login;
