import React from "react";
import { Box, Typography, Button, TextField } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import bg from "../assets/offBg.jpeg";

const OffRampSection = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        backgroundColor: "#000",
        color: "#fff",
        padding: "40px",
        gap: "20px",
      }}
    >
      {/* Left Section - Image with Text Overlay */}
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
        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        />
        <Box sx={{ position: "relative", padding:"30px",textAlign: "left",maxWidth:"500px" }}>
          <Typography variant="h5" fontWeight="600"  fontSize="40px" fontFamily='Figtree'>
            Ready to Off-Ramp Your USDT?
          </Typography>
          <Typography variant="body1" fontWeight="500"  fontSize="20px" fontFamily='Figtree' color="#FFFFFF80" sx={{ mt: 1, opacity: 0.8 }}>
            Start converting your USDT to INR instantly with secure, hassle-free
            transactions.
          </Typography>
          <Button
            variant="contained"
            endIcon={<ArrowForwardIcon />}
            sx={{
              mt: 2,
              color: "#fff",
              background:"transparent",
              border:"2px solid #fff",
              borderRadius:"10px",
              "&:hover": { backgroundColor: "#ddd" },
            }}
          >
            Start Converting Now
          </Button>
        </Box>
      </Box>

      {/* Right Section - Newsletter */}
      <Box
        sx={{
          flex: 1,
          backgroundColor: "#C8FF57",
          borderRadius: "12px",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          minHeight: "200px",
          maxWidth:"350px"
        }}
      >
        <Typography variant="h6" fontWeight="600" color="#191919"  fontSize="32px" fontFamily='Figtree' maxWidth="250px">
          Subscribe to our newsletter
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <TextField
            fullWidth
            placeholder="your@email.com"
            variant="standard"
            InputProps={{
              disableUnderline: true,
              sx: { backgroundColor: "#C8FF57", borderRadius: "5px", padding: "8px" },
            }}
          />
          <Button
            sx={{ minWidth: "40px", color: "#000" }}
          >
            <ArrowForwardIcon />
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default OffRampSection;
