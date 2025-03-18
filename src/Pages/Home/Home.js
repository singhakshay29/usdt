import React, { useRef, useState } from "react";
import {
  Box,
  Typography,
  Card,
  TextField,
  Button,
  CardContent,
  Container,
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

const Home = () => {
  const {
    globalCurrency,
    globalCoin,
    globalYouGet,
    globalQuoteData,
    setGlobalYouGet,
  } = "";
  const maxLimit = 100000;
  const [globalYouSell, setGlobalYouSell] = useState();
  const [maxValue, setMaxvalue] = useState(null);
  const sellInputRef = useRef(null);
  const [coinImageLoaded, setCoinImageLoaded] = useState(false);
  const [setFocusedInput] = useState("sell");
  const [rightOffset, setRightOffset] = useState(18);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const preventLeadingZero = (e) => {
    let value = e.target.value;
    value = value.replace(/^0+/, "");
    e.target.value = value;
  };
  const resetValidation = () => {
    setMaxvalue(null);
  };
  const preventNegative = (e) => {
    if (e.target.value < 0) {
      e.target.value = 0;
    }
  };
  const handleYouSellInputChange = (e) => {
    let value = e.target.value;
    if (value.length > 1 && value.startsWith("0")) {
      return;
    }
    if (value && Number(value) > maxLimit) {
      setMaxvalue(value);
      return;
    }
    setMaxvalue(null);
    if (!isNaN(value) && value >= 0) {
      setGlobalYouSell(value);
    }
  };
  const handleInputChange = (e) => {
    const value = e.target.value;
    if (!isNaN(value) && value >= 0) {
      setGlobalYouGet(value);
    }
  };
  const handleProceed = () => {
    if (
      !(
        globalYouSell < Number(globalCoin?.minSellValue) ||
        !globalQuoteData ||
        globalYouGet === ""
      )
    ) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
      }, 1500);
    }
  };
  return (
    <>
      <Box className='container'>
        {/* Header Section */}
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
            }}>
            <CardContent sx={{ borderRadius: 10 }}>
              <Typography variant='h5' fontWeight='bold' color='#A9EA2E'>
                Why choose us?
              </Typography>
              <Box display='flex' alignItems='center' mt={2}>
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
              <Box display='flex' alignItems='center' mt={1}>
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
              <Box display='flex' alignItems='center' mt={1}>
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
        <Container
        sx={{border:"2px solid red",
          display:'flex',
          flexDirection:'column',
          gap:3,
          //marginLeft:"10%",
          width:'100%',
          maxWidth:'100%',
          alignItems:'center'
        }}
          
          >
          <Box
            sx={{
              py: 3,
              px: 4,
              width: "100%",
              maxWidth: { md: "60%", lg: 545 },
              borderRadius: 3,
              bgcolor: "#A7E92D",
              boxShadow: 3,
              height: "120px",
             
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
                  <Box display='flex' alignItems='center' gap={3}>
                    <img
                      src={Tether}
                      alt='Coin Icon'
                      style={{ width: 42, height: 42, objectFit: "cover" }}
                      onLoad={() => setCoinImageLoaded(true)}
                      onError={() => setCoinImageLoaded(false)}
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
                          10 + (globalYouSell?.toString().length || 0) * 20
                        }px`,
                        color: "#11111180",
                        fontSize: "1.5rem",
                      }}
                    />
                    <TextField
                      type='text'
                      variant='outlined'
                      inputMode='numeric'
                      fullWidth
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
              px: 4,
              width: "100%",
              maxWidth: { md: "60%", lg: 545 },
              borderRadius: 3,
              bgcolor: "#FFFFFF1F",
              boxShadow: 3,
              height: "120px",
            }}>
            <Box display='flex' flexDirection='column' gap={2}>
              <Typography
                variant='h6'
                sx={{ fontWeight: 500, color: "#F4F4F4" }}>
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
                      onLoad={() => setCoinImageLoaded(true)}
                      onError={() => setCoinImageLoaded(false)}
                    />

                    <Typography
                      variant='h5'
                      sx={{
                        fontWeight: 600,
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
                    maxWidth={{ sm: 180, md: 200, lg: 250 }}>
                    <FaRupeeSign
                      style={{
                        position: "absolute",
                        right: `${
                          15 + (globalYouGet?.toString().length || 0) * 10
                        }px`,
                        color: "#F4F4F480",
                        fontSize: "1.5rem",
                      }}
                    />
                    <TextField
                      type='number'
                      variant='standard'
                      fullWidth
                      inputProps={{
                        style: {
                          textAlign: "right",
                          fontSize: "1.5rem",
                          fontWeight: 600,
                          color: "#F4F4F4",
                        },
                      }}
                      value={globalYouGet}
                      disabled
                    />
                  </Box>
                </Box>

                <Typography
                  variant='body2'
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    color: "#F4F4F480",
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
            sx={{
              mt: 2,
              py: 1.5,
              width: '100%',
              height: 48,
              fontSize: { xs: "0.875rem", md: "1rem" },
              fontWeight: 500,
              borderRadius: 3,
              fontFamily:'Figtree',
              boxShadow: "0px 20px 40px 0px rgba(0,0,0,0.25)",
              bgcolor:"white",
              color: "#000",
            }}
            onClick={handleProceed}>
            Convert now
          </Button>
        </Container>
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
