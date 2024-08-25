import React from "react";
import { Box, AppBar, Toolbar, Button, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import logo from "../assets/logoTravelTales.png";

const Footer = () => {
  return (
    <AppBar position="relative" style={{ bottom:0, backgroundColor: "#424242" }}>
      <Toolbar>
        <IconButton edge="start" sx={{ p: 0, mr: 10 }}>
          <img
            src={logo}
            alt="Logo"
            style={{
              height: "7rem",
              width: "auto",
            }}
          />
        </IconButton>
        <Box
          display="flex"
          flexGrow={1}
          alignItems={"center"}
          justifyContent={"space-evenly"}
        >
          <Button
            sx={{ color: "white" }}
            variant="contained"
            component={Link}
            to="/contact"
          >
            Contact us
          </Button>
          <Button
            sx={{ color: "white" }}
            component={Link}
            variant="contained"
            to="/terms"
          >
            Terms and Conditions
          </Button>
          <Button
            sx={{ color: "white" }}
            component={Link}
            variant="contained"
            to="/help"
          >
            Help
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
