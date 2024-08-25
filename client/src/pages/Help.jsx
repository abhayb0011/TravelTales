import React from "react";
import { Box, Typography, Container, Paper } from "@mui/material";

const Help = () => {
  return (
    <Container maxWidth="md">
      <Paper elevation={3} sx={{ padding: 3, borderRadius: 2 }}>
        <Box mb={4}>
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            sx={{ fontWeight: "bold", color: "#333" }}
          >
            How to Use Our Website
          </Typography>
          <Typography variant="body1" paragraph sx={{ mb: 2, color: "#555" }}>
            Welcome to our help page! Here’s a quick guide on how to navigate
            and use the features of our website effectively.
          </Typography>
          <Typography
            variant="h6"
            sx={{ mt: 4, fontWeight: "bold", color: "#333" }}
          >
            1. Navigating the Website
          </Typography>
          <Typography variant="body1" paragraph sx={{ mb: 2, color: "#555" }}>
            To navigate our website, use the navigation bar located at the top
            of the page. This bar includes links to key sections such as
            Register and Login. If you are a new user, please start by
            registering an account. Once you’ve completed registration, you can
            log in to access your account. If you are an existing user, simply
            log in to get started. After logging in, you will be able to view
            all available blogs, access your own blogs, or create a new blog.
          </Typography>
          <Typography
            variant="h6"
            sx={{ mt: 4, fontWeight: "bold", color: "#333" }}
          >
            2. Creating and Managing Blogs
          </Typography>
          <Typography variant="body1" paragraph sx={{ mb: 2, color: "#555" }}>
            To create a new blog post, navigate to the "Create Blog" section
            from the navigation menu. You can manage your existing blogs in the
            "My Blogs" section.
          </Typography>
          <Typography
            variant="h6"
            sx={{ mt: 4, fontWeight: "bold", color: "#333" }}
          >
            3. Contacting Us
          </Typography>
          <Typography variant="body1" paragraph sx={{ mb: 2, color: "#555" }}>
            If you have any questions or need further assistance, you can reach
            us via the "Contact Us" page where you can find our email and phone
            contact details.
          </Typography>
          <Typography
            variant="h6"
            sx={{ mt: 4, fontWeight: "bold", color: "#333" }}
          >
            4. Accessing Terms and Conditions
          </Typography>
          <Typography variant="body1" paragraph sx={{ mb: 2, color: "#555" }}>
            For more information about our terms and conditions, please visit
            the "Terms and Conditions" page linked in the footer of the website.
          </Typography>
          <Typography variant="body1" paragraph sx={{ mb: 2, color: "#555" }}>
            We hope this guide helps you navigate our website with ease. If you
            have any additional questions, feel free to reach out to our support
            team.
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default Help;
