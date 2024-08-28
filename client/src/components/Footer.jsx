import React from "react";
import { Box, AppBar, Toolbar, Button, IconButton, useMediaQuery, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import logo from "../assets/logoTravelTales.png";

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <AppBar position="relative" sx={{ backgroundColor: "#424242", bottom: 0 }}>
      <Toolbar
        sx={{
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          p: { xs: 2, sm: 3 },
        }}
      >
        <IconButton
          edge="start"
          sx={{ p: 0, mb: { xs: 2, sm: 0 } }}
        >
          <img
            src={logo}
            alt="Logo"
            style={{
              height: isMobile ? "4rem" : "7rem", // Adjust logo size for small screens
              width: "auto",
            }}
          />
        </IconButton>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: "center",
            width: { xs: "100%", sm: "auto" },
            gap: { xs: 1, sm: 2 },
            textAlign: { xs: "center", sm: "left" }
          }}
        >
          <Button
            sx={{ color: "white", mb: { xs: 1, sm: 0 }, fontSize: { xs: '0.75rem', sm: '1rem' } }} // Adjust button size for small screens
            variant="contained"
            component={Link}
            to="/contact"
          >
            Contact us
          </Button>
          <Button
            sx={{ color: "white", mb: { xs: 1, sm: 0 }, fontSize: { xs: '0.75rem', sm: '1rem' } }} // Adjust button size for small screens
            variant="contained"
            component={Link}
            to="/terms"
          >
            Terms and Conditions
          </Button>
          <Button
            sx={{ color: "white", fontSize: { xs: '0.75rem', sm: '1rem' } }} // Adjust button size for small screens
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
