import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const TypingAnimation = () => {
  const phrases = ["Content Creator", "Software Developer", "UI/UX Designer", " Try to Click/ Drag/ Rotate the Computer below👇👇"];
  const emojis = ["🐐", "💻", "🎨"];
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const typingTimer = setTimeout(() => {
      if (isTyping) {
        if (currentIndex < phrases[currentPhraseIndex].length) {
          setDisplayedText((prevText) => prevText + phrases[currentPhraseIndex][currentIndex]);
          setCurrentIndex((prevIndex) => prevIndex + 1);
        } else {
          setIsTyping(false);
        }
      } else {
        const backspaceTimer = setTimeout(() => {
          if (currentIndex >= 0) {
            setDisplayedText((prevText) => prevText.slice(0, -1));
            setCurrentIndex((prevIndex) => prevIndex - 1);
          } else {
            setCurrentIndex(0); // Reset currentIndex
            setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
            setIsTyping(true);
          }
        }, 25); // Adjust the speed of backspacing (lower value means faster)

        return () => clearTimeout(backspaceTimer);
      }
    }, 100); // Adjust typing speed as needed

    return () => clearTimeout(typingTimer);
  }, [currentIndex, currentPhraseIndex, isTyping, phrases]);

  return (
    <p className={`${styles.heroSubText} mt-2 text-white-100`}>
      {displayedText}{" "}
      <motion.span
        animate={{
          opacity: [0, 1],
        }}
        transition={{
          duration: 0.5,
          repeat: Infinity,
          repeatType: "loop",
        }}
        style={{ fontSize: "1em", display: "inline-block", marginLeft: "2px" }}
      >
        |
      </motion.span>{" "}
      {emojis[currentPhraseIndex]}
    </p>
  );
};

const Hero = () => {
  const [isMovingUp, setIsMovingUp] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsMovingUp((prevIsMovingUp) => !prevIsMovingUp);
    }, 1000); // Adjust the duration of each up/down motion as needed

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row justify-between items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#fa021f]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h3 className={`${styles.heroHeadText} text-white text-lg`}>
            Hi!! I'm{" "}
            <span className="text-[#fa021f]">Vishnu</span>
            <motion.span
              animate={{
                rotate: [0, 5, -5, 0], // Tilting effect
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
              style={{ display: "inline-block" }}
            >
              🦁
            </motion.span>
          </h3>
          <TypingAnimation />
        </div>

        <div className="flex justify-end items-start">
          <motion.img
            src="https://i.ibb.co/jL7w7T8/Profile.png"
            alt="Profile Picture"
            className="w-42 h-42 sm:w-50 sm:h-50 rounded-full"
            initial={{ opacity: 0, y: -10 }} // Start slightly above its position
            animate={{
              opacity: 1,
              y: isMovingUp ? [-10, 0] : [0, -10], // Move up and down
            }}
            whileHover={{ scale: 1.1 }} // Add scaling effect on hover
            transition={{ duration: 0.5, ease: "easeInOut" }} // Set the duration and easing of the motion
          />
        </div>
      </div>

      <ComputersCanvas style={{ marginTop: "50px", width: "100%", height: "auto" }} />

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>

      <style>
        {`
          /* Custom scrollbar styling */
          ::-webkit-scrollbar {
            width: 10px;
          }

          ::-webkit-scrollbar-track {
            background: linear-gradient(135deg, #fa021f, #915EFF);
          }

          ::-webkit-scrollbar-thumb {
            background: linear-gradient(135deg, #fa021f, #915EFF);
            border-radius: 10px;
          }

          ::-webkit-scrollbar-thumb:hover {
            background: linear-gradient(135deg, #915EFF, #fa021f);
          }
        `}
      </style>
    </section>
  );
};

export default Hero;
