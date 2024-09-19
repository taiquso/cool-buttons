"use client";

import { motion } from "framer-motion";

export default function BgSlideButton() {
  const primaryText = {
    initial: {
      y: 0,
    },
    hover: {
      y: "-100%",
      transition: {
        ease: [0.76, 0, 0.24, 1],
        type: "spring",
        damping: 70,
        stiffness: 200,
      },
    },
  };
  const secondaryText = {
    initial: {
      y: "100%",
    },
    hover: {
      y: 0,
      transition: {
        ease: [0.76, 0, 0.24, 1],
        type: "spring",
        damping: 30,
        stiffness: 200,
      },
    },
  };
  const backgroundHover = {
    initial: {
      height: 0,
      width: "60%",
      borderRadius: "9999px",
    },
    hover: {
      height: "100%",
      width: "100%",
    },
  };
  return (
    <motion.a
      initial="initial"
      whileHover="hover"
      exit="exit"
      className="inline-block relative overflow-hidden bg-white rounded-full cursor-pointer"
    >
      <motion.div
        variants={primaryText}
        transition={{
          ease: [0.76, 0, 0.24, 1],
          type: "spring",
          damping: 30,
          stiffness: 200,
        }}
        className="py-5 px-9 rounded-full"
      >
        OUR WORK
      </motion.div>
      <motion.div
        variants={secondaryText}
        transition={{
          ease: [0.76, 0, 0.24, 1],
          type: "spring",
          damping: 30,
          stiffness: 200,
        }}
        className="absolute left-0 h-full w-full flex justify-center items-center inset-0 rounded-full"
      >
        <motion.p
          transition={{
            ease: [0.76, 0, 0.24, 1],
            type: "spring",
            damping: 30,
            stiffness: 200,
          }}
          className="absolute"
        >
          OUR WORK
        </motion.p>

        <motion.div
          variants={backgroundHover}
          className="bg-[#c9ff18]"
        ></motion.div>
      </motion.div>
    </motion.a>
  );
}
