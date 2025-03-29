import React, { useEffect, useState } from "react";
import { Fade } from "react-slideshow-image";
import { TiChevronLeftOutline, TiChevronRightOutline } from "react-icons/ti";
import "./Carousel.css";
import { Avatar, Box, Typography } from "@mui/material";
const MAX_VISIBILITY = 3;
const properties = {
  autoplay: true,
  infinite: true,
  duration: 100,
  transitionDuration: 500,
  prevArrow: <></>,
  nextArrow: <></>,
};


const Card = ({ testimonial }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 1000);
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1000);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className={`card ${isSmallScreen ?'small-card-width':'large-card-width'}`}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          height: "100%",
        }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 5,
            height: "100%",
          }}>
          <Box
            display='flex'
            alignItems='center'
            sx={{ height: isSmallScreen ? "10px" : "60px" }}
            gap={1}>
            <img
              src={"https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg"}
              alt='logo'
              width={24}
              height={24}
            />
            {isSmallScreen ? (
              <Typography variant='body1' fontWeight='600' fontSize='24px'>
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
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: "100%",
                }}>
                <Typography
                  variant='h6'
                  color='#000000'
                  fontWeight='600'
                  letterSpacing='1.5%'
                  lineHeight='120%'
                  fontFamily='Figtree'
                  fontSize='20px'
                  textAlign={"left"}>
                  " {testimonial.text} "
                </Typography>
                <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                  <Avatar
                    src={testimonial.image}
                    sx={{ width: 160, height: 200, borderRadius: 4 }}
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
              </Box>
            </>
          ) : (
            <>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: "100%",
                }}>
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
              </Box>
            </>
          )}
        </Box>
        {!isSmallScreen && (
          <Avatar
            src={testimonial.image}
            sx={{ width: 320, height: 400, mx: 2, borderRadius: "1rem" }}
          />
        )}
      </Box>
    </div>
  );
};

const CarouselCard = ({ children }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 1000);
  const [active, setActive] = useState(2);
  const count = React.Children.count(children);
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1000);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div
      className={`carousel ${isSmallScreen ? "small-width" : "large-width"}`}>
      {active > 0 && (
        <button className='nav left' onClick={() => setActive((i) => i - 1)}>
          <TiChevronLeftOutline />
        </button>
      )}
      {React.Children.map(children, (child, i) => (
        <div
          className='card-container'
          style={{
            "--active": i === active ? 1 : 0,
            "--offset": (active - i) / 3,
            "--direction": Math.sign(active - i),
            "--abs-offset": Math.abs(active - i) / 3,
            "pointer-events": active === i ? "auto" : "none",
            opacity: Math.abs(active - i) >= MAX_VISIBILITY ? "0" : "1",
            display: Math.abs(active - i) > MAX_VISIBILITY ? "none" : "block",
          }}>
          {child}
        </div>
      ))}
      {active < count - 1 && (
        <button className='nav right' onClick={() => setActive((i) => i + 1)}>
          <TiChevronRightOutline />
        </button>
      )}
    </div>
  );
};

const Carousel = ({testimonials}) => {
  //const fadeRef = React.useRef(null);
  return (
    //<Fade ref={fadeRef} {...properties}>
    <CarouselCard >
      {testimonials.map((testimonial) => (
        <Card testimonial={testimonial} />
      ))}
    </CarouselCard>
      //</Fade>
  );
};

export default Carousel;
