import { Box, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const TermCondition = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <Box
      sx={{
        background:
          "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(169, 234, 46, 0.1) 100%)",
        color: "#fff",
        padding: { xs: "20px", sm: "30px", md: "40px" },
        paddingLeft: { xs: "20px", sm: "40px", md: "60px" },
        paddingRight: { xs: "20px", sm: "40px", md: "60px" },
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        backdropFilter: "blur(100px)",
        WebkitBackdropFilter: "blur(100px)",
      }}>
      <Box sx={{ maxWidth: { xs: "100%", sm: "600px" }, mb: 4 }}>
        <Typography
          variant='h4'
          fontWeight='700'
          fontSize={{ xs: "36px", sm: "48px", md: "60px" }}
          color='#FFFFFF'
          fontFamily='Figtree'>
          Terms & Conditions
        </Typography>
        <Typography
          variant='body1'
          fontWeight='400'
          fontSize={{ xs: "16px", sm: "18px", md: "20px" }}
          fontFamily='Figtree'
          color='#FFFFFF80'
          sx={{ mt: 1, opacity: 0.8 }}>
          Published and Effective as of March 13, 2025
        </Typography>
      </Box>

      <Typography
        variant='h6'
        fontWeight='600'
        fontFamily='Figtree'
        fontSize={{ xs: "14px", sm: "16px", md: "18px" }}
        color='#FFFFFF80'
        textTransform='uppercase'
        sx={{ opacity: 0.8, mb: 3 }}>
        Welcome to usdt marketplace. These Terms and Conditions ("Terms") govern
        your use of our website and services related to USDT to INR conversion.
        By accessing or using our services, you agree to be bound by these
        Terms.
      </Typography>

      <Box>
        {[
          {
            title: "ELIGIBILITY",
            content:
              "You must be at least 18 years old and capable of entering into legally binding agreements to use our services. By using our platform, you confirm that you meet these requirements.",
          },
          {
            title: "ACCOUNT REGISTRATION",
            content:
              "To access certain features, you may be required to create an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.",
          },
          {
            title: "SERVICES",
            content:
              "Our platform facilitates the exchange of USDT (Tether) to INR. We do not provide financial, investment, or legal advice. Users must conduct their own due diligence before engaging in any transactions.",
          },
          {
            title: "FEES AND CHARGES",
            content:
              "We may charge fees for transactions. These fees will be displayed at the time of the transaction and are subject to change. Users are responsible for any additional charges imposed by their financial institutions.",
          },
          {
            title: "PROHIBITED ACTIVITIES",
            content:
              "You agree not to: \n- Use our platform for illegal or fraudulent activities. \n- Violate any applicable laws or regulations. \n- Engage in money laundering, terrorist financing, or any illicit financial activities. \n- Attempt to interfere with or disrupt our services.",
          },
          {
            title: "RISK DISCLOSURE",
            content:
              "Cryptocurrency transactions involve significant risks, including price volatility and potential loss of funds. You acknowledge and accept these risks before using our platform.",
          },
          {
            title: "PRIVACY POLICY",
            content:
              "Your use of our services is also governed by our Privacy Policy, which outlines how we collect, use, and protect your personal data.",
          },
          {
            title: "TERMINATION",
            content:
              "We reserve the right to suspend or terminate your access to our services at any time for violations of these Terms or other misconduct.",
          },
          {
            title: "LIMITATION OF LIABILITY",
            content:
              "We are not liable for any direct, indirect, incidental, or consequential damages arising from your use of our services. Our liability is limited to the amount of fees paid by you for the specific transaction in question.",
          },
          {
            title: "INDEMNIFICATION",
            content:
              "You agree to indemnify and hold us harmless from any claims, damages, losses, or liabilities arising from your use of our platform.",
          },
          {
            title: "GOVERNING LAW",
            content:
              "These Terms are governed by and interpreted in accordance with the laws of [Your Jurisdiction]. Any disputes shall be resolved through arbitration or the appropriate courts.",
          },
          {
            title: "CHANGES TO THESE TERMS",
            content:
              "We reserve the right to modify these Terms at any time. Changes will be posted on our website, and continued use of our services constitutes acceptance of the revised Terms.",
          },
        ].map((section, index) => (
          <Box key={index} sx={{ mb: 2 }}>
            <Typography
              variant='subtitle1'
              fontWeight='600'
              fontFamily='Figtree'
              fontSize={{ xs: "16px", sm: "18px" }}>
              {section.title}
            </Typography>
            <Typography
              textTransform='uppercase'
              color='#FFFFFF90'
              fontSize={{ xs: "12px", sm: "14px" }}
              sx={{ opacity: 0.8, mb: 3 }}>
              {section.content}
            </Typography>
          </Box>
        ))}
        <Box sx={{ mt: 4 }}>
          <Typography
            variant='body2'
            fontWeight='500'
            fontSize={{ xs: "14px", sm: "18px", md: "20px" }}
            fontFamily='Figtree'
            color='#FFFFFF80'
            sx={{ mt: 1, opacity: 0.8 }}>
            To contact our support team and access helpful resources, log in at{" "}
            <Link
              href='#'
              target=''
              style={{
                color: "#C8FF57",
                fontWeight: "bold",
                textDecoration: "none",
              }}>
              usdtmarketplace.com/support
            </Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default TermCondition;
