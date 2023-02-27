import { Button, Container, Paper, TextField } from "@mui/material";
import { useState, useContext } from "react";

import loginUser from "./loginActions";
import UserContext from "./UserContext";

const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const [user, setUser] = useContext(UserContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser(username, password);
    if (token) {
      setUser({
        username: username,
        token: token,
      });
    }
    console.log(token);
  };

  return (
    <Container maxWidth="sm">
      <Paper sx={{ marginTop: "10%", padding: "2em" }}>
        <form onSubmit={handleSubmit}>
          {user ? <h1>Hello {user.username}</h1> : null}
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
