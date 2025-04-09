import { Box, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const AMLKYC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  const amlPolicySections = [
    {
      title: "Objectives of the AML/KYC Policy",
      content: `Prevent illegal activities, including money laundering, terrorism financing, human trafficking, and fraud.`,
      bulletPoints: [
        "Ensure compliance with Indian and international AML/KYC regulations.",
        "Detect and report suspicious activities to the relevant authorities.",
        "Protect our platform and users from being misused for financial crimes.",
      ],
    },
    {
      title: "Customer Identification & Verification (KYC Procedures)",
      content:
        "To ensure compliance, some users may be asked for additional KYC verification before using our platform.",
      subsections: [
        {
          title: "1. Example of Documents for KYC",
          content: "All users must provide the following:",
          bulletPoints: [
            "Government-Issued ID (Aadhaar Card, PAN Card)",
            "Selfie Verification (Real-time facial recognition for identity match)",
            "Proof of Address (Utility bill or bank statement, if required)",
            "Bank Account Details (Must match the name on KYC documents)",
          ],
        },
        {
          title: "2. KYC Process & Verification",
          bulletPoints: [
            "Users must submit KYC documents during registration.",
            "GSX Solutions will verify documents using AI-driven compliance software.",
            "Users may be required to provide additional information based on risk assessment.",
            "If suspicious activity is detected, GSX Solutions reserves the right to suspend or terminate the account.",
          ],
        },
      ],
    },
    {
      title: "Sanctions & Politically Exposed Persons (PEP) Screening",
      subsections: [
        {
          title: "1. GSX Solutions screens users against:",
          bulletPoints: [
            "Sanction Lists (United Nations, European Union, UK Treasury, US OFAC)",
            "PEP Databases (Politically Exposed Persons & close associates)",
          ],
        },
        {
          title: "2. Screening Process:",
          bulletPoints: [
            "At user registration (initial onboarding).",
            "During periodic AML compliance checks.",
            "Monthly database re-screening for all active users.",
          ],
        },
      ],
      bottomContent:
        "If a user is flagged in a sanctions list, their account will be immediately suspended, and relevant authorities will be notified.",
    },
    {
      title: "Compliance & AML Officer",
      content:
        "GSX Solutions has appointed an AML Compliance Officer, responsible for:",
      bulletPoints: [
        "Ensuring AML/KYC policy enforcement",
        "Monitoring transactions & reporting suspicious activity",
        "Maintaining records of KYC documents",
        "Interacting with regulatory bodies & law enforcement",
      ],
      bottomContent:
        "The AML Compliance Officer has the authority to request additional verification, freeze accounts, or escalate reports to authorities.",
    },
    {
      title: "Risk Assessment & Monitoring",
      content:
        "GSX Solutions employs a risk-based approach to monitor user activity and detect potential fraud.",
      subsections: [
        {
          title: "1. Risk Classification",
          content:
            "Users are classified into Low, Medium, and High-Risk Categories based on:",
          bulletPoints: [
            "Transaction volume & frequency",
            "User location & PEP status",
            "Any suspicious behavior detected by AI-based monitoring",
          ],
        },
        {
          title: "2. Automated & Manual Transaction Monitoring",
          bulletPoints: [
            "Real-time fraud detection algorithms analyze transaction patterns.",
            "High-value or unusual transactions are manually reviewed by the AML team.",
            "Suspicious activity is flagged for investigation & reporting.",
          ],
        },
      ],
    },
    {
      title: "Record-Keeping & Data Retention",
      content:
        "GSX Solutions maintains detailed records of all user transactions and KYC documentation for a minimum of 5 years as per regulatory requirements.",
      content2: "These records include:",
      bulletPoints: [
        "User KYC data (ID verification, address, risk classification)",
        "Transaction history (USDT deposits, INR withdrawals)",
        "Suspicious activity reports (SARs)",
      ],
      bottomContent:
        "Records may be shared with regulatory bodies if required by law.",
    },
    {
      title: "Reporting of Suspicious Transactions",
      content: "GSX Solutions will immediately report suspicious activity to:",
      bulletPoints: [
        "Financial Intelligence Unit - India (FIU-IND)",
        "Law enforcement agencies (if required by legal order)",
      ],
      extraSubsection: {
        title: "Examples of Suspicious Transactions:",
        bulletPoints: [
          "Multiple transactions just below reporting limits (structuring).",
          "Deposits or withdrawals from high-risk jurisdictions.",
          "Sudden large transactions that are inconsistent with prior activity.",
        ],
        bottomContent:
          "Users involved in suspicious activities may have their accounts frozen or terminated.",
      },
    },
    {
      title: "Employee Due Diligence & AML Training",
      content:
        "GSX Solutions conducts strict employee background checks and ongoing AML training.",
      bulletPoints: [
        "All employees undergo AML compliance training before onboarding.",
        "High-risk transaction review teams receive enhanced risk awareness training.",
        "Employees are required to report any suspicious behavior internally.",
      ],
    },
    {
      title: "Anti-Bribery & Anti-Corruption Policy",
      content:
        "GSX Solutions strictly prohibits bribery, embezzlement, and corruption in any form.",
      bulletPoints: [
        "Employees must not accept or offer bribes.",
        "We comply with Indian anti-corruption laws & global best practices.",
        "Any violation will result in termination & legal action.",
      ],
      bottomContent:
        "All vendors & partners must also comply with our anti-bribery policy.",
    },
    {
      title: "Compliance with Indian & International Laws",
      content: "GSX Solutions ensures compliance with:",
      bulletPoints: [
        "The Prevention of Money Laundering Act (PMLA), India",
        "Financial Intelligence Unit - India (FIU-IND) Regulations",
        "International FATF (Financial Action Task Force) Standards",
      ],
      bottomContent:
        "Failure to comply with these regulations may result in account suspension or legal action.",
    },
  ];

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
      <Box sx={{ mb: 4 }}>
        <Typography
          variant='h4'
          fontWeight='700'
          fontSize={{ xs: "36px", sm: "48px", md: "60px" }}
          color='#FFFFFF'
          fontFamily='Figtree'>
          Anti-Money Laundering (AML) & Know
          Your Customer (KYC) Policy
        </Typography>

        <Typography
          variant='body1'
          fontWeight='500'
          fontSize={{ xs: "16px", sm: "18px", md: "20px" }}
          fontFamily='Figtree'
          color='#FFFFFF80'
          sx={{ mt: 1, opacity: 0.8 }}>
          Last updated: March 1, 2025
        </Typography>
        <Typography
        variant='h6'
        fontWeight='600'
        fontFamily='Figtree'
        fontSize={{ xs: "14px", sm: "18px", md: "22px" }}
        color='#FFFFFF80'
        sx={{ opacity: 0.8, mb: 3 }}>
          GSX Solutions PVT, Delhi, India (“GSX Solutions”), the owner and
          operator of USDT Marketplace, is committed to preventing money
          laundering, terrorist financing, and other financial crimes. This
          AML/KYC Policy is designed to ensure compliance with applicable Indian
          financial regulations, international AML laws, and best practices to
          protect the integrity of our platform. By using USDT Marketplace, all
          users agree to adhere to this policy.
        </Typography>
      </Box>
      <Box>
        {amlPolicySections.map((section, index) => (
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
            {section.content2 && (
              <Typography
                color='#FFFFFF90'
                fontSize= "18px"
                fontFamily='Figtree'
                sx={{
                  opacity: 0.9,
                  "@media (max-width: 768px)": { fontSize: "15px" },
                  "@media (max-width: 480px)": { fontSize: "14px" },
                }}>
                {section.content2}
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

        <Box sx={{ mt: 4 ,mb:8}}>
          <Typography
            fontWeight='600'
            fontSize='16px'
            fontFamily='Figtree'
            color='#FFFFFF'
            sx={{ mt: 1 }}>
            For any AML/KYC inquiries, please contact our Compliance Team:
          </Typography>
          <Typography
            variant='body2'
            fontWeight='500'
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
    </Box>
  );
};

export default AMLKYC;
