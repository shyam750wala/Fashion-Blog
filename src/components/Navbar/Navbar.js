import React, { useState } from "react";
import {
  AppBar,
  InputBase,
  Toolbar,
  MenuItem,
  Menu,
  Box,
  Link,
} from "@mui/material";
import styled from "@emotion/styled";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const [open, setopen] = useState(false);
  const Styledtoolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });
  const Socialdbox = styled(Toolbar)({
    display: "flex",
    gap: 10,
  });
  const Menuboxx = styled(Toolbar)({
    display: "flex",
    gap: 30,
  });
  const Searchbox = styled(Toolbar)({
    display: "flex",
    gap: 30,
  });
  const MenuItems = [
    { Name: "Product", Link: "#" },
    { Name: "Portfolio", Link: "#" },
    { Name: "Blog", Link: "#" },
  ];
  return (
    <AppBar sx={{ background: "black" }} position={"static"}>
      <Styledtoolbar>
        <Socialdbox>
          <Link href="https://www.facebook.com/" color={"inherit"}>
          <FacebookIcon />
          </Link>
          <Link href="https://twitter.com/" color={"inherit"}>
          <TwitterIcon />
          </Link>
          <Link href="https://www.instagram.com/" color={"inherit"}>
          <InstagramIcon />
          </Link>
        </Socialdbox>
        <Menuboxx sx={{ display: { xs: "none", sm: "none", md: "flex" } }}>
        <Link href="/" color={"inherit"} underline="none">
          Home
          </Link>
          {MenuItems.map((item) => (
            <Link href="details" underline="none" color={"inherit"} sx={{ cursor: "pointer", fontSize: "14px" }}>
              {item.Name}
              
            </Link>
            
          ))}
        <Link href="contact" color={"inherit"} underline="none" sx={{cursor:"pointer",fontSize:"14px"}}>
        Contact
        </Link>
        <Link href="muicontact" color={"inherit"} underline="none" sx={{cursor:"pointer",fontSize:"14px"}}>
        Mui Contact
        </Link>
        <Link href="contactmui" color={"inherit"} underline="none" sx={{cursor:"pointer",fontSize:"14px"}}>
        Contact Mui
        </Link>
        <Link href="mcontact" color={"inherit"} underline="none" sx={{cursor:"pointer",fontSize:"14px"}}>
        M Contact
        </Link>
        </Menuboxx>
      
        <Searchbox>
          <InputBase placeholder="Search...." sx={{ color: "white" }} />
        </Searchbox>
        <MenuIcon
          onClick={() => setopen(!open)}
          sx={{
            color: "white",
            display: { xs: "block", sm: "block", md: "none" },
            cursor: "pointer",
          }}
        />
      </Styledtoolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={() => setopen(!open)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <Box sx={{ width: 350, height: "90vh" }}>
          {MenuItems.map((item) => (
            <MenuItem sx={{ cursor: "pointer", fontSize: "14px" }}>
              {item.Name}
            </MenuItem>
          ))}
        </Box>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
