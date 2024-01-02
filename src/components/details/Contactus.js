import { Box, Button, Paper, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import AddLocationIcon from '@mui/icons-material/AddLocation';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const Contactus = () => {
  return (
    <>
     <Paper sx={{
        padding:"32px"
    }}>
    <Box 
    sx={{
      background:"gray"
    }}>
      <Box
      // sx={{
      //   width: "80%",
      //   margin: "50px auto",

      // }}
      >
        <Typography   variant="h4" align="center" >CONTACT US</Typography>
        <Typography align="center" variant="body1" sx={{ display: { xs: "block", sm: "block", md: "flex" } }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto amet,
          repellat perspiciatis excepturi quisquam rem optio quasi maiores
          distinctio iure praesentium architecto ducimus et sit, deleniti totam.
          Repudiandae, dolorem ducimus?
        </Typography>
        <Box sx={{
          background:'white',
          display:'flex'
        }}>
          <Box
          sx={{
            flexBasis:'60%',
            padding:"40px 60px",
            background:"pink",
            color:"white"
          }}>
          <Typography variant="h6" color={"tomato"}>
            Sent your request
          </Typography>
          <Stack mt={2} direction="column" spacing={2}>
          <TextField id="outlined-basic" error color="secondary" label="Enter Your Name" variant="outlined"  />
          <TextField id="outlined-basic" error label="Enter Your Address" variant="outlined"  />
          <TextField id="outlined-basic" error label="Enter Your PhoneNo" variant="outlined"  />
          <TextField id="outlined-basic"  error label="Enter Your Gmail" variant="outlined"  />
          <TextField id="outlined-basic"  error label="Enter Your Query" variant="outlined"  />
          <Button  size="small"variant="contained">Submit</Button>
          </Stack>
        </Box>
        <Box
         sx={{
          flexBasis:'60%',
          padding:"40px 60px",
          background:"#ff9800",
          color:"white"
        }}>
            <Typography variant="h6">
              Reach us
            </Typography>
            <Stack direction="column">
              
              <Typography  variant="body1" mt={5}><AddLocationIcon padding={2}/>Our Office:-</Typography>
              <Typography>j-128 Laxminagar Socity ,Bamroli Road</Typography>
              <Typography   variant="body1" mt={5}><ContactPageIcon padding={2}/>Our Contact No:-</Typography>
              <Typography>+91 9265708183</Typography>
              <Typography   variant="body1" mt={5}><AccessTimeIcon />Our Office Hours:-</Typography>
              <Stack direction="column">
              <Typography>Monday to Friday. 8am to 6pm</Typography>
              </Stack>
              <Stack direction="column">
              <Typography>Monday to Friday. 10am to 4pm</Typography>
              </Stack>
            </Stack>
        </Box>
        </Box>
      </Box>
      </Box>
      </Paper>
    </>
  );
};

export default Contactus;
