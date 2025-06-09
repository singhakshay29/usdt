import "./Home.css";
import PayoutSteps from "../PayoutSteps";
import FAQSection from "../FAQSection";
import OffRampSection from "../OffRampSection";
import Tether from "../../assets/tether-1.svg";
import FeaturesSection from "../FeatureSection";
import flag from "../../assets/Flag_of_India.svg";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TestimonialCarousel from "../TestimonialCarousel";
import Company from "../../components/Companies/Company";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import HeroSection from "../../components/Hero/HeroSection";
import FlipText from "../../components/Ui/FlipText/FlipText";
import HoverText from "../../components/Ui/HoverText/HoverText";
import { Box, Typography, TextField, Button } from "@mui/material";
import { FaDollarSign, FaInfoCircle, FaRupeeSign } from "react-icons/fa";
import {containerVariants,fadeUp} from "../../components/Ui/animationVariants";
import ShineBorder from "../../components/Ui/ShineBorder/ShineBorder";

const Home = () => {
  const [globalYouSell, setGlobalYouSell] = useState("");
  const [globalYouGet, setGlobalYouGet] = useState("");
  const [error, setError] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [rates, setRates] = useState(null);
  const isActive =
    (globalYouSell?.length ?? 0) > 0 || (globalYouGet?.length ?? 0) > 0;
    const handleYouSellInputChange = (event) => {
      const inputValue = event.target.value;
  
      if (/^\d*\.?\d*$/.test(inputValue)) {
        // Only allow numbers and decimals
  
        if (inputValue && parseFloat(inputValue) > 500) {
          setError(true);
          setGlobalYouGet(0);
        } else {
          setError(false);
          setGlobalYouGet(
            inputValue ? (parseFloat(inputValue) * rates?.inrRateOfframp).toFixed(2) : ""
          );
        }
  
        setGlobalYouSell(inputValue);
      }
    };
  const handleYouGetInputChange = (event) => {
    const inputValue = event.target.value;
    if (/^\d*\.?\d*$/.test(inputValue)) {
      setGlobalYouGet(inputValue);
      setGlobalYouSell(
        inputValue ? (parseFloat(inputValue) / rates?.inrRateOfframp).toFixed(2) : ""
      );
    }
  };
  const handleProceed = () => {
    const url = "https://widget.usdtmarketplace.com/";
    window.open(url, "_blank", "noopener,noreferrer");
  };
  useEffect(() => {
    const scrollHandlers = ["about", "faq", "feedback", "blog"].map(
      (section) => {
        const handler = () => {
          const el = document.getElementById(section.toUpperCase());
          if (el) el.scrollIntoView({ behavior: "smooth" });
        };
        window.addEventListener(`scroll-to-${section}`, handler);
        return { section, handler };
      }
    );

    return () => {
      scrollHandlers.forEach(({ section, handler }) => {
        window.removeEventListener(`scroll-to-${section}`, handler);
      });
    };
  }, []);
  useEffect(() => {
    fetchRates();
  }, []);
  const fetchRates = async () => {
    try {
      const response = await fetch('https://api.usdtmarketplace.com/api/v1/user/getRates', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      });

      if (!response.ok) {
        console.log("Error fetching rates:", response?.error);
        return;
      }
      const res = await response.json();
      setRates(res?.data[0]);
    } catch (err) {
      console.error("Error fetching rates:", err);
    }
  };
  return (
    <>
      <AnimatePresence>
        <motion.div
          variants={containerVariants}
          initial='hidden'
          animate='visible'>
          <Box
            className='container'
            sx={{
              display:"flex",
              flexDirection: { xs: "column",sm: "column", md: "row" },
              gap: { xs: 4, md: 0 },
              textAlign: { xs: "center", sm: "center",md:"left" },
              paddingLeft: { xs: "1rem", sm: "2rem",md:"4rem" },
              paddingRight: { xs: "1rem", sm: "2rem",md:"4rem" },
              paddingTop: { xs: "8rem" },
              alignItems: {
                xs: "center",
                sm: "center",
                md: "flex-start",
              },
            }}>
            <Box
              className='header-section'
              sx={{
                display:"flex",
                flexDirection:"column",
                gap:"18px",
                width: { xs: "100%",  sm: "100%",  md: "50%", },
                alignItems: { xs: "center", sm: "center",md:"flex-start" },
              }}>
              <motion.div variants={fadeUp}>
                <Typography
                  variant='body2'
                  color='#A9EA2E'
                  fontWeight='500'
                  fontFamily='Figtree'
                  display='flex'
                  justifyContent={{ xs: "center", sm: "center" }}
                  fontSize={{ xs: "16px", sm: "18px" }}>
                  <svg
                    width='19'
                    height='19'
                    viewBox='0 0 19 19'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'>
                    <path
                      d='M14.9524 1.85653C14.9348 1.70102 14.8033 1.58347 14.6468 1.58331C14.4903 1.58315 14.3586 1.70043 14.3406 1.85591C14.2572 2.57972 14.0422 3.07627 13.7054 3.41307C13.3686 3.74987 12.8721 3.96482 12.1482 4.0483C11.9928 4.06624 11.8755 4.19796 11.8757 4.35446C11.8758 4.51096 11.9934 4.64245 12.1489 4.66006C12.8604 4.74066 13.3683 4.95556 13.7137 5.29468C14.0571 5.63196 14.2762 6.1278 14.3398 6.84435C14.3539 7.00333 14.4872 7.12516 14.6468 7.12498C14.8064 7.1248 14.9394 7.00267 14.9532 6.84366C15.0142 6.13922 15.233 5.63219 15.5788 5.28645C15.9245 4.9407 16.4316 4.72185 17.136 4.66087C17.295 4.6471 17.4171 4.5141 17.4173 4.35449C17.4175 4.19488 17.2957 4.06161 17.1367 4.04748C16.4201 3.98383 15.9243 3.76481 15.587 3.42132C15.2479 3.07596 15.033 2.5681 14.9524 1.85653Z'
                      fill='#A9EA2E'
                    />
                    <path
                      d='M9.49562 3.86921C9.45033 3.46933 9.11223 3.16706 8.70979 3.16665C8.30735 3.16624 7.96864 3.46781 7.92253 3.8676C7.70786 5.72883 7.15513 7.00567 6.28907 7.87173C5.42301 8.73779 4.14616 9.29052 2.28494 9.50519C1.88515 9.5513 1.58357 9.89001 1.58398 10.2925C1.5844 10.6949 1.88667 11.033 2.28655 11.0783C4.1163 11.2855 5.42222 11.8381 6.3103 12.7102C7.19354 13.5774 7.75675 14.8525 7.92042 16.695C7.95674 17.1038 8.29946 17.4171 8.70988 17.4166C9.1203 17.4162 9.46231 17.1021 9.4977 16.6933C9.6545 14.8818 10.2173 13.5781 11.1063 12.689C11.9954 11.7999 13.2992 11.2372 15.1106 11.0804C15.5195 11.045 15.8335 10.703 15.834 10.2925C15.8344 9.88212 15.5212 9.5394 15.1124 9.50308C13.2698 9.33941 11.9948 8.7762 11.1275 7.89296C10.2555 7.00489 9.70288 5.69896 9.49562 3.86921Z'
                      fill='#A9EA2E'
                    />
                  </svg>
                  <FlipText> INSTANT OFF-RAMPING CONVERSION</FlipText>
                </Typography>
              </motion.div>
              <Box
                sx={{
                  "&:hover": {
                    " & .body-text, & .body-text-secondary": {
                      color: "#fff",
                      cursor: "grab",
                    },
                  },
                }}>
                <motion.div variants={fadeUp}>
                  <Box
                    sx={{
                      fontFamily: "Figtree",
                      fontWeight: 700,
                      fontSize: { xs: "40px", sm: "36px" },
                      cursor: "grab",
                    }}>
                    <HoverText>
                      Instant USDT to INR Conversion – Secure & Real-Time
                      Payouts
                    </HoverText>
                  </Box>
                </motion.div>

                <motion.div variants={fadeUp}>
                  <Typography
                    variant='body1'
                    className='body-text'
                    sx={{
                      color: "#FFFFFF99",
                      transition: "color 0.6s ease",
                      fontWeight: 500,
                      fontFamily: "Figtree",
                    }}>
                    Whether you're a crypto enthusiast, freelancer, or business
                    owner looking to convert USDT into spendable INR, we've got
                    you covered.
                  </Typography>
                </motion.div>
                <motion.div variants={fadeUp}>
                  <Typography
                    variant='body1'
                    className='body-text-secondary'
                    sx={{
                      color: "#FFFFFF99",
                      transition: "color 0.3s ease",
                      fontWeight: 500,
                      fontFamily: "Figtree",
                    }}>
                    Our service allows you to seamlessly convert USDT into INR,
                    deposited directly into your bank account with minimal
                    effort.
                  </Typography>
                </motion.div>
              </Box>
              <motion.div variants={fadeUp}>
                <Box
                  onMouseEnter={() => setHovered(true)}
                  onMouseLeave={() => setHovered(false)}
                  sx={{
                    background:
                      "linear-gradient(90deg, rgba(0, 0, 0, 0.16) 0%, rgba(0, 0, 0, 0.28) 100%)",
                    color: "white",
                    borderRadius: 5,
                    boxShadow: "0px 4px 12px 0px rgba(37, 37, 37, 0.25)",
                    backdropFilter: "blur(40px)",
                    border: "1px solid #FFFFFF4D",
                    marginTop: 5,
                    padding: {
                      xs: 2, 
                      sm: 3,
                      md: 4,
                    },
                    textAlign: {
                      xs: "center",
                      sm: "left",
                    },
                    "&:hover": {
                      " & .main, & .sub": {
                        color: "#fff",
                      },
                    },
                  }}>
                  <motion.div variants={fadeUp}>
                    <Typography
                      variant='h5'
                      fontWeight='bold'
                      color='#A9EA2E'
                      fontFamily='Figtree'
                      sx={{
                        textAlign: {
                          xs: "center",
                          sm: "left",
                        },
                      }}
                      >
                      Why Choose Us?
                    </Typography>
                  </motion.div>
                  {[
                    "No delays",
                    "No hidden fees",
                    "Secure, fast, and hassle-free",
                  ].map((text, index) => (
                    <motion.div variants={fadeUp}>
                      <Box
                        key={index}
                        sx={{
                          display: "flex",
                          flexDirection: { xs: "column", sm: "row" },
                          textAlign: { xs: "center", sm: "flex-start" },
                          alignItems: {
                            xs: "center",
                            sm: "flex-start",
                          },
                          justifyContent: {
                            xs: "center",
                            sm: "flex-start",
                          },
                          gap: 1,
                        }}
                        mt={index === 0 ? 2 : 1}>
                        <motion.div
                          animate={{ rotate: hovered ? 180 : 0 }}
                          transition={{ duration: 0.9, ease: "linear" }}
                          style={{ display: "inline-block" }}>
                          <svg
                            width='20'
                            height='21'
                            viewBox='0 0 20 21'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'>
                            <path
                              fillRule='evenodd'
                              clipRule='evenodd'
                              d='M19 10.5C12.75 10.5 10 13.4028 10 20C10 13.4028 7.25 10.5 1 10.5C7.25 10.5 10 7.59722 10 1C10 7.59722 12.75 10.5 19 10.5Z'
                              stroke='#A9EA2E'
                              strokeWidth='2'
                              strokeLinejoin='round'
                            />
                          </svg>
                        </motion.div>
                        <Typography
                          className='main'
                          fontWeight='bold'
                          marginLeft={2}>
                          {text}
                        </Typography>
                        <Typography
                          className='sub'
                          sx={{
                            color: "#FFFFFF99",
                            transition: "color 0.6s ease",
                            fontWeight: 500,
                            fontFamily: "Figtree",
                          }}
                          ml={1}>
                          {index === 0
                            ? "Instant transactions processed in real-time."
                            : index === 1
                            ? "Transparent pricing, no surprises."
                            : "A seamless experience for all users."}
                        </Typography>
                        </Box>
                    </motion.div>
                  ))}
                </Box>
              </motion.div>
            </Box>
            <motion.div variants={fadeUp}>
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
                  width: {
                    xs: "100%",   
                    sm: "100%",   
                    md: "auto",   
                  },
                  zIndex: 1,
                  bgcolor: "#000"
                }}>
                <ShineBorder
                className="custom-shine-border bgColor"
                  color={["#A7E92D","#c2f06e"]}
                >
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
                                10 +
                                (globalYouSell?.toString().length || 0) * 15
                              }px`,
                              color: "#11111180",
                              fontSize: "1.5rem",
                            }}
                          />
                          <TextField
                            type='text'
                            variant='outlined'
                            inputMode='numeric'
                            value={globalYouSell}
                            onChange={handleYouSellInputChange}
                            error={error}
                            helperText={error ? "Maximum value is 500" : " "}
                            inputProps={{
                              style: {
                                textAlign: "right",
                                fontSize: "1.5rem",
                                fontWeight: 600,
                                color: "#111",
                              },
                            }}
                            sx={{ "& fieldset": { border: "none" } }}
                          />
                        </Box>
                      </Box>
                      <Typography
                        variant='body2'
                        sx={{
                          display: "flex",
                          alignItems: "center",
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
                  <FaInfoCircle /> 1 USDT = ₹ {rates?.inrRateOfframp || ""} INR
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
                    "&:hover": {
                      backgroundColor: "#A9EA2E",
                      color: "#000",
                      border: "none",
                    },
                  }}
                  onClick={handleProceed}>
                  Convert now
                  <NorthEastIcon />
                </Button>   
                </ShineBorder>
              </Box>
            </motion.div>
          </Box>
        </motion.div>
      </AnimatePresence>
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
