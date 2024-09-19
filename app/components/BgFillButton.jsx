"use client";

import { motion } from "framer-motion";

export default function BgFillButton() {
  const hoverVariants = {
    initial: {
      x: 20,
      color: "#000",
    },
    hover: {
      x: 0,
      color: "#FFF",
      transition: {
        ease: [0.76, 0, 0.24, 1],
        type: "spring",
        damping: 30,
        stiffness: 200,
      },
    },
  };
  const backGroundFill = {
    initial: {
      scale: "100%",
      backgroundColor: "#000",
    },
    hover: {
      scale: "4200%",
      backgroundColor: "#0000FF",
      transition: {
        duration: 10,
        ease: [0.76, 0, 0.24, 1],
        type: "spring",
        damping: 30,
        stiffness: 200,
      },
    },
  };

  const arrowAppear = {
    initial: {
      opacity: 0,
    },
    hover: {
      opacity: 1,
      transition: {
        duration: 10,
        ease: [0.76, 0, 0.24, 1],
        type: "spring",
        damping: 30,
        stiffness: 200,
      },
    },
  };
  return (
    <motion.a
      initial="initial"
      whileHover="hover"
      className="flex items-center gap-3 relative bg-white cursor-pointer py-5 px-9 rounded-full overflow-hidden"
    >
      <motion.div
        variants={backGroundFill}
        transition={{
          ease: [0.76, 0, 0.24, 1],
          duration: 0.4,
        }}
        className="bg-black size-2 rounded-full absolute left-[20%] "
      ></motion.div>
      <motion.div
        variants={hoverVariants}
        className="flex gap-3 items-center z-10"
      >
        <p className="text-nowrap">ABOUT US</p>
        <motion.span variants={arrowAppear}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
          </svg>
        </motion.span>
      </motion.div>
    </motion.a>
  );
}
