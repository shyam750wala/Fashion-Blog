import { Box, CardContent, CardMedia, Typography,Link,Stack} from '@mui/material'

import React from 'react'
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';


const Card = ({CardImage}) => {
  return (
    <Box>
                  <CardMedia
        component="img"
        alt="green iguana"
        height="100%"
        image={CardImage}
      />
      <CardContent>
        <Stack direction="row" spacing={2} flex={2}>
        <Link href="details" variant='h6'  align="center" underline='none' color={"inherit"} justifyContent={"center"}>
          Perfume
        </Link>
        <ArrowCircleLeftIcon/>
        <span color='red'>
          Click Here to More Details
        </span>
        </Stack>
        <Typography gutterBottom variant="h5"  component="div" >
          Wearing this will make everyone love you
        </Typography>
        <Typography gutterBottom variant="body1" component="div" >
          it's women love
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
    </Box>
  )
}

export default Card