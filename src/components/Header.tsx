import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Box display="flex" justifyContent="space-between" width="100%">
            <Typography
              variant="h6"
              component="div"
              align="center"
              width="30%"
              sx={{ flexGrow: 1 }}
            >
              <Link to="/" className="header-link">
                About Me
              </Link>
              <Link to="/bookshelf" className="header-link">
                Bookshelf
              </Link>
              <Link to="/blog" className="header-link">
                Blog
              </Link>
            </Typography>
            <Typography
              variant="h4"
              component="div"
              align="center"
              width="30%"
              sx={{ flexGrow: 1, justifyContent: "center" }}
            >
              Shaun's Pages
            </Typography>
            <Typography
              variant="h4"
              component="div"
              align="center"
              width="30%"
              sx={{ flexGrow: 1, justifyContent: "center" }}
            >
              <Link to="/login">
                <Button color="inherit">Login</Button>
              </Link>
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
