import { Box, Typography } from "@mui/material";
import React from "react";
import Marquee from "react-fast-marquee";
import pnb from "../../assets/627ccea41b2e263b45696abd.png";
import idfc from "../../assets/idfc-first-bank8846.jpg";
import hdfc from "../../assets/627bad8a8d659819b1108503 (1).png";
import bob from "../../assets/svg-symbol-logo-of-bank-of-baroda-11563202073tr07cjozio-removebg-preview.png";
import sbi from "../../assets/sbi.jpg";
import kotak from "../../assets/Kotak_Mahindra_Bank_logo-700x207.png";

const Company = () => {
  return (
    <Box
    sx={{
      background: `#111`,
      minHeight: "50vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      padding:"5px",
      paddingTop:"20px",
    }}>
    <Typography variant="h4" color="white" sx={{fontFamily:"Figtree",fontWeight:700,paddingX:{xs:1,sm:0}}}>
    Trusted by India’s Leading Banks
    </Typography>
    <Typography variant="body1" color="#FFFFFF80" mt={1} sx={{fontFamily:"Figtree",fontWeight:500}}>
    Powering seamless USDT off-ramp with India’s most trusted banking partners.
    </Typography>
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        padding :{xs:2,md:0},
        gap: { xs: "30px", sm: "50px", md: "70px", lg: "90px" }, 
        marginTop: "30px",
        width: "100%",
      }}>
        <Marquee 
      pauseOnHover 
      gradient={false} 
      speed={100}
      style={{ marginTop: "30px", width: "100%",gap:10 }}
    >
      <img src={idfc} alt="idfc" style={{ width: "120px", height: "45px",borderRadius:"5px",margin: "0 50px" }} />
      <img src={pnb} alt="pnb" style={{ width: "120px", height: "120px",color:"white",margin: "0 50px" }} />
      <img src={bob} alt="bob" style={{ width: "120px", height: "40px",backgroundColor:"white",borderRadius:"5px",margin: "0 50px"  }} />
      <img src={sbi} alt="sbi" style={{ width: "120px", height: "45px",borderRadius:"5px",margin: "0 50px" }} />
      <img src={kotak} alt="kotak" style={{ width: "140px", height: "40px",backgroundColor:"white",borderRadius:"5px",margin: "0 50px" }} />
      <img src={hdfc} alt="hdfc" style={{ width: "190px", height: "40px",borderRadius:"5px",margin: "0 50px" }} />
    </Marquee>
    </Box>
  </Box>
  
  
  );
};

export default Company;
