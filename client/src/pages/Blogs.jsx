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
  }, []);   /*Empty dependency array [] in useEffect() hook means getAllBlogs() will be called only when blogs gets mounted (means when it is rendered first time)
            It will not rerun until blogs is component is mounted again and again*/  
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
