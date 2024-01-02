import React from "react";
import { Box, Grid } from "@mui/material";
import Card from "../Card/Card";
import CardImage from "../../static/image3.jpg";
import postimg from "../../static/image1.jpg";
import advert from "../../static/image4.jpg";
import advertisment from "../../static/image5.jpg";

const Recently = () => {
  return (
    <Box>
      <Grid container rowSpacing={1} columnSpacing={{xs:1,sm:2,md:1}}>
        <Grid item>
          <Card CardImage={CardImage} />
        </Grid>
        <Grid item md={6} xs={12}>
          <Card CardImage={postimg} />
        </Grid>
        <Grid item md={6} xs={12}>
          <Card CardImage={advert} />
        </Grid>
        <Grid item md={6} xs={12}>
          <Card CardImage={advertisment} />
        </Grid>
        <Grid item md={6} xs={12}>
          <Card CardImage={CardImage} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Recently;
