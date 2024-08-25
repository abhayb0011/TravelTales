import React from "react";
import {
  Box,
  Typography,
  Container,
  Paper,
} from "@mui/material";

const ContactUs = () => {
  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ padding: 3, borderRadius: 2 }}>
        <Box my={4}>
          <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold', color: '#333' }}>
            Contact Us
          </Typography>
          <Typography variant="body1" paragraph sx={{ mb: 2, color: '#555' }}>
            We would love to hear from you! You can reach us through the following channels:
          </Typography>
          <Typography variant="body1" paragraph sx={{ mb: 1, color: '#333' }}>
            <strong>Email: </strong> abhayb0011@gmail.com
          </Typography>
          <Typography variant="body1" paragraph sx={{ mb: 1, color: '#333' }}>
            <strong>Phone: </strong> 9057516298
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default ContactUs;
