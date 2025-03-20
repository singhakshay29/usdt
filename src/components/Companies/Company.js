import { Box, Typography } from "@mui/material";
import React from "react";
import upi from "../../assets/upi-icon.png";
import phonepe from "../../assets/phonePe.png";
import visa from "../../assets/visa.png";
import gpay from "../../assets/gpay.png";
import rupay from "../../assets/Rupay.png";
import master from "../../assets/mastercard.png";
import paytm from "../../assets/paytm.png";

const Company = () => {
  return (
    <Box
    sx={{
      background: `linear-gradient(
        180deg, 
        #A9EA2E 0%, 
        rgba(85, 117, 23, 0.5) 43.61%, 
        rgba(42, 59, 12, 0.25) 71.56%, 
        #00000000
      )`,
      minHeight: "50vh",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      padding: "20px",
    }}>
    <Typography variant="h4" fontWeight="bold" color="white">
      Trusted by Leading Companies
    </Typography>
    <Typography variant="body1" color="#FFFFFF80" mt={1}>
      Top companies trust us for efficiency, reliability, and innovation.
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
      <img src={upi} alt="UPI" style={{ width: "80px", height: "80px",color:"white" }} />
      <img src={phonepe} alt="PhonePe" style={{ width: "150px", height: "70px" }} />
      <img src={visa} alt="VISA" style={{ width: "120px", height: "120px" }} />
      <img src={gpay} alt="GPay" style={{ width: "100px", height: "50px" }} />
      <img src={rupay} alt="RuPay" style={{ width: "110px", height: "70px" }} />
      <img src={master} alt="MasterCard" style={{ width: "100px", height: "70px" }} />
      <img src={paytm} alt="Paytm" style={{ width: "100px", height: "50px" }} />
    </Box>
  </Box>
  
  
  );
};

export default Company;
