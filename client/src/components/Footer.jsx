import React from "react";
import { Box, AppBar, Toolbar, Button, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import logo from "../assets/logoTravelTales.png";
import "./Footer.css";

const Footer = () => {
  return (
    <AppBar position="relative" className="footerAppBar">
      <Toolbar className="footerToolbar">
        <IconButton edge="start" className="footerLogoButton">
          <img src={logo} alt="Logo" className="footerLogo" />
        </IconButton>
        <Box className="footerLinks">
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
            variant="contained"
            component={Link}
            to="/terms"
          >
            Terms and Conditions
          </Button>
          <Button
            sx={{ color: "white" }}
            variant="contained"
            component={Link}
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
