import { Box, Typography, Grid } from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import Active from "../assets/Active Support-bro 1.png";
import Finger from "../assets/Fingerprint-bro 1.png";
import Money from "../assets/Money income-amico 1@2x.png";
import Money2 from "../assets/Money income-rafiki 1.png";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { useRef } from "react";
import "../components/Tilt/TiltCard.css";
const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = ROTATION_RANGE / 2;

const FeatureCard = ({
  title,
  description,
  Icon,
  svg,
  src,
  height,
  width,
  customStyles = {},
}) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const xSpring = useSpring(x);
  const ySpring = useSpring(y);
  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;
    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;
    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };
  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform,
        height,
        width,
      }}
      className='tilt-card'>
      <div
        style={{
          background:
            "linear-gradient(180.92deg, rgba(25, 25, 25, 0) 63.08%, #191919 96.42%)",
          boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.3)",
          color: "white",
          borderRadius: "16px",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
        }}
        className='inner-card inner-card-hover'>
        <motion.div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 1,
            transformStyle: "preserve-3d",
          }}>
          <motion.div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              textAlign: "left",
              whiteSpace: "nowrap",
              transformStyle: "preserve-3d",
            }}>
            <motion.div
              style={{ transformStyle: "preserve-3d" }}
              animate={{ transform: "translateZ(50px)" }}>
              <Typography variant='h6' fontWeight='700' fontFamily='Figtree'>
                {title}
              </Typography>
            </motion.div>

            <motion.div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#FFFFFF0D",
                width: "50px",
                height: "50px",
                borderRadius: "8px",
                transformStyle: "preserve-3d",
              }}
              animate={{ transform: "translateZ(75px)" }}>
              {Icon ? <Icon sx={{ color: "#A9EA2E", fontSize: 24 }} /> : null}
              {!Icon && svg && (
                <div
                  dangerouslySetInnerHTML={{ __html: svg }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "35px",
                    height: "35px",
                    transform: "translateZ(75px)",
                  }}
                />
              )}
            </motion.div>
          </motion.div>
          <motion.div animate={{ transform: "translateZ(50px)" }}>
            <Typography
              variant='body2'
              color='rgba(255, 255, 255, 0.7)'
              fontFamily='Figtree'
              sx={{ textAlign: "left" }}>
              {description}
            </Typography>
          </motion.div>
          <motion.div
            style={{
              display: "flex",
              flexGrow: 1,
              justifyContent: "flex-end",
              alignItems: "flex-end",
              
            }}
            animate={{ transform: "translateZ(75px)" }}>
            <Box
              component='img'
              src={src}
              alt=''
              sx={{
                overflow: "hidden",
                width: "65%",
                height: "auto",
                alignSelf: "flex-end",
                filter: "brightness(0.9)",
                imageWidth:customStyles.imageWidth,
                mt:customStyles.mt
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const FeaturesSection = () => {
  const features = [
    {
      title: "Instant INR Conversions",
      description: "💸 INR Deposited in Minutes – No Delays, No Hassle.",
      svg: `<svg
            width="19"
            height="19"
            viewBox="0 0 19 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.9524 1.85653C14.9348 1.70102 14.8033 1.58347 14.6468 1.58331C14.4903 1.58315 14.3586 1.70043 14.3406 1.85591C14.2572 2.57972 14.0422 3.07627 13.7054 3.41307C13.3686 3.74987 12.8721 3.96482 12.1482 4.0483C11.9928 4.06624 11.8755 4.19796 11.8757 4.35446C11.8758 4.51096 11.9934 4.64245 12.1489 4.66006C12.8604 4.74066 13.3683 4.95556 13.7137 5.29468C14.0571 5.63196 14.2762 6.1278 14.3398 6.84435C14.3539 7.00333 14.4872 7.12516 14.6468 7.12498C14.8064 7.1248 14.9394 7.00267 14.9532 6.84366C15.0142 6.13922 15.233 5.63219 15.5788 5.28645C15.9245 4.9407 16.4316 4.72185 17.136 4.66087C17.295 4.6471 17.4171 4.5141 17.4173 4.35449C17.4175 4.19488 17.2957 4.06161 17.1367 4.04748C16.4201 3.98383 15.9243 3.76481 15.587 3.42132C15.2479 3.07596 15.033 2.5681 14.9524 1.85653Z"
              fill="#A9EA2E"
            />
            <path
              d="M9.49562 3.86921C9.45033 3.46933 9.11223 3.16706 8.70979 3.16665C8.30735 3.16624 7.96864 3.46781 7.92253 3.8676C7.70786 5.72883 7.15513 7.00567 6.28907 7.87173C5.42301 8.73779 4.14616 9.29052 2.28494 9.50519C1.88515 9.5513 1.58357 9.89001 1.58398 10.2925C1.5844 10.6949 1.88667 11.033 2.28655 11.0783C4.1163 11.2855 5.42222 11.8381 6.3103 12.7102C7.19354 13.5774 7.75675 14.8525 7.92042 16.695C7.95674 17.1038 8.29946 17.4171 8.70988 17.4166C9.1203 17.4162 9.46231 17.1021 9.4977 16.6933C9.6545 14.8818 10.2173 13.5781 11.1063 12.689C11.9954 11.7999 13.2992 11.2372 15.1106 11.0804C15.5195 11.045 15.8335 10.703 15.834 10.2925C15.8344 9.88212 15.5212 9.5394 15.1124 9.50308C13.2698 9.33941 11.9948 8.7762 11.1275 7.89296C10.2555 7.00489 9.70288 5.69896 9.49562 3.86921Z"
              fill="#A9EA2E"
            />
          </svg>`,
      src: Money2,
      height: "400px",
      width: "550px",
    },
    {
      title: "Secure & Verified",
      description: "🔒 Bank-Level Security – Aadhaar, 2FA & Strong Encryption",
      Icon: LockIcon,
      src: Finger,
      height: "555px",
      width: "503px",
    },
    {
      title: "Transparent Pricing",
      description: "📊 Real-Time Rates – No Hidden Fees, No Surprises.",
      svg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.85123 19.0302C3.29425 18.1904 3.00001 17.178 3 16C3.45007 12.8495 5.52061 10.5093 7.75299 8.25H16.3521C18.4405 10.4656 20.5457 12.82 21 16C21 17.178 20.7058 18.1904 20.1488 19.0302C19.5957 19.8642 18.8228 20.469 17.9544 20.9025C16.2468 21.7548 14.0585 22 12 22C9.94146 22 7.75317 21.7548 6.04565 20.9025C5.17717 20.469 4.40435 19.8642 3.85123 19.0302Z" fill="#A9EA2E"/>
<path d="M16.0455 4.74275C16.381 3.84791 16.0426 2.81349 15.1408 2.49711C14.1777 2.15923 13.1286 2 12 2C10.8714 2 9.82234 2.15923 8.85923 2.49711C7.95743 2.81349 7.61897 3.84791 7.95453 4.74275L8.70225 6.73666L8.66667 6.75H15.3333L15.2978 6.73666L16.0455 4.74275Z" fill="#A9EA2E"/>
</svg>
`,
      src: Money,
      height: "555px",
      width: "550px",
    },
    {
      title: "24/7 Support",
      description: "🛠️ 24/7 Live Support – Instant Help, Anytime You Need.",
      Icon: WatchLaterIcon,
      src: Active,
      height: "400px",
      width: "503px",
    },
  ];

  return (
    <Box
      sx={{
        backgroundColor: "#111",
        py: { xs: 4, sm: 6, md: 8 },
        px: { xs: 2, sm: 4, md: 6 },
        textAlign: "center",
      }}>
      <Typography
        variant='body2'
        color='#A9EA2E'
        fontWeight='500'
        fontFamily='Figtree'
        display='flex'
        alignItems='center'
        justifyContent='center'
        gap={1}
        fontSize={{ xs: "14px", sm: "16px" }}>
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
        All in One USDT Solution
      </Typography>
      <Typography
        variant='h4'
        fontWeight='700'
        color='white'
        display='flex'
        alignItems='center'
        justifyContent='center'
        mt={1}
        maxWidth='800px'
        fontFamily='Figtree'
        mx='auto'>
        Why Choose Us?
        <br />
        Secure, Fast & Transparent USDT to INR Conversions
      </Typography>
      <Grid
        container
        mt={4}
        sx={{
          display: "flex",
          justifyContent: "center",
        }}>
        <Grid
          container
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "1fr", md: "repeat(2, 1fr)" },
            gridTemplateRows: "auto auto",
            gap: { xs: 2, sm: 3, md: 4 },
            maxWidth: "1090px",
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
            px: { xs: 0, sm: 3 },
          }}>
          {features.map((feature, index) => {
            const customStyles =
              index === 0
                ? { imageWidth: "60%", mt: "10px" }
                : index === 1
                ? { imageWidth: "72%", mt: "60px" }
                : index === 2
                ? { imageWidth: "72%", mt: "80px" }
                : {};
            return (
              <Grid
                item
                key={index}
                sx={{
                  height: "100%",
                  position: index === 2 ? "relative" : "static",
                  top: { xs: "0", sm: index === 2 ? "-9.5rem" : "0px" },
                }}>
                <FeatureCard {...feature} customStyles={customStyles} />
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Box>
  );
};

export default FeaturesSection;
