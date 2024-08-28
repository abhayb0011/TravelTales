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
  ListItemText,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../redux/store";
import toast from "react-hot-toast";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../assets/logoTravelTales.png";
import "./header.css";

const Header = () => {
  const isLogin =
    useSelector((state) => state.isLogin) || localStorage.getItem("userId");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleLogout = () => {
    try {
      dispatch(authActions.logout());
      toast.success("Logout Successfully");
      navigate("/login");
      localStorage.clear();
    } catch (error) {
      console.log(error);
    }
  };

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  //I have created a drawer here because if screen size is less then header will not be fully displayed
  const drawerItems = (
    <List>
      {isLogin ? (
        <>
          <ListItem Button component={Link} to="/blogs">
            <ListItemText primary="Blogs" />
          </ListItem>
          <ListItem Button component={Link} to="/my-blogs">
            <ListItemText primary="My Blogs" />
          </ListItem>
          <ListItem Button component={Link} to="/create-blog">
            <ListItemText primary="Create Blog" />
          </ListItem>
          <ListItem Button onClick={handleLogout}>
            <ListItemText primary="Logout" />
          </ListItem>
        </>
      ) : (
        <>
          <ListItem Button component={Link} to="/login">
            <ListItemText primary="Login" />
          </ListItem>
          <ListItem Button component={Link} to="/register">
            <ListItemText primary="Register" />
          </ListItem>
        </>
      )}
    </List>
  );

  return (
    <>
      <AppBar position="sticky" className="appBar">
        <Toolbar className="toolbar">
          <IconButton edge="start" className="logoButton" component={Link} to="/">
            <img src={logo} alt="Logo" className="logo" />
          </IconButton>
          <Typography variant="h5" className="headerTitle">
            Unveiling the World's Wonders Through Captivating Blogs
          </Typography>
          <IconButton
            color="inherit"
            edge="end"
            onClick={toggleDrawer(true)}
            className="menuIcon"
          >
            <MenuIcon />
          </IconButton>
          <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
            <Box
              sx={{ width: 250 }}
              role="presentation"
              onClick={toggleDrawer(false)}
              onKeyDown={toggleDrawer(false)}
            >
              {drawerItems}
            </Box>
          </Drawer>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
