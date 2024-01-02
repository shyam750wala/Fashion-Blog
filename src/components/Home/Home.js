import React from 'react'
import {Box, Container, Stack} from "@mui/material"
import Hero from '../hero/Hero'
import Category from '../category/Category'
import Recently from '../recent/Recently'
import Rightbar from '../Rightbar/Rightbar'
const Home = () => {
  return (
    <Box>
            <Hero />
            <Container>
                <Category />
                <hr />
           <Stack direction="row" spacing={8} mt={8}>
                <Box flex={3} sx={{padding:"18px,100px,100px,100px"}}>
                    <Recently />
                </Box>
                <Box flex={1}>
                    <Rightbar/>
                </Box>
            </Stack> 
            </Container>
    </Box>
  )
}

export default Home