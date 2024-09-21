"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
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
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["center end", "center 60%"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const whoWeAreOpacity = useTransform(scrollYProgress, [0.5, 1], [0, 1]);

  return (
    <motion.div
      ref={containerRef}
      initial="hidden"
      animate="visible"
      style={{ scrollSnapAlign: "start", scrollBehavior: "smooth" }}
      className="relative w-full h-[200vh] overflow-y-auto scrollbar-hide"
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
        <div className="sticky top-0 w-full h-screen flex items-center justify-center">
          <motion.div
            style={{ opacity: heroOpacity }}
            className="absolute w-full h-full"
          >
            <Hero />
          </motion.div>
          <motion.div
            style={{ opacity: whoWeAreOpacity }}
            className="absolute w-full h-full"
          >
            <WhoWeAre />
          </motion.div>
        </div>

        {/* Footer Section */}
        <motion.div variants={childVariants} className="mt-screen">
          <Footer />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Main;
