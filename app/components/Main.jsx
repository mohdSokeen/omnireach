"use client";
import XIcon from "@mui/icons-material/X";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function Main({ mode }) {
  const [showText, setShowText] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowText((prev) => !prev);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const lottieStyle = {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
  };

  return (
    <div className="w-full">
      <div
        className="relative flex flex-row justify-start items-center w-full px-[15%] min-h-[680px] bg-center bg-cover bg-fixed 
                   max-md:block max-md:px-0 max-md:pt-[150px]"
        style={{ backgroundImage: "none" }}
      >
        {/* Background with animation */}
        <AnimatePresence mode="wait">
          {!showText && (
            <motion.div
              key="lottie"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0 z-0"
            >
              {mode === "light" && (
                <DotLottieReact
                  src="/images/lightMode.lottie"
                  loop
                  autoplay
                  style={lottieStyle}
                />
              )}
              {mode === "dark" && (
                <DotLottieReact
                  src="/images/darkMode.lottie"
                  loop
                  autoplay
                  style={lottieStyle}
                />
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Content with animation */}
        <div className="relative z-10 w-full text-center">
          <AnimatePresence mode="wait">
            {showText && (
              <motion.div
                key="text"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 1 }}
              >
                <h1 className="text-[clamp(2rem,6vw,4rem)] font-bold leading-tight text-white" style={{ color: '#F7931E' }}>
                  Welcome to OmniReach
                </h1>
                <p className="text-lg mt-2 text-white/90">
                  At OmniReach Technology, we offer contract-staffing services
                  for a wide range of industries.
                </p>

                {/* Social Icons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1 }}
                  className="mt-8 flex justify-center gap-6"
                >
                  <a
                    href={process.env.NEXT_PUBLIC_LINKEDIN}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center justify-center w-12 h-12 rounded-full bg-white/90 shadow-md hover:bg-[#0A66C2] transition duration-300">
                    <LinkedInIcon className="!text-[#0A66C2] group-hover:!text-white !text-[30px]" />
                  </a>
                  <a
                    href={process.env.NEXT_PUBLIC_X}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center justify-center w-12 h-12 rounded-full bg-white/90 shadow-md hover:bg-black transition duration-300">
                    <XIcon className="!text-black group-hover:!text-white !text-[28px]" />
                  </a>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
