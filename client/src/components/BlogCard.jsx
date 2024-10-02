import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";             //for displaying notifications
import axios from "axios";

const baseURL = import.meta.env.VITE_BASE_URL;

export default function BlogCard({
  title,
  description,
  image,
  username,
  time,
  id,
  isUser,
}) {
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate(`/blog-details/${id}`);
  };

  const handleDelete = async () => {
    try {
      const { data } = await axios.delete(`${baseURL}/api/v1/blog/delete-blog/${id}`);
      if (data?.success) {
        toast.success("Blog Deleted");
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Card
      sx={{
        width: "80%",
        margin: "auto",
        mt: 2,
        padding: 2,
        boxShadow: "5px 5px 10px #ccc",
        ":hover": {
          boxShadow: "10px 10px 20px #ccc",
        },
      }}
    >
      <Box display="flex" alignItems="center" justifyContent="space-between">
      <Box display="flex" alignItems="center">
        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
          {username ? username[0].toUpperCase() : "U"}
        </Avatar>
        <Box ml={1}> {/* Margin-left to add space between avatar and text */}
          {username || "Unknown User"}
        </Box>
      </Box>

      {isUser && (                                        //We will show edit and delete icons only if user is logged in
        <Box display="flex" alignItems="center">
          <IconButton onClick={handleEdit} sx={{ marginLeft: 1 }}>
            <ModeEditIcon color="info" />
          </IconButton>
          <IconButton onClick={handleDelete} sx={{ marginLeft: 1 }}>
            <DeleteIcon color="error" />
          </IconButton>
        </Box>
      )}
      </Box>
      <br />
      <CardMedia component="img" height={{sx:'100rem',sm:'200rem',md:'500rem'}} image={image} alt="Blog image" />
      <CardContent>
        <Typography variant="h4" sx={{ textAlign: "center" }}>
          {title}
        </Typography>
        <Typography
          sx={{
            textAlign: "center",
            fontFamily: "EB Garamond, Arial",
            fontSize: "20px",
          }}
        >
          {description}
        </Typography>
        <Box display="flex" justifyContent="flex-end">
          <Typography sx={{ fontSize: "16px" }}>
            {new Date(time).toLocaleDateString()}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
