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
        }}
      >
        <IconButton
          edge="start"
          sx={{ p: 0, mb: { xs: 1, sm: 0 } }}
        >
          <img
            src={logo}
            alt="Logo"
            style={{
              height: isMobile ? "1.5rem" : "4rem",  // Reduced logo size
              width: "auto",
            }}
          />
        </IconButton>
        {isMobile ? (
          <>
            <IconButton
              edge="end"
              sx={{ p: 0, mb: { xs: 1, sm: 0 } }}
              onClick={handleClick}
            >
              <i className="fas fa-bars"></i>
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
            >
              <MenuItem onClick={handleClose} component={Link} to="/contact">
                Contact us
              </MenuItem>
              <MenuItem onClick={handleClose} component={Link} to="/terms">
                Terms and Conditions
              </MenuItem>
              <MenuItem onClick={handleClose} component={Link} to="/help">
                Help
              </MenuItem>
            </Menu>
          </>
        ) : (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: { xs: 1, sm: 2 },  // Adjusted gap between buttons
            }}
          >
            <Button
              sx={{ color: "white", fontSize: { xs: '0.65rem', sm: '0.85rem' } }}  // Reduced button size
              variant="contained"
              component={Link}
              to="/contact"
            >
              Contact us
            </Button>
            <Button
              sx={{ color: "white", fontSize: { xs: '0.65rem', sm: '0.85rem' } }}  // Reduced button size
              variant="contained"
              component={Link}
              to="/terms"
            >
              Terms and Conditions
            </Button>
            <Button
              sx={{ color: "white", fontSize: { xs: '0.65rem', sm: '0.85rem' } }}  // Reduced button size
              variant="contained"
              component={Link}
              to="/help"
            >
              Help
            </Button>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
