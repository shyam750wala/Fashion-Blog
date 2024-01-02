import React from "react";
import { Box, Stack, styled, Typography } from "@mui/material";
import Kids from "../../static/kids.jpg";
import men from "../../static/men.jpg";
import women from "../../static/women.jpg";
const Category = () => {
  const Stylebox = styled(Box)({
    height: 200,
    width: "100%",
    cursor: "pointer",
    backgroundRepeat:"no-repeat",
    backgroundPosition:"center center",
    backgroundSize:"cover"

  });
  const Styletypography = styled(Typography)({
    margin: "25% 50px 25% 50px",
    background: "white",
    opacity: "0.8",
  });

  return (
    <Box>
      <Stack direction={{xs:"column", sm:"row", md:"row"}} spacing={{xs:"1",sm:"2" ,md:"4"}} mt={5}>
        <Stylebox sx={{ backgroundImage: `url(${Kids})` }}>
          <Styletypography align="center" variant="h3">
            Kids
          </Styletypography>
        </Stylebox>
        <Stylebox sx={{ backgroundImage: `url(${men})` }}>
          <Styletypography align="center" variant="h3">
            Men
          </Styletypography>
        </Stylebox>
        <Stylebox sx={{ backgroundImage: `url(${women})` }}>
          <Styletypography align="center" variant="h3">
            Women
          </Styletypography>
        </Stylebox>
      </Stack>
    </Box>
  );
};

export default Category;
