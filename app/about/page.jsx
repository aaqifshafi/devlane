"use client"
import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from "framer-motion";
import { Typography } from '@mui/material'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Contact from '../components/Contact'
import { circularRevealVariants, contentVariants, childVariants } from '../components/animations/framer';
import Image from 'next/image';
import faarid from '../public/faarid.png'
import aaqif from '../public/aaqif.png'

export default function Page() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const whoWeAreOpacity = useTransform(scrollYProgress, [0.3, 0.5], [0, 1]);
  const whoWeAreTextOpacity = useTransform(scrollYProgress, [0.6, 0.9], [1, 0]);

  return (
    <div className="relative w-full min-h-screen flex flex-col">
      <motion.div
        ref={containerRef}
        initial="hidden"
        animate="visible"
        style={{ scrollSnapAlign: "start", scrollBehavior: "smooth" }}
        className="flex-grow relative h-[300vh]"
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

          {/* Container for About and Team, occupying the same space */}
          <div className="sticky top-0 w-full h-screen flex items-center justify-center">
            <motion.div
              style={{ opacity: heroOpacity }}
              className="absolute w-full h-full"
            >
              <div className="h-screen flex flex-col justify-center items-center">
                <Typography className="antialiased font-bold tracking-tight" variant="h3" component="div">
                  We create the best web experience
                </Typography>
              </div>
            </motion.div>
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
                <div className='grid grid-cols-2 gap-20'>

                  <div className="antialiased font-bold text-center text-2xl mb-20">
                    <Image 
                    className='rounded-full mx-auto mb-6'
                    src={aaqif}
                    alt=""
                    width={100}
                    height={100}
                    />
                    <div className=''>
                      Aaqif Shafi
                    </div>
                    <div className='text-xl font-thin p-2 antialiased'>Full-Stack Developer</div>
                  </div>
                  <div className="antialiased font-bold text-center text-2xl mb-20">
                    <Image 
                    className='rounded-full mx-auto mb-6'
                    src={faarid}
                    alt=""
                    width={100}
                    height={100}
                    />
                    <div>Faarid Zargar</div>
                    <div className='text-xl font-thin p-2 antialiased'>Full-Stack Developer</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      <Contact />

      {/* Footer Section */}
      <motion.div variants={childVariants}>
        <Footer />
      </motion.div>
    </div>
  )
}