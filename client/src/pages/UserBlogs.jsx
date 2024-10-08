import React, { useState, useEffect } from "react";
import axios from "axios";
import BlogCard from "../components/BlogCard";
import { Box, Typography } from "@mui/material";

const baseURL = import.meta.env.VITE_BASE_URL;
let nameUser;

const UserBlogs = () => {
  const [blogs, setBlogs] = useState([]);

  // Get user blogs
  const getUserBlogs = async () => {
    try {
      const id = localStorage.getItem("userId");
      const { data } = await axios.get(`${baseURL}/api/v1/blog/user-blog/${id}`);
      if (data?.success) {
        setBlogs(data?.userBlog.blogs);
        nameUser=data.userBlog.username;
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserBlogs();
  });  /*Default behaviour of useEffect is there because dependency we are not passing. So now, getAllBlogs() will be called every time the page 
       userBlogs renders*/

  return (
    <Box>
      {
        blogs.length > 0 ? (
        blogs.map((blog) => (
          <BlogCard
            key={blog._id}
            id={blog._id}
            isUser={true}   /*In blogs page we are checking if (localStorage.id == blog.user.id) but here we are directly assigining true because my 
                            blogs icon will be only visible to logged users only while blogs which is root path will be visible to all loggedIn as 
                            well as loggedOut users */
            title={blog.title}
            description={blog.description}
            image={blog.image}
            username={nameUser}
            time={blog.createdAt}
          />
        ))
      ) : (
        <Typography variant="h6" align="center">
          You haven't created a blog
        </Typography>
      )}
    </Box>
  );
};

export default UserBlogs;
