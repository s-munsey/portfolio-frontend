import { Container, Paper } from "@mui/material";
import React from "react";

const Bookshelf = () => {
  return (
    <Container maxWidth="sm">
      <Paper sx={{ marginTop: "10%", padding: "2em" }}>
        <h1>Bookshelf</h1>
      </Paper>
    </Container>
  );
};

export default Bookshelf;
