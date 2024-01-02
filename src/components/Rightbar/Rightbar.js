import {
  Avatar,
  List,
  ListItem,
  ListItemText,
  Typography,
  Box,
  Divider,
  Link,
} from "@mui/material";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import postimg from "../../static/image1.jpg";
import advert from "../../static/image4.jpg";
import advertisment from "../../static/image5.jpg";
import React from "react";

const Rightbar = () => {
  return (
    <Box>
      <Typography align="center" bgcolor={"black"} color={"white"}>
        {" "}
        Most Popular
      </Typography>
      <List
        sx={{
          width: "100%",
          height: "100%",
          maxWidth: 360,
          bgcolor: "background.paper",
        }}
      >
        <ListItem alignItems="flex-end">
          <ListItemAvatar>
            <Avatar
              sx={{ height: 80, width: 80 }}
              variant="square"
              alt="Remy Sharp"
              src={postimg}
            />
          </ListItemAvatar>
          <ListItemText
            sx={{ padding: 2 }}
            secondary={" — I'll be in your neighborhood doing errands this…"}
          />
        </ListItem>
        <ListItem alignItems="flex-end">
          <ListItemAvatar>
            <Avatar
              sx={{ height: 80, width: 80 }}
              variant="square"
              alt="Remy Sharp"
              src={advert}
            />
          </ListItemAvatar>
          <ListItemText
            sx={{ padding: 2 }}
            secondary={" — I'll be in your neighborhood doing errands this…"}
          />
        </ListItem>
        <ListItem alignItems="flex-end">
          <ListItemAvatar>
            <Avatar
              sx={{ height: 80, width: 80 }}
              variant="square"
              alt="Remy Sharp"
              src={advertisment}
            />
          </ListItemAvatar>
          <ListItemText
            sx={{ padding: 2 }}
            secondary={" — I'll be in your neighborhood doing errands this…"}
          />
        </ListItem>
        <Divider variant="insert" component={"li"} />
      </List>
      <Typography align="center" bgcolor={"black"} color={"white"}>
        {" "}
        About Us
      </Typography>
      <Box sx={{ mt: 2 }}>
        <Typography align="center" variant="body1">
          Welcome to our fashion blog! We are a team of fashion enthusiasts who
          are passionate about sharing our knowledge and love for fashion with
          our readers. Our goal is to provide you with the latest fashion news,
          trends, and tips to help you look and feel your best.
        </Typography>
        <Link  href="about">
        Learn more
        </Link>
      </Box>
    </Box>
  );
};

export default Rightbar;
