import {
  Box,
  Button,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Paper,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

import HeroImage from "../../static/HeroImage.jpg";

const Contactmui = () => {
  return (
    <Paper
    sx={{
        padding:"32px"
    
    }} elevation={8}>
      <Container>
        <Box
          sx={{
            height: 600,
            width: "100%",
            background: "#007bb2",
            display: { xs: 100, sm: 200, md:300 },
            justifyContent:"center"
          }}
        >
          <Stack  direction={{xs:"column", sm:"column", md:"row"}} spacing={{xs:"1",sm:"2" ,md:"4"}}>
            <Box
              sx={{

                height: 600,
                width: "50%",
                display: { xs: 100, sm: 200, md:300 }
              }}
            >
              <Box
                sx={{
                  backgroundImage: `url(${HeroImage})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  height: 600,
                  width: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                  display: "flex",
                  opacity: "0.8",
          
                }}
              >
                <Box
                  sx={{
                    width: { xs: "100%", sm: "50%", md: "40%" },
                    padding: { xs: "2", sm: "3", md: "20" },
                    display: { xs: 100, sm: 200, md:300 }
                  }}
                >
                  <Box sx={{ background: "white", opacity: "0.8" }}>
                    <Typography
                      variant="h4"
                      color="tomato"
                      align="center"
                      pt={8}
                    >
                      CONTACT US
                    </Typography>
                    <Typography
                      variant="h6"
                      color="tomato"
                      textAlign={"center"}
                    >
                      We Are Here for you
                    </Typography>
                    <Typography
                      variant="body1"
                      color="tomato"
                      align={"center"}
                      pb={8}
                    >
                      How can we help you!!
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                height: 600,
                width: "50%",
                background: "#ffa733",
                justifyContent: "center",
                display: { xs: 100, sm: 200, md:300 }
              }}
            >
              <Typography variant="h4" align="center" margin={1} color={"black"} ml={2} mt={2}>
                CONTACT US
              </Typography>
              <Stack  direction={{xs:"column", sm:"column", md:"row"}} spacing={{xs:"1",sm:"2" ,md:"4"}} ml={6}>
                <TextField
                  id="outlined-basic"
                  color="secondary"
                  label="First Name:-"
                  variant="outlined"
                />
                <TextField
                  id="outlined-basic"
                  color="secondary"
                  label="Last Name:- "
                  variant="outlined"
                />
              </Stack>
              <Stack  direction={{xs:"column", sm:"column", md:"row"}} spacing={{xs:"1",sm:"2" ,md:"4"}} ml={6}>
                <TextField
                  id="outlined-basic"
                  color="secondary"
                  label="Enter Your Email:-"
                  variant="outlined"
                />
                <TextField
                  id="outlined-basic"
                  color="secondary"
                  label="Register Mobile No:-"
                  variant="outlined"
                />
              </Stack>
              <Stack  direction={{xs:"column", sm:"column", md:"row"}} spacing={{xs:"1",sm:"2" ,md:"4"}}  ml={6}>
                <FormControl>
                  <FormLabel id="demo-row-radio-buttons-group-label">
                    Gender
                  </FormLabel>
                  <RadioGroup

                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel
                      value="female"
                      control={<Radio
                        sx={{
                            color:"default"
                        }} />}
                      label="Female"
                    />
                    <FormControlLabel
                      value="male"
                      control={<Radio />}
                      label="Male"
                    />
                    <FormControlLabel
                      value="other"
                      control={<Radio />}
                      label="Other"
                    />
                  </RadioGroup>
                </FormControl>
              </Stack>
              <Stack  direction={{xs:"column", sm:"column", md:"row"}} spacing={{xs:"1",sm:"2" ,md:"4"}} ml={6}>
                <TextField
                  id="outlined-basic"
                  color="secondary"
                  label="Enter Your Message:-"
                  variant="outlined"
                />
                </Stack>
              <Box
              sx={{
                display:"float",
                margin:"30px",
                padding:"30px",
                float:"right" 
              }}>
                     <Button  size="small"variant="contained">Enter Your Complaint</Button>
              </Box>
            </Box>
          </Stack>
        </Box>
      </Container>
    </Paper>
  );
};

export default Contactmui;
