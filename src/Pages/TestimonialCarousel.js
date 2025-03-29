import React, { useEffect, useState } from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import {
  Box,
  Typography,
} from "@mui/material";
import p1 from "../assets/person1.jpeg";
import p2 from "../assets/people2.webp";
import p4 from "../assets/menOne.avif";
import p5 from "../assets/menTwo.avif";
import p6 from "../assets/lady.avif";
import Carousel from "../components/Carousel/Carousel";

const testimonials = [
  {
    id: 1,
    name: "Prabhleen Kaur",
    role: "Operations Manager at Figma",
    text: "USDT Marketplace has made crypto transactions seamless and secure. The platform is fast, and I’ve never had an issue with withdrawals. Highly recommended!",
    image: p1,
  },
  {
    id: 2,
    name: "John Doe",
    role: "Software Engineer at Google",
    text: "This platform changed how we manage our digital assets. The security and ease of use are unmatched!",
    image: p2,
  },
  //{
  //  id: 3,
  //  name: "Emma Smith",
  //  role: "Product Designer at Adobe",
  //  text: "A game-changer for designers! The platform’s features streamline my workflow, saving time and effort."
  //},
  {
    id: 4,
    name: "Michael Brown",
    role: "CTO at Blockchain Inc.",
    text: "Security and transparency are critical in the crypto space. This platform delivers both exceptionally well.",
    image: p4,
  },
  {
    id: 5,
    name: "Sophia Davis",
    role: "Marketing Lead at Shopify",
    text: "I've seen a significant increase in efficiency while handling transactions. Absolutely love it!",
    image: p6
  },
  //{
  //  id: 6,
  //  name: "Daniel Wilson",
  //  role: "Software Architect at Microsoft",
  //  text: "A robust and user-friendly platform that ensures smooth transactions. Highly recommended for professionals."
  //},
  //{
  //  id: 7,
  //  name: "Olivia Martinez",
  //  role: "CEO at FinTech Solutions",
  //  text: "This platform is transforming the way we interact with digital assets. The user experience is top-notch."
  //},
  {
    id: 8,
    name: "James Anderson",
    role: "Lead Developer at Meta",
    text: "I appreciate the level of security and performance. A must-have for anyone serious about crypto.",
    image:p5
  },
  //{
  //  id: 9,
  //  name: "Isabella Thomas",
  //  role: "Investor & Analyst",
  //  text: "An excellent platform with great features. It has simplified my portfolio management immensely."
  //},
  //{
  //  id: 10,
  //  name: "William Taylor",
  //  role: "Cybersecurity Expert at AWS",
  //  text: "Security and reliability are my top concerns, and this platform excels in both."
  //}
];
const properties = {
  autoplay: true,
  infinite: true,
  duration: 1000,
  transitionDuration: 500,
  prevArrow: <></>,
  nextArrow: <></>,
};

export default function TestimonialCarousel() {
  const fadeRef = React.useRef(null);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 1000);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1000);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        background: "linear-gradient(180deg, #000 0%, #111 100%)",
        paddingTop: 5,
        paddingBottom: 10,
      }}>
      <Box sx={{ maxWidth: "800px", paddingBottom: "20px" }}>
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
          Testimonials
        </Typography>
        <Typography
          variant='h4'
          fontWeight='700'
          color='white'
          mt={1}
          maxWidth='800px'
          fontFamily='Figtree'>
          Hear It from Our Customers
        </Typography>
        <Typography
          variant='body1'
          color='rgba(255, 255, 255, 0.7)'
          mt={2}
          maxWidth='600px'
          mx='auto'
          px={{xs:isSmallScreen?2:0
           }}
          >
          Trusted by professionals, loved by users. See their stories.
        </Typography>
      </Box>
      {/*<Box
        sx={{
          width: "100%",
          position: "relative",
          zIndex: 1,
          px: { xs: 2, sm: 2 },
        }}>
          {!isSmallScreen &&
        <IconButton
          onClick={() => fadeRef.current.goBack()}
          sx={{
            position: "absolute",
            left: "5%",
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 10,
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            color: "white",
            width: 60,
            height: 60,
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.9)" },
          }}>
          <KeyboardBackspaceIcon sx={{ fontSize: 36 }} />
        </IconButton>
          }
        <Fade ref={fadeRef} {...properties}>
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              sx={{
                display: "flex",
                alignItems: "center",
                p: 2,
                bgcolor: "#97D129",
                borderRadius: 4,
                height: "408px",
                mx: "auto",
                width: isSmallScreen ? "80%" : "70%",
              }}>
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  flex: 1,
                  height: "400px",
                  justifyContent: "space-between",
                }}>
                <Box
                  display='flex'
                  alignItems='center'
                  sx={{ height: isSmallScreen ? "10px" : "60px" }}
                  gap={1}>
                  <img
                    src={testimonial.companyLogo}
                    alt='logo'
                    width={24}
                    height={24}
                  />
                  {isSmallScreen ? (
                    <Typography
                      variant='body1'
                      fontWeight='600'
                      fontSize='24px'>
                      Figma
                    </Typography>
                  ) : (
                    <Typography variant='body1' fontWeight='bold'>
                      Figma
                    </Typography>
                  )}
                </Box>
                {isSmallScreen ? (
                  <>
                    <Typography
                      variant='h6'
                      color='#000000'
                      fontWeight='600'
                      letterSpacing='1.5%'
                      lineHeight='120%'
                      fontFamily='Figtree'
                      fontSize='20px'
                      textAlign='left'>
                      " {testimonial.text} "
                    </Typography>
                    <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                      <Avatar
                        src={testimonial.image}
                        sx={{ width: 180, height: 200, borderRadius: 4 }}
                      />
                      <Box
                        sx={{
                          textAlign: "left",
                          display: "flex",
                          flexDirection: "column",
                          ml: 1,
                        }}>
                        <Typography
                          variant='body2'
                          color='#000000'
                          fontWeight='600'
                          fontFamily='Figtree'
                          fontSize='18px'>
                          {testimonial.name}
                        </Typography>
                        <Typography variant='body2' color='textSecondary'>
                          {testimonial.role}
                        </Typography>
                      </Box>
                    </Box>
                  </>
                ) : (
                  <>
                    <Typography
                      variant='h6'
                      color='#000000'
                      fontWeight='600'
                      letterSpacing='1.5%'
                      lineHeight='120%'
                      fontFamily='Figtree'
                      fontSize='28px'
                      textAlign={"left"}>
                      " {testimonial.text} "
                    </Typography>
                    <Box sx={{ textAlign: "left" }}>
                      <Typography
                        variant='body2'
                        mt={2}
                        color='#000000'
                        fontWeight='600'
                        fontFamily='Figtree'
                        fontSize='20px'>
                        {testimonial.name}
                      </Typography>
                      <Typography variant='body2' color='textSecondary'>
                        {testimonial.role}
                      </Typography>
                    </Box>
                  </>
                )}
              </CardContent>
              {!isSmallScreen && 
                <Avatar
                src={testimonial.image}
                sx={{ width: 300, height: 400, mx: 2, borderRadius: 4 }}
              />}
            </Card>
          ))}
        </Fade>
        {!isSmallScreen &&
        <IconButton
          onClick={() => fadeRef.current.goNext()}
          sx={{
            position: "absolute",
            right: "5%",
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 10,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            color: "white",
            "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.8)" },
          }}>
          <EastIcon sx={{ fontSize: 36 }} />
        </IconButton>
        }
      </Box>*/}
      <Carousel testimonials={testimonials}/>
    </Box>
  );
}
