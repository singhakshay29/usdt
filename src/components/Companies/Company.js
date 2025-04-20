import { Box, Typography } from "@mui/material";
import React from "react";
import Marquee from "react-fast-marquee";
import union from "../../assets/Union Bank.svg";
import sbi from "../../assets/SBI.svg";
import icici from "../../assets/ICICI.svg";
import indusland from "../../assets/IndusInd.svg";
import pnb from "../../assets/PNB.svg";
import kotak from "../../assets/Kotak Mahindra.svg";
import bob from "../../assets/bob.svg";
import canara from "../../assets/Canara.svg";
import hdfc from "../../assets/HDFC.svg";
import indian from "../../assets/Indian.svg";
import citi from "../../assets/Citi.svg";
import { motion, AnimatePresence } from "framer-motion";
import {containerVariants, fadeUp} from "../Ui/animationVariants";
import HoverText from "../Ui/HoverText/HoverText";

const Company = () => {
  return (
    <AnimatePresence>
      <motion.div
        variants={containerVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.1 }}>
        <Box
          sx={{
            background: `#111`,
            minHeight: "60vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: "5px",
          }}>
            <Box sx={{
              "&:hover": {
                    " & .sub": {
                      color: "#fff",
                    },
                  },}}>
          <motion.div variants={fadeUp}>
            <Box
              color='white'
              sx={{
                fontFamily: "Figtree",
                fontWeight: 700,
                paddingX: { xs: 1, sm: 0 },
                fontSize:{xs:"36px",sm:"30px"},
                cursor:"grab",
              }}>
                <HoverText> Trusted by India’s Leading Banks </HoverText>
            </Box>
          </motion.div>
          <motion.div variants={fadeUp}>
            <Typography
            className="sub"
              variant='body1'
              color='#FFFFFF80'
              mt={1}
              sx={{ fontFamily: "Figtree", fontWeight: 500,transition: "color 0.6s ease", }}>
              Powering seamless USDT off-ramp with India’s most trusted banking
            </Typography>
          </motion.div>
            </Box>
          <Box
            sx={{
              position: "relative",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
              padding: { xs: 2, md: 0 },
              gap: { xs: "30px", sm: "50px", md: "70px", lg: "90px" },
              marginTop: "30px",
              width: "90%",
            }}>
            <Box
              sx={{
                position: "absolute",
                left: 0,
                top: 0,
                width: "160px",
                height: "100%",
                zIndex: 2,
                background:
                  "linear-gradient(to right, #111 0%, rgba(17, 17, 17, 0) 100%)",
              }}
            />
            <Box
              sx={{
                position: "absolute",
                right: 0,
                top: 0,
                width: "160px",
                height: "100%",
                zIndex: 2,
                background:
                  "linear-gradient(to left, #111 0%, rgba(17, 17, 17, 0) 100%)",
              }}
            />
            <Marquee
              pauseOnHover
              gradient={true}
              gradientColor={[17, 17, 17]}
              gradientWidth={150}
              speed={100}
              style={{ marginTop: "30px", width: "100%"}}>
              {[
                { src: citi, alt: "citi", width: 150 },
                { src: sbi, alt: "sbi", width: 100 },
                { src: bob, alt: "bob", width: 160 },
                { src: pnb, alt: "pnb", mt: "30px" },
                { src: icici, alt: "icici", width: 180 },
                { src: indusland, alt: "indusland", width: 220 },
                { src: canara, alt: "canara", width: 200 },
                { src: union, alt: "union", width: 190 },
                { src: kotak, alt: "kotak", width: 160 },
                { src: hdfc, alt: "hdfc", width: 190 },
                { src: indian, alt: "indian", width: 190 },
              ].map((logo, index) => (
                <Box
                  key={index}
                  sx={{
                    height: { xs: 60, sm: 70 },
                    marginX: { xs: 2, sm: 4 },
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    objectFit: "contain",
                  }}>
                  <Box
                    component='img'
                    src={logo.src}
                    alt={logo.alt}
                    sx={{
                      width: logo.width,
                      height: "auto",
                      maxHeight: "100%",
                      objectFit: "contain",
                    }}
                  />
                </Box>
              ))}
            </Marquee>
          </Box>
        </Box>
      </motion.div>
    </AnimatePresence>
  );
};

export default Company;
