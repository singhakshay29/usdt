import { Box, Grid, Typography } from "@mui/material";
import stepOne from "../assets/Iphone 14 - 2.svg";
import stepTwo from "../assets/Iphone 14Two.svg";
import correct from "../assets/green.png";
import stepThree from "../assets/Iphone 14Three.svg";
import { motion, AnimatePresence } from "framer-motion";
import convert from "../assets/Transfer.png";
import search from "../assets/searchLens.png";
import { containerVariants, fadeUp } from "../components/Ui/animationVariants";
import {GradualSpacing} from "../components/Ui/Gradualspacing/Gradualspacing";
import FlipText from "../components/Ui/FlipText/FlipText";
import HoverText from "../components/Ui/HoverText/HoverText";
import flowerBg from "../assets/payoutBg.jpeg";

const steps = [
  {
    step: "STEP 1",
    title: "Quick Verification",
    description:
    "Verify Your Identity in Seconds – Secure & Hassle-Free KYC.",
    textImg:search, 
    textImgWidth:"6%",
    img: stepOne,
  },
  {
    step: "STEP 2",
    title: "Get the Best Rate",
    description:
    "Get the Best USDT to INR Rate – Live Pricing, No Hidden Fees",
    textImg:convert,
    textImgWidth:"12%",
    img: stepTwo,
  },
  {
    step: "STEP 3",
    title: "Receive Your Payment",
    description: "   INR Deposited Instantly –   No Delays, No Hassle",
    textImg:correct,
    textImgWidth:"8%",
    img: stepThree,
  },
];


const backgroundVariant = {
  rest: {
    top: "calc(100% - 400px)", 
    height: "400px",
  },
  hover: {
    top: 0,
    height: "100%",
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const phoneImageVariant = {
  rest: { filter: "grayscale(30%)", scale: 1 },
  hover: {
    filter: "grayscale(0%)",
    scale: 1.09,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

const textVariants = {
  rest: { opacity: 1, x: 0, },
  hover: { opacity: 1,x: 150, transition: { duration: 0.9 } },
};

const titleVariants = {
  rest: { letterSpacing: "0px", color: "#000",x: 0,},
  hover: {
    letterSpacing: "1px",
    color: "#04befe",
    x: 70,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

const descVariants = {
  rest: { x: 0, opacity: 1, color: "#00000099", },
  hover: {
    x: 5,
    opacity: 1,
    color:"#000",
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const PayoutSteps = () => {
  return (
    <AnimatePresence>
      <motion.div
        variants={containerVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.1 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            background: "#111",
          }}>
          <Box sx={{ maxWidth: "900px" }}>
            <motion.div variants={fadeUp}>
              <Typography
                variant='body2'
                color='#A9EA2E'
                fontWeight='500'
                fontFamily='Figtree'
                display='flex'
                alignItems='center'
                justifyContent='center'
                fontSize={{ xs: "15px", sm: "16px" }}
               >
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
                <FlipText> FAST & SECURE KYC</FlipText>
              </Typography>
            </motion.div>
            <motion.div variants={fadeUp}>
              <Typography
                variant='h4'
                fontWeight='700'
                color='white'
                mt={1}
                maxWidth='900px'
                fontFamily='Figtree'
                sx={{ px: { xs: 1, sm: 3, md: 0 }, gap: { xs: 2, md: 3 },cursor:"grab" }}>
                  <HoverText> Fast & Secure USDT to INR Payouts – Get Paid Instantly </HoverText>
              </Typography>
            </motion.div>
          </Box>
          <motion.div variants={fadeUp}>
          <Grid
            container
            spacing={3}
            sx={{ p: { xs: 2, sm: 7 } }}
            justifyContent='space-between'>
            {steps.map((step, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
               <motion.div
                  initial="rest"
                  whileHover="hover"
                  animate="rest"
                  style={{
                    position:"relative",
                    borderRadius: "16px",
                    textAlign: "left",
                    backgroundColor: "white",
                    boxShadow: 3,
                    overflow: "hidden",
                    padding:0,
                  }}>
                      <motion.img
                      src={flowerBg}
                      alt=""
                      variants={backgroundVariant}
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        zIndex: 0,
                      }}
                      />
                      <motion.div
                      variants={{}} 
                      style={{ position: "relative", zIndex: 1 }}
                      >
                        <Box sx={{ p: 1.5, height: { sm: "9rem" } }}>
                        <motion.div variants={textVariants}>
                    <Typography
                      variant='caption'
                      sx={{
                        fontWeight: "bold",
                        color: "#000",
                        fontSize:"18px",
                      }}>
                    {step.step}
                    </Typography> 
                        </motion.div>
                        <motion.div variants={titleVariants}>
                    <Typography
                      variant='h6'
                      className="title"
                      sx={{
                        fontWeight: "800",
                        color: "#000000",
                        fontFamily: "Figtree",
                        fontSize: "32px",
                        mt: 1,
                      }}>
                      <GradualSpacing text={step.title} fontSize="28px"/>
                    </Typography>
                    </motion.div>
                    <motion.div variants={descVariants}
                    style={{ display: "flex", alignItems: "center", gap: "8px" }}
                    >
                    <Box
                      component='img'
                      src={step?.textImg}
                      alt={step.title}
                      sx={{
                        width:step?.textImgWidth,
                        objectFit: "fit",
                        mt:-1,
                      }}
                    />
                    <Typography
                      variant='body2'
                      className="desc"
                      sx={{
                        fontWeight: 600,
                        fontFamily: "Figtree",
                        fontSize: "18px",
                        mt: 1,
                      }}>
                      <GradualSpacing text={step.description} />
                    </Typography>
                    </motion.div>
                    </Box>
                      </motion.div>
                  <Box
                    sx={{
                      position: "relative",
                      maxHeight: "400px",
                      borderBottomLeftRadius: "16px",
                      borderBottomRightRadius: "16px",
                      overflow: "hidden",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}>
                      <motion.img
                      src={step.img}
                      alt={step.title}
                      variants={phoneImageVariant}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        position: "relative",
                        zIndex: 1,
                      }}
                      />
                    </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
          </motion.div>
        </Box>
      </motion.div>
    </AnimatePresence>
  );
};

export default PayoutSteps;
