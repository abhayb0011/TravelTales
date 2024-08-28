import React, { useState } from "react";
import { Box, AppBar, Toolbar, Button, IconButton, Drawer, List, ListItem, Divider, useMediaQuery, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import logo from "../assets/logoTravelTales.png";

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const drawerItems = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem button component={Link} to="/contact">
          Contact us
        </ListItem>
        <ListItem button component={Link} to="/terms">
          Terms and Conditions
        </ListItem>
        <ListItem button component={Link} to="/help">
          Help
        </ListItem>
      </List>
    </Box>
  );

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
        {isMobile ? (
          <>
            <IconButton
              edge="start"
              sx={{ p: 0, mb: { xs: 2, sm: 0 } }}
              onClick={toggleDrawer(true)}
            >
              <i className="fas fa-bars"></i> {/* Ensure Font Awesome is included */}
            </IconButton>
            <Drawer
              anchor="bottom"
              open={drawerOpen}
              onClose={toggleDrawer(false)}
            >
              {drawerItems}
            </Drawer>
          </>
        ) : (
          <>
            <IconButton
              edge="start"
              sx={{ p: 0, mb: { xs: 2, sm: 0 } }}
            >
              <img src={logo} alt="Logo" style={{ height: "7rem", width: "auto" }} />
            </IconButton>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                alignItems: "center",
                width: { xs: "100%", sm: "auto" },
                gap: { xs: 1, sm: 2 },
              }}
            >
              <Button
                sx={{ color: "white", mb: { xs: 1, sm: 0 } }}
                variant="contained"
                component={Link}
                to="/contact"
              >
                Contact us
              </Button>
              <Button
                sx={{ color: "white", mb: { xs: 1, sm: 0 } }}
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
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
