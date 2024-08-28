import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  AppBar,
  Toolbar,
  Button,
  Typography,
  IconButton,
  Collapse,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../redux/store";
import toast from "react-hot-toast";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../assets/logoTravelTales.png";
import "./Header.css";

const Header = () => {
  const isLogin =
    useSelector((state) => state.isLogin) || localStorage.getItem("userId");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

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

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <AppBar position="sticky" className="appBar">
        <Toolbar className="toolbar">
          <IconButton edge="start" className="logoButton" component={Link} to="/">
            <img src={logo} alt="Logo" className="logo" />
          </IconButton>
          <Typography variant="h4" className="headerTitle">
            Unveiling the World's Wonders Through Captivating Blogs
          </Typography>
          <Box className="navLinks">
            {isLogin && (
              <>
                <Button
                  sx={{ margin: 1, color: "white" }}
                  variant="contained"
                  component={Link}
                  to="/blogs"
                >
                  Blogs
                </Button>
                <Button
                  sx={{ margin: 1, color: "white" }}
                  variant="contained"
                  component={Link}
                  to="/my-blogs"
                >
                  My Blogs
                </Button>
                <Button
                  sx={{ margin: 1, color: "white" }}
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
                  sx={{ margin: 1, color: "white" }}
                  variant="contained"
                  component={Link}
                  to="/login"
                >
                  Login
                </Button>
                <Button
                  sx={{ margin: 1, color: "white" }}
                  variant="contained"
                  component={Link}
                  to="/register"
                >
                  Register
                </Button>
              </>
            )}
          </Box>
          <IconButton
            edge="end"
            color="inherit"
            onClick={toggleMenu}
            className="menuIcon"
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
        <Collapse in={menuOpen} timeout="auto" unmountOnExit className="collapseMenu">
          <Box className="collapsedNav">
            {isLogin && (
              <>
                <Button
                  sx={{ margin: 1, color: "white" }}
                  variant="contained"
                  component={Link}
                  to="/blogs"
                >
                  Blogs
                </Button>
                <Button
                  sx={{ margin: 1, color: "white" }}
                  variant="contained"
                  component={Link}
                  to="/my-blogs"
                >
                  My Blogs
                </Button>
                <Button
                  sx={{ margin: 1, color: "white" }}
                  variant="contained"
                  component={Link}
                  to="/create-blog"
                >
                  Create Blog
                </Button>
                <Button
                  onClick={handleLogout}
                  variant="contained"
                  sx={{ margin: 1, color: "white" }}
                >
                  Logout
                </Button>
              </>
            )}
            {!isLogin && (
              <>
                <Button
                  sx={{ margin: 1, color: "white" }}
                  variant="contained"
                  component={Link}
                  to="/login"
                >
                  Login
                </Button>
                <Button
                  sx={{ margin: 1, color: "white" }}
                  variant="contained"
                  component={Link}
                  to="/register"
                >
                  Register
                </Button>
              </>
            )}
          </Box>
        </Collapse>
      </AppBar>
    </>
  );
};

export default Header;
