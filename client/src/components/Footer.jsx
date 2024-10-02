import React from "react";
import {
  Box,
  AppBar,
  Toolbar,
  Button,
  IconButton,
} from "@mui/material";
import { Link } from "react-router-dom";
import logo from "../assets/logoTravelTales.png";

const Footer = () => {
  return (
    <AppBar position="relative" sx={{ backgroundColor: "#424242", bottom: 0 }}>
      <Toolbar
        sx={{
          alignItems: "center",
          p: { xs: 1, sm: 2 },
          display: "flex",
          justifyContent: "space-between",
          gap: { xs: 1, sm: 2 },
        }}
      >
        <IconButton edge="start" sx={{ p: 0 }}>
          <img
            src={logo}
            alt="Logo"
            style={{
              height: "auto",
              width: "100%",
              maxHeight: "4rem",
              maxWidth: "4rem",
              "@media (max-width: 600px)": {
                maxHeight: "2rem",
                maxWidth: "2rem",
              },
              "@media (max-width: 400px)": {
                maxHeight: "1.5rem",
                maxWidth: "1.5rem",
              },
            }}
          />
        </IconButton>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: { xs: 1, sm: 4, md: 20 },
            mr: { md: 45, xs: 1, sm: 15 },
          }}
        >
          <Button
            sx={{
              color: "white",
              fontSize: { xs: "0.65rem", sm: "0.85rem" },
              height: { xs: "3rem" },
            }}
            variant="contained"
            component={Link}
            to="/contact"
          >
            Contact us
          </Button>
          <Button
            sx={{
              color: "white",
              fontSize: { xs: "0.65rem", sm: "0.85rem" },
              height: { xs: "3rem" },
            }}
            variant="contained"
            component={Link}
            to="/terms"
          >
            Terms and Conditions
          </Button>
          <Button
            sx={{
              color: "white",
              fontSize: { xs: "0.65rem", sm: "0.85rem" },
              height: { xs: "3rem" },
            }}
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
