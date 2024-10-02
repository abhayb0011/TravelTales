import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  AppBar,
  Toolbar,
  Button,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  Divider,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../redux/store";
import toast from "react-hot-toast";
import logo from "../assets/logoTravelTales.png";

const Header = () => {
  const isLogin =
    useSelector((state) => state.isLogin) || localStorage.getItem("userId");  //value of isLogin from global state and userId taken from browser local's storage 
    const dispatch = useDispatch();                                           //to dispatch(make changes) to global state
    const navigate = useNavigate();                                           //to navigate between routes

  const handleLogout = () => {
    try {
      dispatch(authActions.logout());                                        
      toast.success("Logout Successfully");
      navigate("/login");                                                     //to navigate to login route 
      localStorage.clear();
    } catch (error) {
      console.log(error);
    }
  };

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
        {isLogin && (
          <>
            <ListItem Button component={Link} to="/blogs">
              Blogs
            </ListItem>
            <ListItem Button component={Link} to="/my-blogs">
              My Blogs
            </ListItem>
            <ListItem Button component={Link} to="/create-blog">
              Create Blog
            </ListItem>
            <Divider />
          </>
        )}
        {!isLogin && (
          <>
            <ListItem Button component={Link} to="/login">
              Login
            </ListItem>
            <ListItem Button component={Link} to="/register">
              Register
            </ListItem>
            <Divider />
          </>
        )}
        {isLogin && (
          <ListItem Button onClick={handleLogout}>
            Logout
          </ListItem>
        )}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position = {isMobile ? "static" : "sticky"} sx={{ backgroundColor: "#424242" }}>
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            p: 2,
            justifyContent: "space-between"
          }}
        >
          <IconButton edge="start" sx={{ p: 0}}>
            <img
              src={logo}
              alt="Logo"
              style={{ height: "5rem", width: "auto" }}
            />
          </IconButton>
          <Typography
            variant="h4"
            sx={{
              flexGrow: 1,
              fontFamily: "Dancing Script, Arial",
              fontWeight: 700,
              fontSize: { xs: 24, sm: 32 },
              textAlign: { xs: "center", sm: "left" },
              mb: { xs: 2, sm: 0 },
              ml: {md:'15rem',sm:'2rem',xs:'1rem'}
            }}
          >
            Unveiling the World's Wonders Through Captivating Blogs
          </Typography>
          {isMobile ? (
            <>
              <IconButton
                edge="end"
                color="inherit"
                onClick={toggleDrawer(true)}
                sx={{ ml: 2 }}
              >
                <i className="fas fa-bars"></i> 
              </IconButton>
              <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={toggleDrawer(false)}
              >
                {drawerItems}
              </Drawer>
            </>
          ) : (
            <Box display="flex" flexDirection="row" sx={{ gap: 2 }}>
              {isLogin && (
                <>
                  <Button
                    sx={{ color: "white" }}
                    variant="contained"
                    component={Link}
                    to="/blogs"
                  >
                    Blogs
                  </Button>
                  <Button
                    sx={{ color: "white" }}
                    variant="contained"
                    component={Link}
                    to="/my-blogs"
                  >
                    My Blogs
                  </Button>
                  <Button
                    sx={{ color: "white" }}
                    variant="contained"
                    component={Link}
                    to="/create-blog"
                  >
                    Create Blog
                  </Button>
                </>
              )}
              {!isLogin && (
                <>
                  <Button
                    sx={{ color: "white" }}
                    variant="contained"
                    component={Link}
                    to="/login"
                  >
                    Login
                  </Button>
                  <Button
                    sx={{ color: "white" }}
                    variant="contained"
                    component={Link}
                    to="/register"
                  >
                    Register
                  </Button>
                </>
              )}
              {isLogin && (
                <Button
                  onClick={handleLogout}
                  variant="contained"
                  sx={{ color: "white" }}
                >
                  Logout
                </Button>
              )}
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
