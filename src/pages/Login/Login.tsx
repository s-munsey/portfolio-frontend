import { Button, Container, Paper, TextField } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import loginUser from "./loginActions";

const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser(username, password);
    console.log(token);
  };

  return (
    <Container maxWidth="sm">
      <Paper sx={{ marginTop: "10%", padding: "2em" }}>
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
          <TextField
            label="username"
            name="username"
            required
            variant="outlined"
            color="secondary"
            type="string"
            sx={{ mb: 3 }}
            fullWidth
            onChange={(e) => setUserName(e.target.value)}
          />
          <TextField
            label="Password"
            name="password"
            required
            variant="outlined"
            color="secondary"
            type="password"
            fullWidth
            sx={{ mb: 3 }}
            onChange={(e) => setPassword(e.target.value)}
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
