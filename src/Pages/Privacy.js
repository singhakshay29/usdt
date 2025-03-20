import { Box, Typography } from "@mui/material";
import React, {useEffect} from "react";
import { Link } from "react-router-dom";

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
    padding: "40px",
    paddingLeft: "60px",
    paddingRight: "60px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    backdropFilter: "blur(100px)",
    WebkitBackdropFilter: "blur(100px)",
    "@media (max-width: 768px)": {
      padding: "20px",
      paddingLeft: "30px",
      paddingRight: "30px",
    },
    "@media (max-width: 480px)": {
      padding: "15px",
      paddingLeft: "20px",
      paddingRight: "20px",
    },
  }}
>
  <Box
    sx={{
      maxWidth: "600px",
      mb: 4,
      "@media (max-width: 768px)": {
        maxWidth: "100%",
      },
    }}
  >
    <Typography
      variant="h4"
      fontWeight="700"
      fontSize="60px"
      color="#FFFFFF"
      fontFamily="Figtree"
      sx={{
        "@media (max-width: 768px)": {
          fontSize: "40px",
        },
        "@media (max-width: 480px)": {
          fontSize: "32px",
        },
      }}
    >
      Privacy Policy
    </Typography>
    <Typography
      variant="body1"
      fontWeight="400"
      fontSize="20px"
      fontFamily="Figtree"
      color="#FFFFFF80"
      sx={{
        mt: 1,
        opacity: 0.8,
        "@media (max-width: 768px)": {
          fontSize: "18px",
        },
        "@media (max-width: 480px)": {
          fontSize: "16px",
        },
      }}
    >
      Last updated: March 13, 2025
    </Typography>
  </Box>
  <Box>
    {[
      {
        title: "INFORMATION WE COLLECT",
        content: ` Personal Information: Name, email address, phone number, payment details, and other information you provide when using our services.
Transaction Information: Details of USDT-to-INR transactions conducted on our platform.
Device & Usage Data: IP address, browser type, operating system, and other technical details.
Cookies & Tracking Technologies: We use cookies and similar tracking technologies to enhance your experience.`,
      },
      {
        title: "HOW WE USE YOUR INFORMATION",
        content: `Process transactions and facilitate payments.
Provide customer support and respond to inquiries.
Improve and optimize our services and website.
Comply with legal obligations, fraud prevention, and security monitoring.`,
      },
      {
        title: "SHARING OF INFORMATION",
        content: `Service Providers: Third-party payment processors, analytics providers, and cloud service providers.
Legal Authorities: When required by law, regulation, or in response to valid legal requests.
Business Transfers: In case of a merger, sale, or transfer of assets.`,
      },
      {
        title: "DATA SECURITY",
        content: `We implement appropriate security measures to protect your data from unauthorized access, alteration, disclosure, or destruction. However, no online platform can guarantee complete security.`,
      },
      {
        title: "YOUR RIGHTS & CHOICES",
        content: `Depending on your location, you may have the right to:
Access, correct, or delete your personal data.
Opt out of certain data collection practices.
Withdraw consent for marketing communications.`,
      },
      {
        title: "THIRD-PARTY LINKS & SERVICES",
        content:
          "Our website may contain links to third-party websites. We are not responsible for their privacy practices and encourage users to review their policies before engaging.",
      },
      {
        title: "CHANGES TO THIS POLICY",
        content:
          "We may update this Privacy Policy periodically. Significant changes will be notified through an updated 'Effective Date' or other means of notice.",
      },
    ].map((section, index) => (
      <Box key={index} sx={{ mb: 2 }}>
        <Typography
          variant="subtitle1"
          fontWeight="600"
          fontFamily="Figtree"
          sx={{
            "@media (max-width: 768px)": {
              fontSize: "18px",
            },
            "@media (max-width: 480px)": {
              fontSize: "16px",
            },
          }}
        >
          {section.title}
        </Typography>
        <Typography
          color="#FFFFFF90"
          textTransform="uppercase"
          sx={{
            opacity: 0.8,
            mb: 3,
            "@media (max-width: 768px)": {
              fontSize: "16px",
            },
            "@media (max-width: 480px)": {
              fontSize: "14px",
            },
          }}
        >
          {section.content}
        </Typography>
      </Box>
    ))}
    <Box sx={{ mt: 4 }}>
      <Typography
        variant="body2"
        fontWeight="500"
        fontSize="20px"
        fontFamily="Figtree"
        color="#FFFFFF80"
        sx={{
          mt: 1,
          opacity: 0.8,
          "@media (max-width: 768px)": {
            fontSize: "18px",
          },
          "@media (max-width: 480px)": {
            fontSize: "16px",
          },
        }}
      >
        To contact our support team and access helpful resources, log in at{" "}
        <Link
          href="#"
          target=""
          style={{
            color: "#C8FF57",
            fontWeight: "bold",
            textDecoration: "none",
          }}
        >
          usdtmarketplace.com/support
        </Link>
      </Typography>
    </Box>
  </Box>
</Box>

  );
};

export default Privacy;
