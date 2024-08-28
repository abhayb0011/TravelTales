import React from "react";
import { Box, AppBar, Toolbar, Button, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import logo from "../assets/logoTravelTales.png";

const Footer = () => {
  return (
    <AppBar position="relative" sx={{ backgroundColor: "#424242", bottom: 0 }}>
      <Toolbar sx={{ flexDirection: { xs: "column", sm: "row" }, alignItems: "center", justifyContent: "space-between", p: { xs: 2, sm: 3 } }}>
        <IconButton edge="start" sx={{ p: 0, mb: { xs: 2, sm: 0 } }}>
          <img src={logo} alt="Logo" style={{ height: "7rem", width: "auto" }} />
        </IconButton>
        <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, alignItems: "center", width: { xs: "100%", sm: "auto" } }}>
          <Button sx={{ color: "white", mb: { xs: 1, sm: 0 }, mr: { sm: 2 } }} variant="contained" component={Link} to="/contact">
            Contact us
          </Button>
          <Button sx={{ color: "white", mb: { xs: 1, sm: 0 }, mr: { sm: 2 } }} variant="contained" component={Link} to="/terms">
            Terms and Conditions
          </Button>
          <Button sx={{ color: "white" }} variant="contained" component={Link} to="/help">
            Help
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
