"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Hero from "@/app/components/Hero";
import WhoWeAre from "@/app/components/WhoWeAre";
import Blob from "./Blob";
import Contact from "./Contact";
import {
  circularRevealVariants,
  contentVariants,
  childVariants,
} from "./animations/framer";

const Main = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start", "end start"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const whoWeAreOpacity = useTransform(scrollYProgress, [0.3, 0.4], [0, 1]);

  return (
    <div className="relative w-full min-h-screen flex flex-col">
      <motion.div
        ref={containerRef}
        initial="hidden"
        animate="visible"
        style={{ scrollSnapAlign: "start", scrollBehavior: "smooth" }}
        className="flex-grow relative h-[200vh]"
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
          {/* Container for Hero and Who We Are */}
          <div className="relative w-full" style={{ height: "200vh" }}>
            <div className="sticky top-0 w-full h-screen flex items-center justify-center overflow-hidden">
              <Blob />
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
          </div>
        </motion.div>
      </motion.div>

      <Contact />

      {/* Footer Section */}
      <motion.div variants={childVariants}>
        <Footer />
      </motion.div>
    </div>
  );
};

export default Main;
