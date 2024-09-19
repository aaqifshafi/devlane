"use client";
import React from "react";
import { motion } from "framer-motion";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Hero from "@/app/components/Hero";

const circularRevealVariants = {
  hidden: {
    clipPath: "ellipse(50% 0% at 50% 100%)",
    opacity: 1,
  },
  visible: {
    clipPath: "ellipse(100% 50% at 50% 50%)",
    opacity: 0.3,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};

const contentVariants = {
  hidden: { y: "100%", opacity: 0 },
  visible: {
    y: "0%",
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeInOut",
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
};

const Main = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="relative w-full h-screen overflow-y-auto scrollbar-hide"
    >
      <div className="absolute inset-0 bg-background" />
      <motion.div
        variants={circularRevealVariants}
        className="absolute inset-0 z-10  bg-transition"
      />

      <motion.div
        variants={contentVariants}
        className="absolute inset-0 z-20 bg-background"
      >
        <motion.div variants={childVariants}>
          <Header />
        </motion.div>
        <motion.div variants={childVariants}>
          <Hero />
        </motion.div>
        <motion.div variants={childVariants}>
          <Footer />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Main;
