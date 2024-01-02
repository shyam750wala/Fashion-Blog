import { Box, Typography } from "@mui/material";
import React from "react";

const Aboutus = () => {
  return (
    <>
      <Box sx={{ mt: 2 }}>
        <Typography gutterBottom={2} align="center" variant="h4" color={"red"}>
          Welcome To Aboutus Page
        </Typography>
      </Box>
      <Box sx={{ mt: 2 }}>
        <Typography gutterBottom={2} align="center" variant="body1">
          Welcome to our fashion blog! We are a team of fashion enthusiasts who
          are passionate about sharing our knowledge and love for fashion with
          our readers. Our goal is to provide you with the latest fashion news,
          trends, and tips to help you look and feel your best.
        </Typography>
      </Box>
      <Box sx={{ mt: 2 }}>
        <Typography gutterBottom={2} align="center" variant="body1">
          We believe that fashion is a form of self-expression and should be
          accessible to everyone, regardless of their budget or body type.
          That's why we strive to offer a diverse range of content that caters
          to all fashion lovers.
        </Typography>
      </Box>
      <Box sx={{ mt: 2 }}>
        <Typography gutterBottom={2} align="center" variant="body1">
          Our team consists of experienced writers, editors, and stylists who
          are dedicated to bringing you high-quality content that is both
          informative and inspiring. We are constantly researching and exploring
          the latest trends, attending fashion events, and interviewing industry
          experts to ensure that our content is up-to-date and relevant.
        </Typography>
      </Box>
      <Box sx={{ mt: 2 }}>
        <Typography gutterBottom={2} align="center" variant="body1">
          We also value our readers' opinions and feedback, so we encourage you
          to engage with us through comments, social media, and email. We are
          always looking for new ideas and suggestions, so don't hesitate to
          reach out to us.
        </Typography>
      </Box>
      <Box sx={{ mt: 2 }}>
        <Typography gutterBottom={2} align="center" variant="body1">
        Thank you for joining us on this fashion journey, and we hope you enjoy our blog!
        </Typography>
      </Box>
    </>
  );
};

export default Aboutus;
