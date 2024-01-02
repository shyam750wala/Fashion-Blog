import React from "react";
import { Box, Typography } from "@mui/material";
import HeroImage from "../../static/HeroImage.jpg"
const Hero = () => {
  return (
    <>
      <Box>
        <Typography variant="h3" align={"center"} sx={{ fontWeight: 900 }}>
          Fashion <b style={{ color: "red" }}>Blog</b>
        </Typography>
        <Typography variant="body1" align={"center"} sx={{ fontWeight: 300 }}>
          We Make You Look the better of you!
        </Typography>
        <Box
          sx={{
            backgroundImage: `url(${HeroImage})`,
            backgroundRepeat: "no-repeat",
            backgroundColor: "pink",
            backgroundAttachment:"fixed",
            backgroundPosition: "center",
            backgroundSize: "cover",
            height: 600,
            width: "100%",
            justifyContent:"center",
            display:"flex",
          }}
        >
          <Box sx={{ width: {xs:"100%",sm:"50%",md:"40%"}, padding:{xs:"2",sm:"3",md:"20"}  }}>
            <Box sx={{ background: "white", opacity: "0.8" }}>
              <Typography
                variant="h4"
                color="tomato"
                align={"center"}
                pt={8}
              >
                Trending Style
              </Typography>
              <Typography variant="h6" color="tomato" textAlign={"center"}>
                Life is Boring without Fashion!
              </Typography>
              <Typography
                variant="body1"
                color="tomato"
                align={"center"}
                pb={8}
              >
                we love to change style
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Hero;
