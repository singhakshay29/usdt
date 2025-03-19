import React, { useState } from "react";
import {
  Box,
  Typography,
  Card,
  TextField,
  Button,
  CardContent,
} from "@mui/material";
import "./Home.css";
import { FaDollarSign, FaInfoCircle, FaRupeeSign } from "react-icons/fa";
import Tether from "../../assets/tether-1.svg";
import flag from "../../assets/Flag_of_India.svg";
import Company from "../../components/Companies/Company";
import HeroSection from "../../components/Hero/HeroSection";
import FeaturesSection from "../FeatureSection";
import PayoutSteps from "../PayoutSteps";
import TestimonialCarousel from "../TestimonialCarousel";
import FAQSection from "../FAQSection";
import OffRampSection from "../OffRampSection";
import NorthEastIcon from '@mui/icons-material/NorthEast';

const Home = () => {
  const [globalYouSell, setGlobalYouSell] = useState("");
  const [globalYouGet, setGlobalYouGet] = useState("");
  const exchangeRate = 86; 
  const isActive = (globalYouSell?.length ?? 0) > 0 || (globalYouGet?.length ?? 0) > 0;
  const handleYouSellInputChange = (event) => {
    const inputValue = event.target.value;
    if (/^\d*\.?\d*$/.test(inputValue)) {
      // Allow only numbers and decimals
      setGlobalYouSell(inputValue);
      setGlobalYouGet(
        inputValue ? (parseFloat(inputValue) * exchangeRate).toFixed(2) : ""
      );
    }
  };
  const handleYouGetInputChange = (event) => {
    const inputValue = event.target.value;
    if (/^\d*\.?\d*$/.test(inputValue)) {
      // Allow only numbers and decimals
      setGlobalYouGet(inputValue);
      setGlobalYouSell(
        inputValue ? (parseFloat(inputValue) / exchangeRate).toFixed(2) : ""
      );
    }
  };
  const handleProceed = () => {
    if (isActive) {
      window.location.href = "https://widget.usdtmarketplace.com/";
    }
  };
  return (
    <>
      <Box className='container'>
        <Box className='header-section'>
          <Typography variant='subtitle2' className='subtitle'>
            ✨ INSTANT OFF-RAMPING CONVERSION
          </Typography>
          <Typography variant='h4' className='title'>
            Easily convert your USDT to INR with real-time rates.
          </Typography>
          <Typography variant='body1' className='body-text'>
            Whether you're a crypto enthusiast, freelancer, or business owner
            looking to convert USDT into spendable INR, we've got you covered.
          </Typography>
          <Typography variant='body1' className='body-text-secondary'>
            Our service allows you to seamlessly convert USDT into INR,
            deposited directly into your bank account with minimal effort.
          </Typography>
          <Card
           sx={{
            background:
              "linear-gradient(90deg, rgba(0, 0, 0, 0.16) 0%, rgba(0, 0, 0, 0.28) 100%)",
            color: "white",
            borderRadius: 5,
            boxShadow: "0px 4px 12px 0px rgba(37, 37, 37, 0.25)",
            backdropFilter: "blur(40px)",
            paddingTop: 2,
            border: "1px solid #FFFFFF4D",
            marginTop: 5,
            width: "100%", 
            maxWidth: 600, 
            mx: "auto", 
          }}>
            <CardContent sx={{ borderRadius: 10 }}>
              <Typography variant='h5' fontWeight='bold' color='#A9EA2E'>
                Why choose us?
              </Typography>
              <Box display='flex' alignItems='center' flexDirection={{ xs: "column", sm: "row" }} 
          textAlign={{ xs: "center", sm: "left" }}  mt={2}>
                <svg
                  width='20'
                  height='21'
                  viewBox='0 0 20 21'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                    d='M19 10.5C12.75 10.5 10 13.4028 10 20C10 13.4028 7.25 10.5 1 10.5C7.25 10.5 10 7.59722 10 1C10 7.59722 12.75 10.5 19 10.5Z'
                    stroke='#A9EA2E'
                    stroke-width='2'
                    stroke-linejoin='round'
                  />
                </svg>
                <Typography fontWeight='bold' marginLeft={2}>
                  No delays
                </Typography>
                <Typography color='gray' ml={1}>
                  Instant transactions processed in real-time.
                </Typography>
              </Box>
              <Box display='flex' alignItems='center' flexDirection={{ xs: "column", sm: "row" }} 
          textAlign={{ xs: "center", sm: "left" }}  mt={1}>
                <svg
                  width='20'
                  height='21'
                  viewBox='0 0 20 21'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                    d='M19 10.5C12.75 10.5 10 13.4028 10 20C10 13.4028 7.25 10.5 1 10.5C7.25 10.5 10 7.59722 10 1C10 7.59722 12.75 10.5 19 10.5Z'
                    stroke='#A9EA2E'
                    stroke-width='2'
                    stroke-linejoin='round'
                  />
                </svg>
                <Typography fontWeight='bold' marginLeft={2}>
                  No hidden fees
                </Typography>
                <Typography color='gray' ml={1}>
                  Transparent pricing, no surprises.
                </Typography>
              </Box>
              <Box display='flex' alignItems='center' flexDirection={{ xs: "column", sm: "row" }} 
          textAlign={{ xs: "center", sm: "left" }}  mt={1}>
                <svg
                  width='20'
                  height='21'
                  viewBox='0 0 20 21'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                    d='M19 10.5C12.75 10.5 10 13.4028 10 20C10 13.4028 7.25 10.5 1 10.5C7.25 10.5 10 7.59722 10 1C10 7.59722 12.75 10.5 19 10.5Z'
                    stroke='#A9EA2E'
                    stroke-width='2'
                    stroke-linejoin='round'
                  />
                </svg>
                <Typography fontWeight='bold' marginLeft={2}>
                  Secure, fast, and hassle-free
                </Typography>
                <Typography color='gray' ml={1}>
                  A seamless experience for all users.
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            alignItems: "center",
            position: "relative",
            borderRadius: "24px",
            paddingTop: "16px",
            paddingBottom: "16px",
            zIndex: 1,
            "&::before": {
              content: '""',
              position: "absolute",
              inset: 0,
              padding: "2px",
              borderRadius: "inherit",
              background:
                "linear-gradient(143.61deg, #A7E92D -16.22%, #222F09 42.86%, rgba(167, 233, 45, 0.8) 101.93%)",
              WebkitMask:
                "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)", // Safari fix
              maskComposite: "exclude",
              zIndex: -1,
            },
          }}>
          <Box
            sx={{
              py: 3,
              px: 3,
              borderRadius: 3,
              bgcolor: "#A7E92D",
              boxShadow: 3,
              height: "120px",
              width: "80%",
            }}>
            <Box display='flex' flexDirection='column' gap={2}>
              <Typography
                variant='h6'
                sx={{
                  fontWeight: 600,
                  fontSize: "16px",
                  color: "#111",
                  fontFamily: "Figtree",
                }}>
                You Sell
              </Typography>
              <Box display='flex' flexDirection='column' width='100%'>
                <Box
                  display='flex'
                  justifyContent='space-between'
                  alignItems='center'
                  height={48}>
                  <Box display='flex' alignItems='center' gap={2}>
                    <img
                      src={Tether}
                      alt='Coin Icon'
                      style={{
                        width: 42,
                        height: 42,
                        objectFit: "cover",
                        borderRadius: "50%",
                        display: "block",
                      }}
                    />
                    <Typography
                      variant='h5'
                      sx={{
                        fontWeight: 500,
                        fontFamily: "Figtree",
                        fontSize: "24px",
                        color: "#111",
                      }}>
                      USDT
                    </Typography>
                  </Box>

                  <Box
                    position='relative'
                    width='100%'
                    maxWidth={{ sm: 150, md: 200, lg: 250 }}>
                    <FaDollarSign
                      style={{
                        position: "absolute",
                        right: `${
                          10 + (globalYouSell?.toString().length || 0) * 15
                        }px`,
                        color: "#11111180",
                        fontSize: "1.5rem",
                      }}
                    />
                    <TextField
                      type='text'
                      variant='outlined'
                      inputMode='numeric'
                      inputProps={{
                        style: {
                          textAlign: "right",
                          fontSize: "1.5rem",
                          fontWeight: 600,
                          color: "#111",
                        },
                      }}
                      sx={{ "& fieldset": { border: "none" } }}
                      value={globalYouSell}
                      onChange={handleYouSellInputChange}
                    />
                  </Box>
                </Box>
                <Typography
                  variant='body2'
                  sx={{
                    color: "#11111180",
                    mt: 1,
                    fontWeight: 500,
                    fontSize: "14px",
                    fontFamily: "Figtree",
                  }}>
                  Tether(TRC 200)
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              py: 3,
              px: 3,
              borderRadius: 3,
              bgcolor: "#FFFFFF1F",
              boxShadow: 3,
              height: "120px",
              width: "80%",
            }}>
            <Box display='flex' flexDirection='column' gap={2}>
              <Typography
                variant='h6'
                sx={{
                  fontWeight: 600,
                  color: "#F4F4F4",
                  fontSize: "16px",
                  fontFamily: "Figtree",
                }}>
                You Receive
              </Typography>
              <Box display='flex' flexDirection='column' width='100%'>
                <Box
                  display='flex'
                  justifyContent='space-between'
                  alignItems='center'
                  height={48}>
                  <Box display='flex' alignItems='center' gap={2}>
                    <img
                      src={flag}
                      alt='Currency Icon'
                      style={{
                        width: 42,
                        height: 42,
                        objectFit: "cover",
                        borderRadius: "50%",
                        display: "block",
                      }}
                    />

                    <Typography
                      variant='h5'
                      sx={{
                        fontWeight: 500,
                        color: "#F4F4F4",
                        fontFamily: "Figtree",
                        fontSize: "24px",
                      }}>
                      INR
                    </Typography>
                  </Box>

                  <Box
                    position='relative'
                    width='100%'
                    maxWidth={{ sm: 150, md: 200, lg: 250 }}>
                    <FaRupeeSign
                      style={{
                        position: "absolute",
                        right: `${
                          10 + (globalYouGet?.toString().length || 0) * 15
                        }px`,
                        color: "#F4F4F480",
                        fontSize: "1.5rem",
                      }}
                    />
                    <TextField
                      type='text'
                      variant='outlined'
                      inputMode='numeric'
                      inputProps={{
                        style: {
                          textAlign: "right",
                          fontSize: "1.5rem",
                          fontWeight: 600,
                          color: "#F4F4F4",
                        },
                      }}
                      sx={{ "& fieldset": { border: "none" } }}
                      value={globalYouGet}
                      onChange={handleYouGetInputChange}
                    />
                  </Box>
                </Box>

                <Typography
                  variant='body2'
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    mt: 1,
                    color: "#F4F4F480",
                    fontWeight: 500,
                    fontSize: "14px",
                    fontFamily: "Figtree",
                  }}>
                  Indian Rupees <FaRupeeSign style={{ marginLeft: 4 }} />
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box
            display='flex'
            alignItems='center'
            gap={1}
            color='#F4F4F480'
            fontSize='16px'
            fontFamily='Figtree'
            fontWeight='600'>
            <FaInfoCircle /> 1 USDT = ₹ 86
          </Box>
          <Button
            fullWidth
            variant='outlined'
            paddingLeft='16px'
            sx={{
              mt: 2,
              height: 48,
              fontSize: { xs: "0.875rem", md: "1rem" },
              fontWeight: 500,
              borderRadius: 5,
              fontFamily: "Figtree",
              boxShadow: "0px 20px 40px 0px rgba(0,0,0,0.25)",
              bgcolor: isActive ? "#A7E92D" : "white",
              color: "#000",
              width: "92%",
              transition: "background-color 0.5s",
              textTransform: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 1.5,
            }}
            onClick={handleProceed}>
              
            Convert now
            <NorthEastIcon/>
          </Button>
        </Box>
      </Box>
      <Company />
      <HeroSection />
      <FeaturesSection />
      <PayoutSteps />
      <TestimonialCarousel />
      <FAQSection />
      <OffRampSection />
    </>
  );
};

export default Home;
