import React, { useEffect, useState } from "react";
import { Box, Typography, Grid, IconButton, Button } from "@mui/material";
import TelegramIcon from "@mui/icons-material/Telegram";
import XIcon from "@mui/icons-material/X"; // This is from Material-UI for the Twitter (X) logo
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import logo from "../assets/logo.jpeg";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box
      sx={{
        backgroundColor: "#343434",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        marginX: "5px",
        borderRadius: "10px",
        minHeight: "500px",
        justifyContent: "space-between",
        padding: { xs: "20px", sm: "30px" },
      }}>
      <Box
        sx={{
          backgroundColor: "#343434",
          borderRadius: "12px",
          padding: { xs: "20px", sm: "30px" },
        }}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <img src={logo} alt='logo' className='navbar-logo' />
          <Typography
            variant='body1'
            fontFamily='Figtree'
            sx={{ opacity: 0.8, color: "#FFFFFF", maxWidth: "100%" }}>
            USDT Marketplace is the brand operated by GSX Solutions Pvt Ltd
            based in Delhi, India.
          </Typography>
        </Box>

        <hr style={{ border: "0.5px solid #444", margin: "20px 0" }} />

        <Grid container spacing={4}>
          <Grid item xs={12} sm={3}>
            <Typography variant='h6' fontFamily='Figtree' fontWeight='bold'>
              Address
            </Typography>
            <Typography
              variant='body2'
              fontFamily='Figtree'
              sx={{ opacity: 0.8, color: "#FFFFFF", mt: 2 }}>
              DLF Towers, Moti Nagar, Karampura Industrial Area, Karam Pura,
              Delhi, 110015, India
            </Typography>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Typography variant='h6' fontFamily='Figtree' fontWeight='bold'>
              Info
            </Typography>
            {["About", "Blog", "FAQs", "Feedback"].map((text, index) => (
              <Typography
                key={index}
                variant='body2'
                fontFamily='Figtree'
                sx={{
                  opacity: 0.8,
                  color: "#FFFFFF",
                  mt: index === 0 ? 2 : 1,
                }}>
                {text}
              </Typography>
            ))}
          </Grid>

          <Grid item xs={12} sm={3}>
            <Typography variant='h6' fontFamily='Figtree' fontWeight='bold'>
              Contact us
            </Typography>
            <Typography
              variant='body2'
              fontFamily='Figtree'
              sx={{ opacity: 0.8, color: "#FFFFFF", mt: 2 }}>
              +1 891 989-11-91
            </Typography>
            <Typography
              variant='body2'
              fontFamily='Figtree'
              sx={{ opacity: 0.8, color: "#FFFFFF" }}>
              support@usdtmarketplace.com
            </Typography>
          </Grid>

          <Grid item xs={12} sm={3}>
            <Box display='flex' gap={2} alignItems='center'>
              <Box textAlign='center'>
                <IconButton
                  sx={{ backgroundColor: "#444", color: "#fff", p: 2 }}>
                  <TelegramIcon sx={{ fontSize: 25 }} />
                </IconButton>
                <Typography
                  variant='body2'
                  sx={{ color: "#ddd", fontWeight: "bold", mt: 1 }}>
                  Join us on Telegram
                </Typography>
              </Box>

             
              <Box textAlign='center'>
                <IconButton
                  sx={{ backgroundColor: "#444", color: "#fff", p: 2 }}>
                  <XIcon sx={{ fontSize: 25 }} />
                </IconButton>
                <Typography
                  variant='body2'
                  sx={{ color: "#ddd", fontWeight: "bold", mt: 1 }}>
                  Follow us on X
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "center",
          flexWrap: "wrap",
          padding: "10px 25px",
          gap: { xs: 0, sm: 20 },
        }}>
        <Typography
          variant='body2'
          sx={{ opacity: 0.7, textAlign: { xs: "center", sm: "left" } }}>
          © 2025 — Copyright
        </Typography>

        <Box
          sx={{
            display: "flex",
            gap: 2,
            flexWrap: "wrap",
            justifyContent: "center",
          }}>
          <Button
            variant='text'
            sx={{ opacity: 0.7, textTransform: "none", color: "inherit" }}
            onClick={() => navigate("/term-condition")}>
            Terms
          </Button>
          <Button
            variant='text'
            sx={{ opacity: 0.7, textTransform: "none", color: "inherit" }}
            onClick={() => navigate("/privacy")}>
            Privacy
          </Button>
          <Button
            variant='text'
            sx={{ opacity: 0.7, textTransform: "none", color: "inherit" }}
            onClick={() => navigate("/privacy")}>
            AML & KYC Policy
          </Button>
        </Box>
      </Box>

      {showButton && (
        <IconButton
          sx={{
            backgroundColor: "#fff",
            color: "#000",
            "&:hover": { backgroundColor: "#ddd" },
            position: "fixed",
            bottom: "20px",
            right: "20px",
          }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <KeyboardArrowUpIcon />
        </IconButton>
      )}
    </Box>
  );
};

export default Footer;
