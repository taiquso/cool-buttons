"use client";

import { motion } from "framer-motion";

export default function InfiniteButton() {
  const textAppear = {
    initial: {
      y: "100%",
    },
    hover: {
      y: 0,
    },
  };
  const infiniteText = {
    hover: {
      y: "-100%",
      transition: {
        ease: "easeIn",
        type: "spring",
        damping: 50,
        stiffness: 200,
      },
    },
    animate: {
      x: [0, "calc(-100% - 15px)"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 3,
          ease: "linear",
        },
      },
    },
  };
  const bgAnim = {
    initial: {
      backgroundColor: "#FFF",
    },
    hover: {
      backgroundColor: "#000",
      transition: {
        ease: "easeInOut",
        duration: 0.3,
      },
    },
  };
  return (
    <motion.a
      initial="initial"
      animate="animate"
      whileHover="hover"
      href=""
      variants={bgAnim}
      className="py-5 rounded-full"
    >
      <motion.div className="inline-flex relative justify-center w-full">
        <div className="gap-2 inline-flex relative top-0 whitespace-nowrap overflow-hidden w-full">
          <motion.p
            transition={{
              ease: "easeInOut",
              type: "spring",
              damping: 50,
              stiffness: 200,
            }}
            variants={infiniteText}
          >
            LEARN MORE ABOUT US
          </motion.p>
          <motion.p
            transition={{
              ease: "easeInOut",
              type: "spring",
              damping: 50,
              stiffness: 200,
            }}
            variants={infiniteText}
            className="absolute"
            style={{ left: "calc(100% + 15px)" }}
          >
            LEARN MORE ABOUT US
          </motion.p>
        </div>
        <p className="absolute overflow-hidden text-white">
          {"SEND INQUIRY".split("").map((char, i) => (
            <motion.span
              transition={{
                ease: "easeInOut",
                delay: i * 0.01,
                type: "spring",
                damping: 30,
                stiffness: 200,
              }}
              variants={textAppear}
              key={i}
              className="inline-block"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </p>
      </motion.div>
    </motion.a>
  );
}
