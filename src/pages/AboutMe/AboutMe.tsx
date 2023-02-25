import { Container, Paper } from "@mui/material";
import React from "react";

const Home = () => {
  return (
    <Container maxWidth="sm">
      <Paper sx={{ marginTop: "10%", padding: "2em" }}>
        <h1>About Me</h1>
        <p>Hi, I'm Shaun Munsey</p>
        <p>
          I'm an software developer, experienced in C#, JavaScript, Python, and
          Java
        </p>
        <p>Welcome to my site!</p>
      </Paper>
    </Container>
  );
};

export default Home;
