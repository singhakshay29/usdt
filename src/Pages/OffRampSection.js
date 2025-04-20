import React from "react";
import { Box, Typography, Button, TextField } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import bg from "../assets/offBg.jpeg";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import "../Animation.css";
import { motion, AnimatePresence } from "framer-motion";
import { containerVariants, fadeUp } from "../components/Ui/animationVariants";

const OffRampSection = () => {
  return (
    <AnimatePresence>
      <motion.div
        variants={containerVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.1 }}>
        <Box
          id='FEEDBACK'
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            backgroundColor: "#111",
            color: "#fff",
            padding: { xs: "10px", md: "40px" },
            gap: "20px",
          }}>
          <Box
            sx={{
              flex: 2,
              backgroundImage: `url(${bg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "12px",
              overflow: "hidden",
              position: "relative",
              display: "flex",
              alignItems: "center",
              minHeight: "400px",
            }}>
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                backgroundColor: "rgba(0, 0, 0, 0.5)",
              }}
            />
            <motion.div variants={fadeUp}>
              <Box
                sx={{
                  position: "relative",
                  padding: "30px",
                  textAlign: "left",
                  maxWidth: "500px",
                }}>
                <Typography
                  variant='h5'
                  fontWeight='600'
                  fontSize='40px'
                  fontFamily='Figtree'>
                  Ready to Off-Ramp Your USDT?
                </Typography>
                <Typography
                  variant='body1'
                  fontWeight='500'
                  fontSize='20px'
                  fontFamily='Figtree'
                  color='#FFFFFF80'
                  sx={{ mt: 1, opacity: 0.8, marginBottom: "10px" }}>
                  Start converting your USDT to INR instantly with secure,
                  hassle-free transactions.
                </Typography>
                <a className='button-section'
                  href='https://widget.usdtmarketplace.com/'
                  target='_blank'
                  rel='noopener noreferrer'
                  style={{ textDecoration: "none",width:"200px" }} 
                >
                   <span className='btn front' style={{fontFamily: "Figtree",fontWeight: 700,color: "#fff", borderColor: "#fff",}}>
                   CONVERT USDT NOW{" "}
                   <NorthEastIcon sx={{ fontSize: 20 }} />
                </span>
                <span className='btn back' style={{fontFamily: "Figtree",fontWeight: 700,backgroundColor: "#fff",borderColor: "#fff"}}>
                CONVERT USDT NOW{" "}
                <NorthEastIcon sx={{ fontSize: 20 }} />
                </span>
                </a>
              </Box>
            </motion.div>
          </Box>
            <Box
              sx={{
                flex: 1,
                backgroundColor: "#C8FF57",
                borderRadius: "12px",
                padding: { xs: "10px", md: "40px" },
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                minHeight: "200px",
                maxWidth: { xs: "100%", sm: "350px" },
              }}>
                <motion.div variants={fadeUp}>
              <Typography
                variant='h6'
                fontWeight='600'
                color='#191919'
                fontSize='32px'
                fontFamily='Figtree'
                maxWidth='250px'>
                Subscribe to our newsletter
              </Typography>
                </motion.div>
                <motion.div variants={fadeUp}>
              <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <TextField
                  fullWidth
                  placeholder='your@email.com'
                  variant='standard'
                  InputProps={{
                    disableUnderline: true,
                    sx: {
                      backgroundColor: "#C8FF57",
                      borderRadius: "5px",
                      padding: "8px",
                    },
                  }}
                />
                <Button sx={{ minWidth: "40px", color: "#000" }}>
                  <ArrowForwardIcon />
                </Button>
              </Box>
                </motion.div>
            </Box>
        </Box>
      </motion.div>
    </AnimatePresence>
  );
};

export default OffRampSection;
