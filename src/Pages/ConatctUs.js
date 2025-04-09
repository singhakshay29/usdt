import React, { useEffect, useState } from "react";
import { Box, Typography, TextField, Button, Link } from "@mui/material";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isFocusedOne, setIsFocusedOne] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const isValidData = name.length > 0 && email.length > 0;
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <Box
      sx={{
        background:
          "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(169, 234, 46, 0.1) 100%)",
        color: "#fff",
        px: { xs: 3, sm: 6, md: 8 },
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        backdropFilter: "blur(100px)",
        WebkitBackdropFilter: "blur(100px)",
      }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: "center",
        }}>
        <Box
          sx={{
            maxWidth: { xs: "100%", md: "600px" },
            mb: { xs: 4, md: 0 },
            textAlign: { xs: "center", md: "left" },
          }}>
          <Typography
            variant='h4'
            fontWeight='700'
            fontSize={{ xs: "40px", sm: "50px", md: "60px" }}
            color='#FFFFFF'
            fontFamily='Figtree'>
            Contact Us
          </Typography>
          <Typography
            variant='body1'
            fontWeight='500'
            fontSize={{ xs: "16px", sm: "18px", md: "20px" }}
            fontFamily='Figtree'
            color='#FFFFFF80'
            sx={{ mt: 1, opacity: 0.8 }}>
            Need help with something? Our support team is available to answer
            your questions and assist you with any issues you face.
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            minWidth: { xs: "100%", sm: "400px" },
          }}>
          <TextField
            type='text'
            id='name'
            value={name}
            onFocus={() => setIsFocusedOne(true)}
            onBlur={(e) => {
              if (!e.currentTarget.parentNode.contains(e.relatedTarget)) {
                setIsFocusedOne(false);
              }
            }}
            onChange={(e) => setName(e.target.value)}
            placeholder='Enter your Name'
            autoComplete='off'
            variant='outlined'
            fullWidth
            InputProps={{
              sx: {
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                color: "white",
                borderRadius: "8px",
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#FFFFFF33",
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#FFFFFF33",
                },
                "& input": { fontSize: "14px", fontWeight: 500 },
                "&::placeholder": { color: "rgba(255, 255, 255, 0.6)" },
              },
            }}
          />
          <TextField
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            placeholder='Email Id'
            variant='outlined'
            InputProps={{
              sx: {
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                color: "white",
                borderRadius: "8px",
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#FFFFFF33",
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#FFFFFF33",
                },
                "& input": { fontSize: "14px", fontWeight: 500 },
                "&::placeholder": { color: "rgba(255, 255, 255, 0.6)" },
              },
            }}
          />
          <TextField
            fullWidth
            placeholder='What can we help you with?'
            variant='outlined'
            multiline
            rows={3}
            InputProps={{
              sx: {
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                color: "white",
                borderRadius: "8px",
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#FFFFFF33",
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#FFFFFF33",
                },
                "& input": { fontSize: "14px", fontWeight: 500 },
                "&::placeholder": { color: "rgba(255, 255, 255, 0.6)" },
              },
            }}
            InputLabelProps={{ sx: { color: "#bbb" } }}
          />
          <Button
            type='submit'
            fullWidth
            variant='button'
            sx={{
              height: { xs: "40px", sm: "44px" },
              mt: 2,
              fontSize: "14px",
              fontWeight: 500,
              borderRadius: "8px",
              transition: "all 0.3s ease-in-out",
              color: "black",
              cursor: isSubmitting
                ? "wait"
                : isValidData
                ? "pointer"
                : "not-allowed",
              backgroundColor: isValidData
                ? "#98D429"
                : "rgba(255, 255, 255, 0.5)",
            }}>
            {isSubmitting ? "Submitting..." : "Submit"}
          </Button>
        </Box>
      </Box>

      <Box sx={{ mt: 4, textAlign: { xs: "center", md: "left" } }}>
        <Typography
          variant='body2'
          fontWeight='500'
          fontSize={{ xs: "16px", sm: "18px", md: "20px" }}
          fontFamily='Figtree'
          color='#FFFFFF80'
          sx={{ mt: 1, opacity: 0.8 }}>
          To contact our support team and access helpful resources, log in at{" "}
          <Link
            href='https://usdtmarketplace.com/support'
            target='_blank'
            sx={{
              color: "#C8FF57",
              fontWeight: "bold",
              textDecoration: "none",
            }}>
            usdtmarketplace.com/support
          </Link>
          .
          <br />
          Having trouble accessing your account?{" "}
          <Link
            href='#'
            sx={{
              color: "#C8FF57",
              fontWeight: "bold",
              textDecoration: "none",
            }}>
            Submit a ticket.
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default ContactUs;
