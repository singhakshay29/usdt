import React from "react";
import logo from "../../assets/logo.jpeg";
import { Box, Button, Container } from "@mui/material";
import "./Navbar.css";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        paddingX: { xs: 3, sm: 8 },
        paddingY: { xs: 2, sm: 2 },
      }}
      className='navbar'>
      <img
        onClick={() => navigate("/")}
        src={logo}
        alt='logo'
        className='navbar-logo'
      />
      <Box
        className='navbar-buttons'
        sx={{ width: { xs: "150px", sm: "200px" } }}>
        <Button
          onClick={() => navigate("/contact")}
          className={`navbar-button ${location.pathname === "/contact" ? "active-link" : ""}`}
          sx={{
            width: { xs: "60px", sm: "82px" },
            textTransform: "none",
            whiteSpace: "nowrap",
            color: "white",
            fontFamily: "Figtree",
            fontWeight: 600
          }}>
          Contact Us
        </Button>
        <a
          href='https://widget.usdtmarketplace.com/'
          target='_blank'
          rel='noopener noreferrer'>
          <Button
            className='navbar-button primary'
            sx={{ width: { xs: "50px", sm: "82px" }, textTransform: "none",color:"white",fontFamily:"Figtree",fontWeight:600 }}>
            Sign in
          </Button>
        </a>
      </Box>
    </Container>
  );
};

export default Navbar;
