"use client";
import React from "react";
import { motion } from "framer-motion";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Hero from "@/app/components/Hero";
import {
  circularRevealVariants,
  contentVariants,
  childVariants,
} from "./animations/baseAnimation";
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
