import { Box, Stack, Typography } from '@mui/material'
import React from 'react'


const Footer = () => {
  
  return (
    <Box sx={{background:'black',height:'300px',
     display: { xs: 100, sm: 200, md:300 } }}
    >
      <Stack direction={{xs:"row",md:"row"}} p={7} spacing={{xs:1,sm:2,md:4}}>
        <Box  sx={{ display: { xs: 100, sm: 200, md:300 } }} flex={1}>
          <Typography color={"white"} variant="h6" align='center'>
              Contact us
          </Typography>
          <Typography color={"white"} align='center'>
              abc@gmail.com
          </Typography>
          <Typography color={"white"} align='center'>
              +91 9265708589
          </Typography>
        </Box>
        <Box  sx={{ display: { xs: 100, sm: 200, md:300 } }} >
        <Typography color={"white"}  variant={"h6"}align='center'>
              Data Policy
          </Typography>
        <Typography color={"white"} align='center'>
              Data Security
          </Typography>
        <Typography color={"white"} align='center'>
              Cookies
          </Typography>
        </Box>
        <Box  sx={{ display: { xs: 100, sm: 200, md:300 } }} flex={1} >
        <Typography color={"white"} variant='h6' align='center'>
              CateGory
          </Typography>
        <Typography color={"white"} align='center'>
              Men
          </Typography>
        <Typography color={"white"} align='center'>
              women
          </Typography>
        <Typography color={"white"} align='center'>
              Kids
          </Typography>
        </Box>
        {/* <Box  sx={{ display: { xs: 100, sm: 200, md:300 } }} flex={1}>
        <Typography color={"white"} variant='h6' align='center'>
              Follow us
          </Typography>
        <Typography color={"white"} align='center'>
              Instagram
          </Typography>
        <Typography color={"white"} align='center'>
              Twitter
          </Typography>
        <Typography color={"white"} align='center'>
              FaceBook
          </Typography>
        </Box> */}
        </Stack>
    </Box>
  )
}

export default Footer