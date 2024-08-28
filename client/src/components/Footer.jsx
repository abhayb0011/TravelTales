import React, { useState } from "react";
import { Box, AppBar, Toolbar, Button, IconButton, Menu, MenuItem, useMediaQuery, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import logo from "../assets/logoTravelTales.png";

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position={isMobile ? "static" : "sticky"} sx={{ backgroundColor: "#424242", bottom: 0 }}>
      <Toolbar
        sx={{
          alignItems: "center",
          p: { xs: 1, sm: 2 },
          display: "flex",
          justifyContent: "space-between",
          gap: isMobile ? "1 rem" : "2rem"
        }}
      >
        <IconButton
          edge="start"
          sx={{ p: 0 }}
        >
          <img
            src={logo}
            alt="Logo"
            style={{
              height: { xs: '0.2rem', sm: '0.4rem' },  
              width: "auto",
            }}
          />
        </IconButton>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: { xs: 1, sm: 2 }, 
            }}
          >
            <Button
              sx={{ color: "white", fontSize: { xs: '0.65rem', sm: '0.85rem' } }}  
              variant="contained"
              component={Link}
              to="/contact"
            >
              Contact us
            </Button>
            <Button
              sx={{ color: "white", fontSize: { xs: '0.65rem', sm: '0.85rem' } }} 
              variant="contained"
              component={Link}
              to="/terms"
            >
              Terms and Conditions
            </Button>
            <Button
              sx={{ color: "white", fontSize: { xs: '0.65rem', sm: '0.85rem' } }}  
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
