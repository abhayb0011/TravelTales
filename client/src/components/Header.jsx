import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  AppBar,
  Toolbar,
  Button,
  Typography,
  Tabs,
  Tab,
  IconButton,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../redux/store";
import toast from "react-hot-toast";
import logo from "../assets/logoTravelTales.png";

const Header = () => {
  // global state
  const isLogin =
    useSelector((state) => state.isLogin) || localStorage.getItem("userId");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // state
  const [value, setValue] = useState(null);

  // logout
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

  return (
    <>
      <AppBar position="sticky" style={{ backgroundColor: "#424242" }}>
        <Toolbar>
          <IconButton edge="start" sx={{ p: 0, mr: 10 }}>
            <img
              src={logo}
              alt="Logo"
              style={{
                height: "10rem",
                width: "auto",
              }}
            />
          </IconButton>
          <Typography
            variant="h4"
            sx={{
              flexGrow: 1,
              fontFamily: "Dancing Script, Arial",
              fontWeight: 700,
              fontSize: 32,
            }}
          >
            Unveiling the World's Wonders Through Captivating Blogs
          </Typography>
          {isLogin && (
            <Box display={"flex"} marginLeft="auto" marginRight={"auto"}>
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
            </Box>
          )}
          <Box display={"flex"} marginLeft="auto">
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
                  component={Link}
                  variant="contained"
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
                sx={{ margin: 1, color: "white" }}
              >
                Logout
              </Button>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
