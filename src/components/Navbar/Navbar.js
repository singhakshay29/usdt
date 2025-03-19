import React from "react";
import logo from "../../assets/logo.jpeg";
import { Box, Container } from "@mui/material";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{ px: 8, background: "#111", zIndex: 50 }}
      className='navbar'>
      <img
        onClick={() => navigate("/")}
        src={logo}
        alt='logo'
        className='navbar-logo'
      />
      <Box className='navbar-buttons'>
        <button onClick={() => navigate("/contact")} className='navbar-button'>
          Contact Us
        </button>
        <a
          href='https://widget.usdtmarketplace.com/'
          target='_blank'
          rel='noopener noreferrer'>
          <button className='navbar-button primary'>Sign in</button>
        </a>
      </Box>
    </Container>
  );
};

export default Navbar;
