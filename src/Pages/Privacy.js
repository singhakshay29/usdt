import { Box, Typography } from "@mui/material";
import React, {useEffect} from "react";
import { Link } from "react-router-dom";
const privacySections = [
  {
    title: "Information We Collect",
    content: "We collect different types of personal and technical data to improve our services.",
    subsections: [
      {
        title: "1. Personal Information You Provide",
        bulletPoints: [
          "When registering an account: Name, Email, Phone Number, Date of Birth",
          "During KYC verification: Government-issued ID (Aadhaar, PAN, Passport), Bank Details, Address Proof",
          "When contacting support: Message content, attachments, and communication history",
        ],
      },
      {
        title: "2. Technical & Automated Data Collection :",
        content: "We automatically collect certain data when you visit our website, including:",
        bulletPoints: [
          "IP Address & Device Information",
          "Browser Type & Operating System",
          "Time & Date of Access",
          "Referring & Exit Pages",
          "Number of Clicks & Interaction Data",
        ],
      },
    ],
    bottomContent:
      "This helps us analyze trends, prevent fraud, and improve the user experience.",
  },
  {
    title: "How We Use Your Information",
    content: "We use the collected data for the following purposes:",
    subsections: [
      {
        bulletPoints: [
          "To Verify Identity & Prevent Fraud – Ensure secure transactions and AML compliance.",
          "To Improve Our Website & Services – Enhance website functionality based on user behavior.",
          "To Process USDT to INR Transactions – Confirm withdrawals and ensure seamless payouts.",
          "To Provide Customer Support – Respond to inquiries, resolve disputes, and assist with account issues.",
          "To Comply with Legal & Regulatory Obligations – Follow Indian financial laws and reporting requirements.",
          "Your data will never be sold or shared with third parties for marketing purposes."
        ],
      },
    ],
  },
  {
    title: "Cookies & Tracking Technologies",
    content: "Like most websites, USDT Marketplace uses cookies and similar tracking technologies to improve your experience.",
    subsections: [
      {
        title: "1. What Are Cookies?",
        content: "Cookies are small files stored on your device that help us:",
        bulletPoints: [
          "Recognize returning users",
          "Personalize website content",
          "Analyze traffic & detect security threats",
        ],
      },{
        title: "2. Managing Cookies",
        bulletPoints: [
          "You can disable cookies in your browser settings, but some features may not work properly.",
          "For more details, read our Cookie Policy.",
        ],
      },
    ]
  },
  {
    title: "Data Sharing & Third-Party Services",
    content: "We do not sell or rent your data to third parties. However, we may share your data with:",
    bulletPoints: [
      "Regulatory Authorities – If legally required by FIU-IND, RBI, or law enforcement.",
      "Banking & Payment Partners – To facilitate INR payouts.",
      "Identity Verification Providers – To process KYC compliance checks.",
    ],
    bottomContent:
    "We only share data with trusted partners that follow strict security standards.",
  },
  {
    title: "Data Protection & Security",
    content:"We use bank-grade encryption and strict security protocols to protect your personal data.",
    subsections: [
      {
        title: "1. Security Measures Implemented",
        bulletPoints: [
          "AES-256 Encryption – All sensitive data is encrypted in transit & at rest.",
          "2FA Authentication – Extra security layer for user accounts.",
          "Fraud Detection Systems – AI-powered monitoring of unusual activity.",
          "Restricted Employee Access – Only authorized staff can handle user data.",
          "Despite best efforts, no system is 100% secure. Always use strong passwords & enable 2FA"
        ],
      }
    ],
  },
  {
    title: "Your Data Protection Rights",
    content:"Under Indian data protection laws, you have the following rights:",
    bulletPoints: [
      "Right to Access – Request a copy of your personal data.",
      "Right to Correction – Request corrections to inaccurate or incomplete information.",
      "Right to Deletion – Request deletion of your account & data (subject to legal retention policies).",
      "Right to Restrict Processing – Request temporary restriction of data usage in certain cases.",
      "Right to Object – Object to how we use your data.",
    ]
  },
  {
    title: "To exercise these rights, contact us at privacy@usdtmarketplace.com.",
  },
  {
    title: "Data Retention Policy",
    bulletPoints: [
      "Transaction & KYC records are stored for 5 years, as required by AML regulations.",
      "Account data is deleted after 12 months of inactivity, unless required for compliance.",
      "Users can request account deletion via support@usdtmarketplace.com.",
    ],
  },
  {
    title: "Third-Party Services & External Links",
    bulletPoints: [
      "Our website may link to third-party platforms (e.g., payment providers, banking partners).",
      "We are not responsible for their privacy policies or security measures.",
      "Always review third-party privacy policies before sharing personal data.",
    ]
  },
  {
    title: "Children’s Privacy",
    bulletPoints: [
      "Our services are not intended for users under 18 years old.",
      "We do not knowingly collect personal data from minors.",
      "If a minor’s data is found, we will delete it immediately.",
    ],
    bottomContent:
      "Parents should monitor children’s online activities to ensure safety.",
  },
  {
    title: "Compliance with International Data Laws",
    content:"We follow Indian and international data protection standards, including:",
    bulletPoints: [
      "The Information Technology Act, 2000 (India)",
      "Personal Data Protection Bill (India, when enacted)",
      "General Data Protection Regulation (GDPR – EU) (Applicable if users reside in Europe)",
    ],
    bottomContent:
    "Indian users are protected under national data privacy laws.",
  },
  {
    title: "Changes to This Privacy Policy",
    bulletPoints: [
      "We may update this Privacy Policy from time to time.",
      "Users will be notified of significant changes via email or website updates.",
      "Continued use of our services after changes means you accept the updated policy."
    ],
  },
  {
    title: "Check this page regularly for the latest version.",
  },
];

const Privacy = () => {
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
         Privacy Policy
        </Typography>
        <Typography
          variant='body1'
          fontWeight='500'
          fontSize={{ xs: "16px", sm: "18px", md: "20px" }}
          fontFamily='Figtree'
          color='#FFFFFF80'
          sx={{ mt: 1, opacity: 0.8 }}>
          Published and Effective as of March 1, 2025
        </Typography>
      </Box>

      <Typography
        variant='h6'
        fontWeight='600'
        fontFamily='Figtree'
        fontSize={{ xs: "14px", sm: "18px", md: "22px" }}
        color='#FFFFFF80'
        sx={{ opacity: 0.8, mb: 3 }}>
       Welcome to USDT Marketplace, operated by GSX Solutions PVT, Delhi, India (“Company, ”“we, ” “our, ” “us”). 
       Your privacy is our top priority. This Privacy Policy explains how we collect, use, store, and protect your personal data when you use <span style={{ color: "#C8FF57" }}>www.usdtmarketplace.com  </span> (Website).
       By using our services, you agree to the collection and use of information in accordance with this policy. If you do not agree, please do not use our services.
      </Typography>

      {privacySections.map((section, index) => (
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
                  mt: 0, // reset top margin
                  mb: 0,
                  pt: 0, // reset top padding
                  color: "#FFFFFF90",
                  listStyle: "disc", // optional: ensure default bullet styling
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
          For any privacy-related concerns, contact our Data Protection Officer (DPO):
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
           legal@usdtmarketplace.com
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

export default Privacy;
