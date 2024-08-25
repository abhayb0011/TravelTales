import React from "react";
import {
  Box,
  Typography,
  Container,
  Paper,
} from "@mui/material";

const TermsAndConditions = () => {
  return (
    <Container maxWidth="md">
      <Paper elevation={3} sx={{ padding: 3, borderRadius: 2 }}>
        <Box mb={4}>
          <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold', color: '#333' }}>
            Terms and Conditions
          </Typography>
          <Typography variant="body1" paragraph sx={{ mb: 2, color: '#555' }}>
            Welcome to our website. These terms and conditions outline the rules and regulations for the use of our website.
          </Typography>
          <Typography variant="body1" paragraph sx={{ mb: 2, color: '#555' }}>
            By accessing this website, we assume you accept these terms and conditions in full. Do not continue to use the website if you do not accept all of the terms and conditions stated on this page.
          </Typography>
          <Typography variant="h6" sx={{ mt: 4, fontWeight: 'bold', color: '#333' }}>
            1. License to Use Website
          </Typography>
          <Typography variant="body1" paragraph sx={{ mb: 2, color: '#555' }}>
            Unless otherwise stated, we own the intellectual property rights for all material on the website. All intellectual property rights are reserved. You may view and print pages from the website for your own personal use, subject to the restrictions set out below and elsewhere in these terms and conditions.
          </Typography>
          <Typography variant="h6" sx={{ mt: 4, fontWeight: 'bold', color: '#333' }}>
            2. Acceptable Use
          </Typography>
          <Typography variant="body1" paragraph sx={{ mb: 2, color: '#555' }}>
            You must not use this website in any way that causes, or may cause, damage to the website or impairment of the availability or accessibility of the website; or in any way which is unlawful, illegal, fraudulent, or harmful.
          </Typography>
          <Typography variant="h6" sx={{ mt: 4, fontWeight: 'bold', color: '#333' }}>
            3. Limitation of Liability
          </Typography>
          <Typography variant="body1" paragraph sx={{ mb: 2, color: '#555' }}>
            We will not be liable for any indirect, special, or consequential loss or damage arising out of or in connection with the use of this website or the information, content, materials, or products included on this website.
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default TermsAndConditions;
