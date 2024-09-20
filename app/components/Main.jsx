"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Hero from "@/app/components/Hero";
import WhoWeAre from "@/app/components/WhoWeAre";
import {
  circularRevealVariants,
  contentVariants,
  childVariants,
} from "./animations/framer";
const Main = () => {
  const whoWeAreRef = useRef(null);
  const isWhoWeAreInView = useInView(whoWeAreRef, { once: false, amount: 0.5 });

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="relative w-full h-screen overflow-y-auto scrollbar-hide"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-background" />
      <motion.div
        variants={circularRevealVariants}
        className="absolute inset-0 z-10 bg-transition"
      />

      {/* Content layer */}
      <motion.div
        variants={contentVariants}
        className="absolute inset-0 z-20 bg-background"
      >
        {/* Header Section */}
        <motion.div variants={childVariants}>
          <Header />
        </motion.div>

        {/* Container for Hero and Who We Are, occupying the same space */}
        <div className="relative w-full h-full flex items-center justify-center">
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: isWhoWeAreInView ? 0 : 1 }} // Fade out when "Who We Are" is in view
            transition={{ duration: 0.6 }}
            className="absolute w-full h-full"
          >
            <Hero />
          </motion.div>
          <motion.div
            ref={whoWeAreRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: isWhoWeAreInView ? 1 : 0 }}
            transition={{ duration: 0.6 }}
            className="absolute w-full h-full"
          >
            <WhoWeAre />
          </motion.div>
        </div>

        {/* Footer Section */}
        <motion.div variants={childVariants}>
          <Footer />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Main;
