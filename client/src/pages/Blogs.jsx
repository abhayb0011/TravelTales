import React, { useState, useEffect } from "react";
import axios from "axios";
import BlogCard from "../components/BlogCard";

const baseURL = import.meta.env.VITE_BASE_URL;

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  // Get blogs
  const getAllBlogs = async () => {
    try {
      const { data } = await axios.get(`${baseURL}/api/v1/blog/all-blog`);
      if (data?.success) {
        setBlogs(data?.blogs);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllBlogs();
  });   /*Default behaviour of useEffect is there because dependency we are not passing. So now, getAllBlogs() will be called every time the page 
        blogs renders*/  
  return (
    <div>
      {blogs &&
        blogs.map((blog) => (
          <BlogCard
            key={blog?._id}
            id={blog?._id}
            isUser={localStorage.getItem("userId") === blog?.user?._id}
            title={blog?.title}
            description={blog?.description}
            image={blog?.image}
            username={blog?.user?.username}
            time={blog.createdAt}
          />
        ))}
    </div>
  );
};

export default Blogs;
