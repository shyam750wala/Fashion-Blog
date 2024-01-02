import { Box, Button, FormControl, FormControlLabel, FormLabel, Grid, Paper, Radio, RadioGroup, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import ContactPageIcon from '@mui/icons-material/ContactPage';
import ChatIcon from '@mui/icons-material/Chat';
import EmailIcon from '@mui/icons-material/Email';

const Mcontact = () => {
  return (
    <Paper
      sx={{
        padding: "32px",
      }}
    >
      <Box
        sx={{
          background: "#2c387e",
          width: "100%",
          height: 800,
        }}
      >
        <Box
        sx={{
            background:"pink"
        }}>
        <Grid
          container
          my={2}
          spacing={4}
          sx={{ display: { xs: "block", sm: "block", md: "flex" } }}
        >
          <Grid item xs={3} rowSpacing={2} sx={{ display: { xs: 100, sm: 200, md: 300 } }}>
            <Box
              p={2}
              align="center"
              sx={{ display: { xs: 100, sm: 200, md: 300 } }}
            >
              <ContactPageIcon fontSize="large" />
              <Typography variant="h5">By Phone</Typography>
              <Typography variant="h6">INDIA:</Typography>
              <Typography variant="body1">+91 9265708183</Typography>
              <Typography variant="h6" mt={2}>
                INTERNATIONAL NO:
              </Typography>
              <Typography variant="body1">1-604-637-0780</Typography>
            </Box>
          </Grid>
          <Grid item xs={3}  rowSpacing={2} sx={{ display: { xs: 100, sm: 200, md: 300 } }}>
            <Box
              p={2}
              align="center"
              sx={{ display: { xs: 100, sm: 200, md: 300 } }}
            >
              <EmailIcon fontSize="large" />
              <Typography variant="h5">START A NEW CASE</Typography>
              <Typography variant="body1">Just Send Your Question</Typography>
              <Typography variant="body1">or concern by starting a</Typography>
              <Typography variant="body1">new case and we will give</Typography>
              <Typography variant="body1">you the help you need</Typography>
              <Button variant="contained" color="secondary">
                Start Here
              </Button>
            </Box>
          </Grid>
          <Grid item xs={3} rowSpacing={1} sx={{ display: { xs: 100, sm: 200, md: 300 } }}>
            <Box
              p={2}
              align="center"
              sx={{ display: { xs: 100, sm: 200, md: 300 } }}
            >
              <ChatIcon fontSize="large" color="tomato" />
              <Typography variant="h5">Live Chat</Typography>
              <Typography variant="body1">Chat with member of our</Typography>
              <Typography variant="body1">in-House Train</Typography>
              <Button variant="contained" size="medium" color="secondary">
                Start chat
              </Button>
            </Box>
          </Grid>
          <Grid item xs={3} rowSpacing={1} sx={{ display: { xs: 100, sm: 200, md: 300 } }}>
            <Box
              p={2}
              align="center"
              sx={{ display: { xs: 100, sm: 200, md: 300 } }}
            >
              <ChatIcon fontSize="large" color="tomato" />
              <Typography variant="h5">Live Chat</Typography>
              <Typography variant="body1">Chat with member of our</Typography>
              <Typography variant="body1">in-House Train</Typography>
              <Button variant="contained" size="medium" color="secondary">
                Start chat
              </Button>
            </Box>
          </Grid>
        </Grid>
        </Box>
        <Box
        sx={{
            display:"flex",
            justifyContent:'center',
            alignItems:"center"
        }}>
            <Typography variant="h4" fontWeight={600} gutterBottom={2}>
                CONTACT US
            </Typography>
        </Box>
        <Box
        sx={{
            width:"100%",
            background:"#03a9f4"
        }}>
              <Stack direction="row" mt={5} spacing={2} ml={6}>
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
              <Stack direction="row" mt={4} spacing={2} ml={6}>
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
        <Stack direction="row" mt={4} spacing={2} ml={6}>
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
              <Stack direction="row" mt={4} spacing={2} ml={6}>
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
                float:"center" 
              }}>
                     <Button  size="small"variant="contained">Enter Your Complaint</Button>
              </Box>
        </Box>
      </Box>
    </Paper>
  );
};

export default Mcontact;
