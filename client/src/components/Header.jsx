import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  AppBar,
  Toolbar,
  Button,
  Typography,
  IconButton,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../redux/store";
import toast from "react-hot-toast";
import logo from "../assets/logoTravelTales.png";

const Header = () => {
  const isLogin =
    useSelector((state) => state.isLogin) || localStorage.getItem("userId");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [value, setValue] = useState(null);

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
    <AppBar position="sticky" sx={{ backgroundColor: "#424242" }}>
      <Toolbar
        sx={{
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "center",
          p: 2,
        }}
      >
        <IconButton
          edge="start"
          sx={{
            p: 0,
            mb: { xs: 2, sm: 0 },
            mr: { xs: 0, sm: 3 }, // Adjust margin-right for larger screens
          }}
        >
          <img
            src={logo}
            alt="Logo"
            style={{ height: "10rem", width: "auto" }}
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
          }}
        >
          Unveiling the World's Wonders Through Captivating Blogs
        </Typography>
        {isLogin && (
          <Box
            display="flex"
            flexDirection={{ xs: "column", sm: "row" }}
            marginLeft="auto"
            sx={{
              gap: { xs: 1, sm: 2 }, // Adjust gap based on screen size
            }}
          >
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
          </Box>
        )}
        <Box
          display="flex"
          flexDirection={{ xs: "column", sm: "row" }}
          marginLeft="auto"
          sx={{
            gap: { xs: 1, sm: 2 }, // Adjust gap based on screen size
          }}
        >
          {!isLogin ? (
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
          ) : (
            <Button
              onClick={handleLogout}
              variant="contained"
              sx={{ color: "white" }}
            >
              Logout
            </Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
