import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.jpeg";
import { Box, Button, Container } from "@mui/material";
import "./Navbar.css";
import { AnimatePresence, motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import { containerVariants, fadeUp } from "../Ui/animationVariants";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [startRotation, setStartRotation] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStartRotation(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <AnimatePresence>
      <motion.div
        variants={containerVariants}
        initial='hidden'
        animate='visible'>
        <motion.div variants={fadeUp}>
          <Container
            maxWidth={false}
            disableGutters
            sx={{
              paddingX: { xs: 3, sm: 8 },
              paddingY: { xs: 2, sm: 2 },
            }}
            className='navbar'>
            <motion.img
              onClick={() => {
                navigate("/");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              src={logo}
              alt='logo'
              className='navbar-logo'
              animate={startRotation ? { rotate: 360 } : { rotate: 0 }}
              transition={{
                duration: 1.6,
                ease: "easeInOut",
                repeat: Infinity,
                repeatDelay: 5,
              }}
            />
            <Box
              className='navbar-buttons'
              sx={{ width: { xs: "150px", sm: "200px" } }}>
              <Button
                onClick={() => navigate("/contact")}
                className={`navbar-button ${
                  location.pathname === "/contact" ? "active-link" : ""
                }`}
                sx={{
                  width: { xs: "60px", sm: "82px" },
                  textTransform: "none",
                  whiteSpace: "nowrap",
                  color: "white",
                  fontFamily: "Figtree",
                  fontWeight: 600,
                }}>
                Contact Us
              </Button>
              <a
                href='https://widget.usdtmarketplace.com/'
                target='_blank'
                rel='noopener noreferrer'>
                <Button
                  className='navbar-button primary'
                  sx={{
                    width: { xs: "50px", sm: "82px" },
                    textTransform: "none",
                    color: "white",
                    fontFamily: "Figtree",
                    fontWeight: 600,
                  }}>
                  Sign in
                </Button>
              </a>
            </Box>
          </Container>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Navbar;
