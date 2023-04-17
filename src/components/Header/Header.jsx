import React, { useState } from "react";
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
  Button,
  Menu,
  MenuItem
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { NavLink, Link } from "react-router-dom";
import "./header.css";
import UpperHeader from "./UpperHeader";
const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
   const [anchorEl1, setAnchorEl1] = React.useState(null);
   const [anchorEl2, setAnchorEl2] = React.useState(null);
   const [anchorEl3, setAnchorEl3] = React.useState(null);
  const open = Boolean(anchorEl1);
  const open2 = Boolean(anchorEl2);
  const open3 = Boolean(anchorEl3);
  const handleClick = (event) => {
    setAnchorEl1(event.currentTarget);
  };
   const handleClose = () => {
    setAnchorEl1(null);
  };
  const handleClick1 = (event) => {
    setAnchorEl2(event.currentTarget);
  };
  const handleClose1 = () => {
    setAnchorEl2(null);
  };
  const handleClick3 = (event) => {
    setAnchorEl3(event.currentTarget);
  };
  const handleClose3 = () => {
    setAnchorEl3(null);
  };
  // hndle menu click
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  //menu drawer
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography
        color={"goldenrod"}
        variant="h6"
        component={Link}
        sx={{ flexGrow: 1, my: 2 }}
        to='/'
      > FHS
        {/* <img sralt="logo" height={"70"} width="200" /> */}
      </Typography>
      <Divider />
      <ul className="mobile-navigation">
        <li>
          <NavLink activeClassName="active" to={"/"} >
            ABOUT
          </NavLink>
        </li>
        <li>
        <Button id="services-button"
         endIcon={<ArrowDropDownIcon/>}
          component={Link} 
          to="/services" 
          variant="text" 
          disableElevation 
          aria-controls={open ? 'services-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick1}
          >
              SERVICES
          </Button>
          <Menu id='services-menu'
           anchorEl={anchorEl1}
        open={open} 
      MenuListProps={{'arial-labelledby':'services-button',}}
      onClose={handleClose}
      >
        <MenuItem onClick={handleClose}
        disableRipple 
        component={Link}
        to="/services/CustomSoftwareDevelopment"
        className='cool-link'>
         CustomSoftwareDevelopment
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple
         component={Link}
         to="/services/WebApplicationDevelopment">
         WebApplicationDevelopment
        </MenuItem>
        {/* <Divider sx={{ my: 0.5 }} /> */}
        </Menu>
        </li>
        <li>
          <NavLink to={"/services"}>SERVICES</NavLink>
        </li>
        <li>
          <NavLink to={"/blog"}>BLOG</NavLink>
        </li>
      </ul>
      <Button to='/contact' variant="contained" disableElevation size="large" color="success">
    CONTACT
          </Button>
    </Box>
  );
  return (
    <>
   <UpperHeader/>
      <Box>
        <AppBar component={"nav"} sx={{ bgcolor: "#FFE55C" }} >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              sx={{
                mr: 2,
                display: { sm: "none" },
              }}
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
            <Typography 
              color={"goldenrod"}
              variant="h6"
              component={Link}
              sx={{ flexGrow: 1 }}
              to='/'
            >
              FHS
              {/* <img src={Logo} alt="logo" height={"70"} width="250" /> */}
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <ul className="navigation-menu">
              <li>
          <NavLink activeClassName="active" to={"/"}>
            ABOUT
          </NavLink>
        </li>
        <li>
        <Button id="services-button"
         endIcon={<ArrowDropDownIcon/>}
          component={Link} 
          to="/services" 
          variant="text" 
          disableElevation 
          aria-controls={open ? 'services-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
          >
              SERVICES
          </Button>
          <Menu id='services-menu'
           anchorEl={anchorEl1}
            open={open} 
      MenuListProps={{'arial-labelledby':'services-button',}}
      onClose={handleClose}
      >
        <MenuItem onClick={handleClose}
        disableRipple 
        component={Link}
        to="/services/CustomSoftwareDevelopment"
        >
         CustomSoftwareDevelopment
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple
         component={Link}
         to="/services/WebApplicationDevelopment">
         WebApplicationDevelopment
        </MenuItem>
        {/* <Divider sx={{ my: 0.5 }} /> */}
        </Menu>
        </li>
        <li>
        <Button id="solutions-button"
         endIcon={<ArrowDropDownIcon/>}
          component={Link} 
          to="/portfolio" 
          variant="text" 
          disableElevation 
          aria-controls={open2 ? 'solutions-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open2 ? 'true' : undefined}
        onClick={handleClick1}
          >
             PORTFOLIO
          </Button>
          <Menu id='solutions-menu'
           anchorEl={anchorEl2} 
           open={open2} 
         MenuListProps={{'arial-labelledby':'solutions-button',}}
      onClose={handleClose1}
      >
        <MenuItem onClick={handleClose1}
        // containerElement={<Link to="/contact" />}
        disableRipple 
        component={Link}
        to="/solutions/BusinessRetail"
        >
         Business & Retail
        </MenuItem>
        <MenuItem onClick={handleClose1} disableRipple
         component={Link}
         to="/solutions/ECommerceShopping">
       E_Commerce & Shopping
        </MenuItem>
        <MenuItem onClick={handleClose1} disableRipple
         component={Link}
         to="/solutions/Education">
          Education & Organizations
        </MenuItem>
        <MenuItem onClick={handleClose1} disableRipple
         component={Link}
         to="/solutions/NewsEntertainment">
       News & Entertainment
        </MenuItem>
        <MenuItem onClick={handleClose1} disableRipple
         component={Link}
         to="/solutions/IndustrialManufacturing">
          Industrial & Manufacturing
        </MenuItem>
        <MenuItem onClick={handleClose1} disableRipple
         component={Link}
         to="/solutions/SocialMedia">
        Social Media
        </MenuItem>
        <MenuItem onClick={handleClose1} disableRipple
         component={Link}
         to="/solutions/SportsLeisure">
       Sports & Leisure
        </MenuItem>
        <MenuItem onClick={handleClose1} disableRipple
         component={Link}
         to="/solutions/TravelTourism">
       Travel & Tourism
        </MenuItem>
        {/* <Divider sx={{ my: 0.5 }} /> */}
        </Menu>
        </li>
        <li>
          <NavLink to={"/blog"}>BLOG</NavLink>
        </li>
        <li>
        <Button id="company-button"
         endIcon={<ArrowDropDownIcon/>}
          sx={{ color: '#fff' }}
          variant="text" 
          disableElevation 
          aria-controls={open3 ? 'company-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open3 ? 'true' : undefined}
        onClick={handleClick3}
          >
         COMPANY
          </Button>
          
          <Menu id='company-menu'
           anchorEl={anchorEl3}
        open={open3} 
      MenuListProps={{'arial-labelledby':'company-button',}}
      onClose={handleClose3}
      >
        <MenuItem onClick={handleClose3}
        disableRipple 
        component={Link}
        to="/company/careers"
        >
         Careers
        </MenuItem>
        <MenuItem onClick={handleClose3} disableRipple
         component={Link}
         to="/company/news">
         News
        </MenuItem>
        <MenuItem onClick={handleClose3} disableRipple
         component={Link}
         to="/company/partnership">
         Partnership
        </MenuItem>
        {/* <Divider sx={{ my: 0.5 }} /> */}
        </Menu>
        </li>
        <Button component={Link} to="/contact" variant="contained" disableElevation size="large" color="success">
    CONTACT
          </Button>
              </ul>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: "240px",
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box>
          <Toolbar />
        </Box>
      </Box>
    </>
  );
};

export default Header;