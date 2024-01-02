import { Box, Button, Grid, Paper, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import ContactPageIcon from '@mui/icons-material/ContactPage';
import ChatIcon from '@mui/icons-material/Chat';
import EmailIcon from '@mui/icons-material/Email';

const Muiicontact = () => {
  return (
    <Paper sx={{
        padding:"32px"
    }}>
        <Box sx={{
        background:"#ffc107",
        display: { xs: 100, sm: 200, md:300 } 
    }}
    >   
         <Box  sx={{ display: { xs: 100, sm: 200, md:300 } }}>
        <Typography variant="h3" align='center' sx={{ display: { xs: 100, sm: 200, md:300 } }} >
            CONTACT US
        </Typography>
        <Grid container my={2}sx={{ display: { xs: "block", sm: "block", md: "flex" } }}>
            <Grid item xs={4}sx={{ display: { xs: 100, sm: 200, md:300 } }}>
                <Box p={2} align="center"  sx={{ display: { xs: 100, sm: 200, md:300 } }}>
                    <ContactPageIcon fontSize='large' />
                    <Typography variant='h5'>
                        By Phone
                    </Typography>
                    <Typography variant='h6'>
                        INDIA:
                    </Typography>
                    <Typography variant='body1'>
                        +91 9265708183
                    </Typography>
                    <Typography variant='h6' mt={2}>
                        INTERNATIONAL NO:
                    </Typography>
                    <Typography variant='body1' >
                        1-604-637-0780
                    </Typography>
                </Box>
            </Grid>
            <Grid item xs={4} sx={{ display: { xs: 100, sm: 200, md:300 } }}>
                <Box p={2} align="center"  sx={{ display: { xs: 100, sm: 200, md:300 } }}>
                    <EmailIcon fontSize='large'/>
                   <Typography variant='h5'>
                    START A NEW CASE
                   </Typography>
                   <Typography variant='body1'>
                    Just Send Your Question
                   </Typography>
                   <Typography variant='body1'>
                    or concern by starting  a 
                   </Typography>
                   <Typography variant='body1'>
                   new case and we will give
                   </Typography>
                   <Typography  variant="body1">
                    you the help you need
                   </Typography>
                   <Button  variant="contained" color='secondary'>Start Here</Button>
                </Box>
            </Grid>
            <Grid item xs={4} sx={{ display: { xs: 100, sm: 200, md:300 } }}>
                <Box p={2} align="center"  sx={{ display: { xs: 100, sm: 200, md:300 } }}>
                   <ChatIcon fontSize='large' color='tomato'/> 
                   <Typography variant='h5'>
                        Live Chat
                   </Typography>
                   <Typography variant='body1'>
                        Chat with member of our
                   </Typography>
                   <Typography variant='body1'>
                        in-House Train
                   </Typography>
                   <Button  variant="contained" size='medium' color='secondary'>Start chat</Button>
                    </Box>
            </Grid>
        </Grid>
        <Box
          sx={{
            flexBasis:'30%',
            padding:"40px 60px",
    
          }}>
          <Typography variant="h6" color={"tomato"}>
            Status About Your Complain
          </Typography>
          <Stack mt={2} direction="column" spacing={{xs:1,sm:2,md:4}} >
          <TextField id="outlined-basic" error color="secondary" label="Enter Your Complaint No" variant="outlined"  />
          <TextField id="outlined-basic" error color="secondary" label="Enter Your Name" variant="outlined"  />
          <TextField id="outlined-basic" error label="Enter Your Address" variant="outlined"  />
          <TextField id="outlined-basic" error label="Enter Your PhoneNo" variant="outlined"  />
          <TextField id="outlined-basic"  error label="Enter Your Gmail" variant="outlined"  />
          <Button  size="small"variant="contained">Check The Status</Button>
          </Stack>
        </Box>
    </Box>
    </Box>
    </Paper>
  )
}

export default Muiicontact