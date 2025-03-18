import React, { useState } from "react";
import {
  Container,
  Grid,
  Typography,
  Box,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";

const faqs = [
  { question: "What are the supported payment methods?", answer: "" },
  { question: "How long does it take to process transactions?", answer: "" },
  { question: "Are there any fees for converting USDT to INR?", answer: "" },
  { question: "How do I contact support?", answer: "" },
  { question: "What are the KYC Requirements and Guidelines?", answer: "" },
  {
    question: "Is there a minimum or maximum transaction limit?",
    answer:
      "Yes, transaction limits vary based on verification level and market conditions. You can check your account dashboard for details.",
  },
  { question: "What security measures are in place to protect my transactions?", answer: "" },
];

const FAQSection = () => {
  const [expanded, setExpanded] = useState(null);

  const handleExpand = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : null);
  };

  return (
    <Box
    sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent:"space-between",
        textAlign: "center",
        background: "linear-gradient(180deg, #000 0%, #111 100%)",
        paddingTop: 10,
        paddingBottom: 10,
        gap:10
      }}>
        <Box sx={{ maxWidth: "800px" }}>
        <Typography
          variant='body2'
          color='#A9EA2E'
          fontWeight='500'
          fontFamily='Figtree'
          display='flex'
          alignItems='center'
          justifyContent='center'
          gap={1}>
          <svg
            width='19'
            height='19'
            viewBox='0 0 19 19'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M14.9524 1.85653C14.9348 1.70102 14.8033 1.58347 14.6468 1.58331C14.4903 1.58315 14.3586 1.70043 14.3406 1.85591C14.2572 2.57972 14.0422 3.07627 13.7054 3.41307C13.3686 3.74987 12.8721 3.96482 12.1482 4.0483C11.9928 4.06624 11.8755 4.19796 11.8757 4.35446C11.8758 4.51096 11.9934 4.64245 12.1489 4.66006C12.8604 4.74066 13.3683 4.95556 13.7137 5.29468C14.0571 5.63196 14.2762 6.1278 14.3398 6.84435C14.3539 7.00333 14.4872 7.12516 14.6468 7.12498C14.8064 7.1248 14.9394 7.00267 14.9532 6.84366C15.0142 6.13922 15.233 5.63219 15.5788 5.28645C15.9245 4.9407 16.4316 4.72185 17.136 4.66087C17.295 4.6471 17.4171 4.5141 17.4173 4.35449C17.4175 4.19488 17.2957 4.06161 17.1367 4.04748C16.4201 3.98383 15.9243 3.76481 15.587 3.42132C15.2479 3.07596 15.033 2.5681 14.9524 1.85653Z'
              fill='#A9EA2E'
            />
            <path
              d='M9.49562 3.86921C9.45033 3.46933 9.11223 3.16706 8.70979 3.16665C8.30735 3.16624 7.96864 3.46781 7.92253 3.8676C7.70786 5.72883 7.15513 7.00567 6.28907 7.87173C5.42301 8.73779 4.14616 9.29052 2.28494 9.50519C1.88515 9.5513 1.58357 9.89001 1.58398 10.2925C1.5844 10.6949 1.88667 11.033 2.28655 11.0783C4.1163 11.2855 5.42222 11.8381 6.3103 12.7102C7.19354 13.5774 7.75675 14.8525 7.92042 16.695C7.95674 17.1038 8.29946 17.4171 8.70988 17.4166C9.1203 17.4162 9.46231 17.1021 9.4977 16.6933C9.6545 14.8818 10.2173 13.5781 11.1063 12.689C11.9954 11.7999 13.2992 11.2372 15.1106 11.0804C15.5195 11.045 15.8335 10.703 15.834 10.2925C15.8344 9.88212 15.5212 9.5394 15.1124 9.50308C13.2698 9.33941 11.9948 8.7762 11.1275 7.89296C10.2555 7.00489 9.70288 5.69896 9.49562 3.86921Z'
              fill='#A9EA2E'
            />
          </svg>
          FAQS
        </Typography>
        <Typography
          variant='h4'
          fontWeight='700'
          color='white'
          mt={1}
          maxWidth='800px'
          fontFamily='Figtree'>
           Got Questions? We’re Here to Help!
        </Typography>
        <Typography
          variant='body1'
          color='rgba(255, 255, 255, 0.7)'
          mt={2}
          maxWidth='600px'
          mx='auto'>
           Haven’t found what you’re looking for? Check out some common questions here, or contact our support team for more info.
        </Typography>
      </Box>
      <Container>
        <Grid container spacing={4} alignItems="flex-start">
          <Grid item xs={12} md={4} >
            <Box sx={{ textAlign: "left", px: { xs: 2, md: 4 },mt:10 }}>
              <SupportAgentIcon sx={{ fontSize: 50, color:'#A9EA2E' }} />
              <Typography variant="h5" fontWeight="bold" color="white" fontFamily='Figtree' fontSize="40px" sx={{ mt: 2 }}>
                We’re Here to Answer Your Questions...
              </Typography>
              <Typography variant="body2" fontFamily='Figtree' fontSize="15px" sx={{ color:'rgba(255, 255, 255, 0.7)', mt: 1 }}>
                Our support team is ready to assist you with any inquiries or issues you may have.
              </Typography>
              <Button
                variant="contained"
                sx={{
                  mt: 3,
                  bgcolor: "#A9EA2E",
                  color: "#000",
                  textTransform: "none",
                  fontWeight: "bold",
                  "&:hover": { bgcolor: "#85c021" },
                }}
              >
                Send us a message →
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={8}>
            <Box
              sx={{
                bgcolor: "#1A1A1A",
                borderRadius: 3,
                p: 2,
                boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
              }}
            >
              {faqs.map((faq, index) => (
                <Accordion
                  key={index}
                  expanded={expanded === index}
                  onChange={handleExpand(index)}
                  sx={{
                    bgcolor: "#1A1A1A",
                    color: "#fff",
                    boxShadow: "none",
                    "&:before": { display: "none" },
                    borderBottom: "1px solid #333",
                    
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
                    sx={{
                      fontWeight: "bold",
                      color: expanded === index ? "#97D129" : "#fff",
                      minHeight: "60px"
                    }}
                  >
                    {faq.question}
                  </AccordionSummary>
                  <AccordionDetails sx={{ color: "gray" }}>
                    {faq.answer || "No details available."}
                  </AccordionDetails>
                </Accordion>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default FAQSection;
