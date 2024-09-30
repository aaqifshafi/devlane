"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Typography } from "@mui/material";
import Contact from "../components/Contact";
import {
  circularRevealVariants,
  contentVariants,
  childVariants,
} from "../components/animations/framer";
import Image from "next/image";
import faarid from "../public/faarid.png";
import aaqif from "../public/aaqif.png";

export default function Page() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  
  const heroOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);
  const whoWeAreOpacity = useTransform(scrollYProgress, [0.2, 0.35], [0, 1]);
  const whoWeAreTextOpacity = useTransform(scrollYProgress, [0.3, 0.45], [1, 0]);
  const servicesOpacity = useTransform(scrollYProgress, [0.4, 0.55], [0, 1]);
  const servicesTextOpacity = useTransform(scrollYProgress, [0.55, 0.65], [1, 0]);
  const projectsOpacity = useTransform(scrollYProgress, [0.62, 0.77], [0, 1]);
  const projectsTextOpacity = useTransform(scrollYProgress, [0.8, 0.85], [1, 0]);

  return (
    <div className="relative w-full min-h-screen flex flex-col">
      <motion.div
        ref={containerRef}
        initial="hidden"
        animate="visible"
        style={{ scrollSnapAlign: "start", scrollBehavior: "smooth" }}
        className="flex-grow relative h-[600vh]"
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
          {/* Container for all sections, occupying the same space */}
          <div className="sticky top-0 w-full h-screen flex items-center justify-center">
            {/* Hero Section */}
            <motion.div
              style={{ opacity: heroOpacity }}
              className="absolute w-full h-full"
            >
              <div className="h-screen flex flex-col justify-center items-center">
                <Typography
                  className="antialiased font-bold tracking-tight"
                  variant="h3"
                  component="div"
                >
                  We create the best web experience
                </Typography>
              </div>
            </motion.div>

            {/* Team Section */}
            <motion.div
              style={{ opacity: whoWeAreOpacity }}
              className="absolute w-full h-full"
            >
              <motion.div
                className="h-screen flex flex-col justify-center items-center"
                style={{ opacity: whoWeAreTextOpacity }}
              >
                <Typography className="antialiased font-bold text-center text-5xl mt-12 mb-40 tracking-tight">
                  Meet our Team
                </Typography>
                <div className="grid grid-cols-2 gap-20">
                  <div className="antialiased font-bold text-center text-2xl mb-20">
                    <Image
                      className="rounded-full mx-auto mb-6"
                      src={aaqif}
                      alt=""
                      width={100}
                      height={100}
                    />
                    <div className="">Aaqif Shafi</div>
                    <div className="text-xl font-thin p-2 antialiased">
                      Full-Stack Developer
                    </div>
                  </div>
                  <div className="antialiased font-bold text-center text-2xl mb-20">
                    <Image
                      className="rounded-full mx-auto mb-6"
                      src={faarid}
                      alt=""
                      width={100}
                      height={100}
                    />
                    <div>Faarid Zargar</div>
                    <div className="text-xl font-thin p-2 antialiased">
                      Full-Stack Developer
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Services Section */}
            <motion.div
              style={{ opacity: servicesOpacity }}
              className="absolute w-full h-full"
            >
              <motion.div
                className="h-screen flex flex-col justify-center items-center"
                style={{ opacity: servicesTextOpacity }}
              >
              <div className="h-screen flex flex-col justify-center items-center">
                <Typography className="antialiased font-bold text-center text-5xl mb-12 tracking-tight">
                  Our Services
                </Typography>
                <div className="grid grid-cols-3 gap-8 text-center">
                  <div className="p-4">
                    <Typography variant="h5" className="mb-2">Web Development</Typography>
                    <Typography>Custom websites tailored to your needs</Typography>
                  </div>
                  <div className="p-4">
                    <Typography variant="h5" className="mb-2">Mobile Apps</Typography>
                    <Typography>Cross-platform mobile applications</Typography>
                  </div>
                  <div className="p-4">
                    <Typography variant="h5" className="mb-2">UI/UX Design</Typography>
                    <Typography>Intuitive and engaging user experiences</Typography>
                  </div>
                </div>
              </div>
            </motion.div>
            </motion.div>

            {/* Projects Section */}
            <motion.div
              style={{ opacity: projectsOpacity }}
              className="absolute w-full h-full"
            >
              <motion.div
                className="h-screen flex flex-col justify-center items-center"
                style={{ opacity: projectsTextOpacity }}
              >
              <div className="h-screen flex flex-col justify-center items-center">
                <Typography className="antialiased font-bold text-center text-5xl mb-12 tracking-tight">
                  Our Projects
                </Typography>
                <div className="grid grid-cols-2 gap-8">
                  <div className="p-4 text-center">
                    <Typography variant="h5" className="mb-2">Project A</Typography>
                    <Typography>E-commerce platform for a global retailer</Typography>
                  </div>
                  <div className="p-4 text-center">
                    <Typography variant="h5" className="mb-2">Project B</Typography>
                    <Typography>Social media app for creative professionals</Typography>
                  </div>
                </div>
              </div>
            </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
      <Contact />
    </div>
  );
}