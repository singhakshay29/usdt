import { Box, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
const termsConditionsSections = [
  {
    title: "General Information",
    subsections: [
      {
        title: "1. About USDT Marketplace",
        bulletPoints: [
          "GSX Solutions PVT, Delhi, India, is the owner and operator of the USDT Marketplace brand and website.",
          " We provide stablecoin (USDT) to INR conversion services for verified users in India.",
          "Our services comply with Indian financial regulations and AML/KYC requirements.",
        ],
      },
      {
        title: "2. Eligibility to Use Our Services ",
        content: "To use USDT Marketplace, you must:",
        bulletPoints: [
          "Be at least 18 years old.",
          "Be a resident of India with a valid bank account.",
          "Not be on any sanctions list or involved in illegal activities.",
        ],
      },
    ],
    bottomContent:
      "Accounts failing to meet these requirements may be suspended or restricted.",
  },
  {
    title: "Services Provided",
    content: "We offer a USDT to INR off-ramping service, allowing users to:",
    subsections: [
      {
        bulletPoints: [
          "Sell USDT (Tether) at real-time exchange rates.)",
          "Receive INR payouts directly in their bank accounts.",
          "Access a secure and fast conversion process",
        ],
      },
    ],
  },
  {
    title: "User Responsibilities",
    content: "By using USDT Marketplace, you agree to:",
    subsections: [
      {
        bulletPoints: [
          "Provide accurate and truthful information during registration.",
          "Complete KYC verification before making transactions.",
          "Comply with all applicable laws and regulations in India.",
          "Not use our services for money laundering, fraud, or illegal activities.",
        ],
      },
    ],
    bottomContent:
      " Violations may result in account termination, legal action, or reporting to authorities.",
  },
  {
    title: "Fees & Exchange Rates",
    bulletPoints: [
      "Exchange rates for USDT to INR are dynamic and updated in real-time.",
      "We do not charge hidden fees; all applicable fees are displayed before confirming a transaction.",
      "Always check the displayed rate before completing a transaction.",
    ],
  },
  {
    title: "Transactions & Processing Times",
    subsections: [
      {
        title: "1. Transaction Limits",
        bulletPoints: [
          "Minimum and maximum transaction limits apply based on KYC verification level.",
          "GSX Solutions may adjust limits based on risk assessment and regulatory requirements.",
        ],
      },
      {
        title: "2. Processing Times",
        bulletPoints: [
          "Most transactions are completed within 5-15 minutes.",
          "Delays may occur due to:",
          "Bank processing times.",
          "High network congestion.",
          "Additional verification checks.",
        ],
      },
    ],
  },
  {
    title: "Refund & Cancellation Policy",
    subsections: [
      {
        title: "1. No Refunds on Completed Transactions",
        bulletPoints: [
          "All transactions are final once processed.",
          "USDT Marketplace does not provide refunds for completed transactions.",
        ],
      },
      {
        title: "2. Failed Transactions & Refunds",
        content: "Refunds will only be issued if:",
        bulletPoints: [
          "A transaction fails due to a technical issue on our platform.",
          "The INR payout is rejected by the receiving bank.",
        ],
      },
    ],
    bottomContent:
      "Refunds are processed within 3-5 business days back to the original USDT wallet.",
  },
  {
    title: "Account Suspension & Termination",
    content: "We reserve the right to suspend or terminate accounts if:",
    bulletPoints: [
      "A user provides false or fraudulent information.",
      "A user is found to be engaged in illegal activity.",
      "A user fails to comply with AML/KYC policies.",
    ],
    bottomContent:
      "Suspended accounts may be reported to financial authorities for further action.",
  },
  {
    title: "Privacy & Data Protection",
    content:
      "By using USDT Marketplace, you acknowledge and agree to our Privacy Policy, which outlines:",
    bulletPoints: [
      "How we collect, store, and protect your personal data.",
      "Your rights to access, modify, or delete your personal information.",
      "How we comply with Indian data protection laws.",
    ],
    bottomContent:
      "We never sell or rent your data. All transactions are encrypted for security.",
  },
  {
    title: "Legal Compliance & AML/KYC Requirements",
    bulletPoints: [
      "GSX Solutions complies with AML (Anti-Money Laundering) and KYC (Know Your Customer) regulations.",
      "Users must complete identity verification before making any transaction.",
      "Suspicious activities will be reported to regulatory authorities (FIU-IND, RBI, etc.).",
    ],
    bottomContent: "For more details, refer to our AML/KYC Policy page.",
  },
  {
    title: "Liability Disclaimer",
    content: "By using USDT Marketplace, you agree that:",
    bulletPoints: [
      "We do not provide financial or investment advice.",
      "We are not responsible for financial losses due to user errors (e.g., incorrect wallet addresses, mistyped bank details).",
      "We do not guarantee 100% uptime or uninterrupted service due to external dependencies.",
    ],
    bottomContent:
      "Users should ensure they understand the risks before transacting.",
  },
  {
    title: "Intellectual Property Rights",
    bulletPoints: [
      "All content, logos, and trademarks on USDT Marketplace are owned by GSX Solutions PVT.",
      "Users may not copy, modify, or redistribute content without permission.",
      "Unauthorized use of our branding or materials may lead to legal action.",
    ],
  },
  {
    title: "External Links & Third-Party Services",
    bulletPoints: [
      "Our website may contain links to third-party services (e.g., payment providers, banking partners).",
      "We are not responsible for third-party content, policies, or security practices.",
    ],
  },
  {
    title: "Changes to These Terms",
    bulletPoints: [
      "GSX Solutions reserves the right to update or modify these Terms at any time.",
      "Users will be notified of significant changes via email or on the website.",
      "Continued use of the platform after updates implies acceptance of the revised terms.",
    ],
  },
  {
    title: "Check this page regularly for the latest version.",
  },
  {
    title: "Governing Law & Dispute Resolution",
    bulletPoints: [
      "These Terms are governed by Indian law.",
      "Disputes will be settled through arbitration in Delhi, India.",
      "Users waive the right to participate in class-action lawsuits against GSX Solutions.",
    ],
  },
];

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
        mt: 15,
        px: { xs: 3, sm: 6, md: 8 },
        minHeight: "100vh",
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
          fontWeight='500'
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
        fontSize={{ xs: "14px", sm: "18px", md: "22px" }}
        color='#FFFFFF80'
        sx={{ opacity: 0.8, mb: 3 }}>
        Welcome to USDT Marketplace. These terms and conditions govern your use
        of the USDTMarketplace website, operated by GSX Solutions PVT, Delhi,
        India (“Company,” “we,” “our,”“us”).
        <br />
        By accessing and using this website (
        <span style={{ color: "#C8FF57" }}>www.usdtmarketplace.com</span>), you
        agree to comply with these Terms and Conditions. If you do not agree,
        please do not use our services.
      </Typography>

      {termsConditionsSections.map((section, index) => (
        <Box key={index}>
          <Typography
            variant='subtitle1'
            fontWeight='700'
            fontFamily='Figtree'
            mt={4}
            sx={{
              fontSize: "24px",
              "@media (max-width: 768px)": { fontSize: "22px" },
              "@media (max-width: 480px)": { fontSize: "20px" },
            }}>
            {section.title}
          </Typography>

          {section.content && (
            <Typography
              color='#FFFFFF90'
              fontWeight='600'
              fontFamily='Figtree'
              sx={{
                opacity: 0.9,
                fontSize: "18px",
                "@media (max-width: 768px)": { fontSize: "16px" },
                "@media (max-width: 480px)": { fontSize: "14px" },
              }}>
              {section.content}
            </Typography>
          )}

          {section.bulletPoints && (
            <Box
              component='ul'
              sx={{
                pl: 2,
                mt: 0,
                mb: 0,
                pt: 0,
                color: "#FFFFFF90",
                listStyle: "disc",
              }}>
              {section.bulletPoints.map((item, idx) => (
                <li key={idx}>
                  <Typography
                    component='span'
                    fontFamily='Figtree'
                    fontWeight='500'
                    sx={{
                      fontSize: "16px",
                      "@media (max-width: 480px)": { fontSize: "13px" },
                    }}>
                    {item}
                  </Typography>
                </li>
              ))}
            </Box>
          )}

          {section.subsections &&
            section.subsections.map((sub, subIdx) => (
              <Box key={subIdx} sx={{ ml: 2 }}>
                <Typography
                  fontWeight='700'
                  fontSize='18px'
                  fontFamily='Figtree'
                  sx={{ color: "#FFFFFF90" }}>
                  {sub.title}
                </Typography>
                <Typography
                  color='#FFFFFF90'
                  fontWeight='600'
                  fontSize='18px'
                  fontFamily='Figtree'
                  sx={{
                    opacity: 0.9,
                    pl: 2,
                    "@media (max-width: 768px)": { fontSize: "15px" },
                    "@media (max-width: 480px)": { fontSize: "14px" },
                  }}>
                  {sub.content}
                </Typography>
                <Box
                  component='ul'
                  sx={{
                    pl: 2,
                    mt: 0,
                    mb: 0,
                    pt: 0,
                    color: "#FFFFFF90",
                    listStyle: "disc",
                  }}>
                  {sub.bulletPoints?.map((point, pIdx) => (
                    <li key={pIdx}>
                      <Typography
                        component='span'
                        sx={{
                          fontSize: "16px",
                          fontWeight: "600",
                          fontFamily: "Figtree",
                        }}>
                        {point}
                      </Typography>
                    </li>
                  ))}
                </Box>
              </Box>
            ))}

          {section.bottomContent && (
            <Typography
              color='#FFFFFF90'
              fontFamily='Figtree'
              fontWeight='600'
              sx={{
                opacity: 0.9,
                fontSize: "16px",
                "@media (max-width: 768px)": { fontSize: "15px" },
                "@media (max-width: 480px)": { fontSize: "14px" },
              }}>
              {section.bottomContent}
            </Typography>
          )}

          {section.extraSubsection && (
            <Box>
              <Typography
                fontWeight='600'
                fontSize='16px'
                fontFamily='Figtree'
                sx={{ color: "#FFFFFF90" }}>
                {section.extraSubsection.title}
              </Typography>
              <Box
                component='ul'
                sx={{
                  pl: 2,
                  mt: 0, 
                  mb: 0,
                  pt: 0,
                  color: "#FFFFFF90",
                  listStyle: "disc", 
                }}>
                {section.extraSubsection.bulletPoints.map((point, idx) => (
                  <li key={idx}>
                    <Typography component='span' sx={{ fontSize: "14px" }}>
                      {point}
                    </Typography>
                  </li>
                ))}
              </Box>
              {section.extraSubsection.bottomContent && (
                <Typography
                  color='#FFFFFF90'
                  sx={{
                    opacity: 0.9,
                    "@media (max-width: 768px)": { fontSize: "15px" },
                    "@media (max-width: 480px)": { fontSize: "14px" },
                  }}>
                  {section.extraSubsection.bottomContent}
                </Typography>
              )}
            </Box>
          )}
        </Box>
      ))}

      <Box sx={{ mt: 4, mb: 8 }}>
        <Typography
          fontWeight='600'
          fontSize='17px'
          fontFamily='Figtree'
          color='#FFFFFF'
          sx={{ mt: 1 }}>
          For any queries related to Terms & Conditions, please contact:
        </Typography>
        <Typography
          variant='body2'
          fontWeight='600'
          fontSize='16px'
          fontFamily='Figtree'
          sx={{ color: "#C8FF57" }}>
          Email:{" "}
          <Link
            href='mailto:legal@usdtmarketplace.com'
            style={{
              color: "#C8FF57",
              fontWeight: "bold",
              textDecoration: "none",
            }}>
            support@usdtmarketplace.com
          </Link>
        </Typography>
        <Typography
          sx={{
            mt: 2,
            fontSize: "16px",
            color: "#FFFFFFA0",
            fontWeight: "500",
            fontFamily: "Figtree",
          }}>
          Thank you for trusting USDT MARKETPLACE with your information.
        </Typography>
      </Box>
    </Box>
  );
};

export default TermCondition;
